import {Component, OnInit} from '@angular/core';
import {RegisterService} from './register.service';
import {Router} from '@angular/router';
import {AuthenticationService} from '../login/authentication.service';
import {ConfigService} from '../../shared/config.service';
import {NotificationService} from '../../shared/notification.service';
import {UtilityService} from '../../shared/utility.service';
import {AuthSharedService} from '../auth-shared.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RegisterInterface} from './models/register.interface';
import {SharedService} from '../../shared/service/shared.service';
import {errorAnimation} from '../../shared/component/animation/error-animation';
import {UserInfoResponseInterface} from '../login/models/user-info-response.interface';
import {UserAccountService} from '../../main/pages/user-account/user-account.service';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [
    errorAnimation()
  ]
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  disableButton: boolean = true;
  notMatch: boolean = false;
  genders = [{title: 'Unknown', value: 1},
    {title: 'Female', value: 2},
    {title: 'Male', value: 3}];
  emailUnique: boolean = false;
  userNameUnique: boolean = false;

  showSpinner: boolean = false;

  userNameSubject: Subject<any> = new Subject();
  emailSubject: Subject<any> = new Subject();

  checkingUserName: boolean;
  checkingEmail: boolean;

  constructor(private registerService: RegisterService,
              private authService: AuthenticationService,
              private router: Router,
              private fb: FormBuilder,
              private shs: SharedService,
              public us: UtilityService,
              public configService: ConfigService,
              private notificationService: NotificationService,
              private authSharedService: AuthSharedService,
              private userAccountService: UserAccountService) {
  }

  ngOnInit() {
    this.createForm();
    this.userNameSubject
      .pipe(debounceTime(300))
      .subscribe(() => {
          this.registerForm.controls.userName.updateValueAndValidity();
          this.checkUnique(1, this.registerForm.value.userName);
        }
      );
    this.emailSubject
      .pipe(debounceTime(300))
      .subscribe(() => {
          this.registerForm.controls.email.updateValueAndValidity();
          this.checkUnique(2, this.registerForm.value.email);
        }
      );
  }

  createForm() {
    this.registerForm = this.fb.group({
      firstName: [null, Validators.compose([Validators.required, Validators.maxLength(20)])],
      lastName: [null, Validators.compose([Validators.required, Validators.maxLength(30)])],
      userName: [null, Validators.required],
      password: [null, Validators.compose([Validators.required,
        Validators.pattern(/^(?=^.{8,}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)[0-9a-zA-Z!@#$%^&*()]*$/)])],
      email: [null, Validators.required],
      confirmPassword: [null],
      companyName: [null],
      gender: [''],
    });
  }

  submit() {
    if (!this.registerForm.value.confirmPassword) {
      this.confirmPasswordOut();
    }
    if (this.registerForm.valid && !this.notMatch && this.registerForm.value.confirmPassword && !this.emailUnique && !this.userNameUnique) {
      this.confirmPasswordOut();
      this.showSpinner = true;
      const key = this.authSharedService.keyLogin;
      const mobile = +this.authSharedService.mobile;
      const payload: RegisterInterface = this.registerForm.value;
      payload['key'] = key;
      payload['mobile'] = mobile;
      payload['prefixNumberId'] = this.authSharedService.prefixNumberId;
      delete payload['confirmPassword'];
      this.registerService.saveInfo(payload)
        .subscribe(res => {
            this.authService.setToken(res.data.token);
            localStorage.removeItem('k-l');
            this.userAccountService.getUserInfo()
              .subscribe((result: UserInfoResponseInterface) => {
                this.showSpinner = false;
                this.shs.setUserInfo(result.data);
                this.router.navigateByUrl('');
                this.configService.authenticationChanged.emit(true);
              });
          },
          err => {
            this.showSpinner = false;
            if (err.error.Message === '1') {
              this.router.navigate(['/login']);
            }
          });
    }
  }

  confirmPasswordOut() {
    if (this.registerForm.value.password !== this.registerForm.value.confirmPassword) {
      this.notMatch = true;
      return;
    } else {
      this.notMatch = false;
    }
  }

  confirm(event) {
    this.disableButton = !event.checked;
  }

  checkUnique(key: number, value: string) {
    if (key === 1 ? value.length > 5 : value.length > 0 && key === 2 ? this.us.checkEmail(value) : null) {
      const payload = {key, value};
      this.shs.checkUnique(payload)
        .subscribe((res: any) => {
          if (!res.data) {
            if (key === 1) {
              this.userNameUnique = false;
            } else if (key === 2) {
              this.emailUnique = false;
            }
          } else {
            if (key === 1) {
              this.userNameUnique = true;
            } else if (key === 2) {
              this.emailUnique = true;
            }
          }
          this.checkingEmail = false;
          this.checkingUserName = false;
        });
    }
  }

  onKeyUp(type, value) {

    if (type === 'userName') {
      if (value.length > 5) {
        this.checkingUserName = true;
      } else {
        this.checkingUserName = false;
        this.userNameUnique = false;
      }
      this.userNameSubject.next();
    } else if (type === 'email') {
      if (value.length > 0 && this.us.checkEmail(value)) {
        this.checkingEmail = true;
      } else {
        this.checkingEmail = false;
        this.userNameUnique = false;
      }
      this.emailSubject.next();
    }
  }

  onKeyDown(type): void {
    if (type === 'userName') {
      this.registerForm.controls.userName.clearValidators();
    } else if (type === 'email') {
      this.registerForm.controls.email.clearValidators();
    }
  }
}
