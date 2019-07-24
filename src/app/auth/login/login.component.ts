import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import {RegisterService} from '../register/register.service';
import {Router} from '@angular/router';
import {AuthenticationService} from './authentication.service';
import {NotificationService} from '../../shared/notification.service';
import {LoginResponseInterface} from './models/login-response.interface';
import {ConfigService} from '../../shared/config.service';
import {LoginInterface} from './models/login.interface';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthSharedService} from '../auth-shared.service';
import {SharedService} from '../../shared/service/shared.service';
import {errorAnimation} from '../../shared/component/animation/error-animation';
import {UserAccountService} from '../../main/pages/user-account/user-account.service';
import {UserInfoResponseInterface} from './models/user-info-response.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    errorAnimation()
  ],
  encapsulation: ViewEncapsulation.None
})

export class LoginComponent implements OnInit {

  signInForm: FormGroup;
  isTried = false;

  constructor(private authenticationService: AuthenticationService,
              private registerService: RegisterService,
              private notificationService: NotificationService,
              private configService: ConfigService,
              private formBuilder: FormBuilder,
              private authSharedService: AuthSharedService,
              private sharedService: SharedService,
              private router: Router,
              private userAccountService: UserAccountService) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.signInForm = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  login() {
    if (this.signInForm.valid) {
      this.sharedService.spinnerStatusChanged.emit(true);
      const payload: LoginInterface = this.signInForm.value;
      this.authenticationService.loginViaUsernamePassword(payload)
        .subscribe((res: LoginResponseInterface) => {
            this.authenticationService.setToken(res.data.token);
            this.userAccountService.getUserInfo()
              .subscribe((res: UserInfoResponseInterface) => {
                this.sharedService.spinnerStatusChanged.emit(false);
                this.sharedService.setUserInfo(res.data);
                this.router.navigateByUrl('');
                this.configService.authenticationChanged.emit(true);
              });
          },
          err => {
            this.isTried = true;
            this.sharedService.spinnerStatusChanged.emit(false);
          });
    }
  }
}


