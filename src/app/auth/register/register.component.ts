import {Component, OnInit} from '@angular/core';
import {RegisterService} from './register.service';
import {Router} from '@angular/router';
import {AuthenticationService} from '../login/authentication.service';
import {ConfigService} from '../../shared/config.service';
import {NotificationService} from '../../shared/notification.service';
import {UtilityService} from '../../shared/utility.service';
import {AuthSharedService} from '../auth-shared.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Gender} from '../../shared/enums';
import {RegisterInterface} from './models/register.interface';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
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

  constructor(private registerService: RegisterService,
              private authService: AuthenticationService,
              private router: Router,
              private fb: FormBuilder,
              private configService: ConfigService,
              private notificationService: NotificationService,
              private authSharedService: AuthSharedService) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.fb.group({
      firstName: [null, Validators.compose([Validators.required, Validators.maxLength(20)])],
      lastName: [null, Validators.compose([Validators.required, Validators.maxLength(30)])],
      userName: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      password: [null, Validators.compose([Validators.required,
        Validators.pattern(/^(?=^.{8,}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)[0-9a-zA-Z!@#$%^&*()]*$/)])],
      email: [null, Validators.required],
      confirmPassword: [null],
      companyName: [null],
      gender: [''],
      // countryId: [null],
      // defaultPrefix: [null]
    });
  }

  submit() {
    if (!this.registerForm.value.confirmPassword) {
      this.confirmPasswordOut();
    }
    if (this.registerForm.valid && !this.notMatch && this.registerForm.value.confirmPassword && !this.emailUnique && !this.userNameUnique) {
      this.confirmPasswordOut();
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
            this.configService.authenticationChanged.emit(true);
            this.router.navigateByUrl('index');
          },
          err => {
            if (err.error.Message === '1') {
              console.log(err);
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
    if (key === 1 ? value.length > 5 : value.length > 0) {
      const payload = {key, value};
      this.registerService.checkUnique(payload)
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
        });
    }
  }

}
