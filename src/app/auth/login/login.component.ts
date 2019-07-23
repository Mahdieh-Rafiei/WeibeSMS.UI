import{
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {RegisterService} from '../register/register.service';
import {Router} from '@angular/router';
import {AuthenticationService} from './authentication.service';
import {NotificationService} from '../../shared/notification.service';
import {LoginResponseInterface} from './models/login-response.interface';
import {ConfigService} from '../../shared/config.service';
import {LoginInterface} from './models/login.interface';
import {SendVerificationCodeInterface} from './models/send-verification-code.interface';
import {SendVerificationCodeResponseInterface} from './models/send-verification-code-response.interface';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthSharedService} from '../auth-shared.service';
import {SharedService} from '../../shared/service/shared.service';
import {DataCountryInterface} from '../../shared/models/data-country.interface';
import {errorAnimation} from '../../shared/component/animation/error-animation';
import {UserAccountService} from '../../main/pages/user-account/user-account.service';
import {UserInfoResponseInterface} from './models/user-info-response.interface';
import {InputedMobileModel} from '../../shared/component/country-flag-numbers/inputed-mobile-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    errorAnimation()
  ],
  encapsulation: ViewEncapsulation.None
})

export class LoginComponent implements OnInit, AfterViewChecked {

  isLoginMode = true;
  verificationCodeSent = false;
  mobile = '';
  username = '';
  password = '';
  registrationKey: string;
  isCorrectMobile = false;


  @ViewChild('mobileInput') mobileInput: ElementRef;



  signUpForm: FormGroup;
  signInForm: FormGroup;

  enterPressConfirm = false;
  countries: DataCountryInterface[];
  showSpinner = false;
  inputedMobileModel: InputedMobileModel;
  isTried = false;

  constructor(private authService: AuthenticationService,
              private registerService: RegisterService,
              private notificationService: NotificationService,
              private configService: ConfigService,
              private fb: FormBuilder,
              private authSharedService: AuthSharedService,
              private shs: SharedService,
              private router: Router,
              private userAccountService: UserAccountService,
              private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.createForm();
  }

  ngAfterViewChecked() {
    this.changeDetectorRef.detectChanges();
  }

  createForm() {
    this.signUpForm = this.fb.group({
      mobile: [null, Validators.compose([Validators.required
      ])],
      reason: [1],
      prefixNumberId: [1, Validators.required]
    });
    this.signInForm = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  setMobile(e: InputedMobileModel) {
    this.isCorrectMobile = e.isCorrectMobile;
    this.signUpForm.patchValue({'mobile': e.mobile});
    this.signUpForm.patchValue({'prefixNumberId': e.country.id});
    this.inputedMobileModel = e;
  }

  login() {
    if (this.signInForm.valid) {
      this.showSpinner = true;
      const payload: LoginInterface = this.signInForm.value;
      this.authService.loginViaUsernamePassword(payload)
        .subscribe((res: LoginResponseInterface) => {
            this.authService.setToken(res.data.token);
            this.userAccountService.getUserInfo()
              .subscribe((res: UserInfoResponseInterface) => {
                this.showSpinner = false;
                this.shs.setUserInfo(res.data);
                this.router.navigateByUrl('');
                this.configService.authenticationChanged.emit(true);
              });
          },
          err => {
            this.isTried = true;
            this.showSpinner = false;
          });
    }
  }


  keySendVerificationCode(event) {
    if (event.key === 'Enter') {
      this.sendVerificationCode();
    }
  }

  sendVerificationCode() {

    if (this.signUpForm.valid && this.isCorrectMobile) {
      this.showSpinner = true;
      this.authSharedService.mobile = this.signUpForm.value.mobile;
      this.authSharedService.prefixNumberId = +this.signUpForm.value.prefixNumberId;
      const payload: SendVerificationCodeInterface = this.signUpForm.value;

      this.registerService.sendVerificationCode(payload)
        .subscribe((res: SendVerificationCodeResponseInterface) => {

            this.showSpinner = false;
            if (res.data.codeIsExists) {
              this.notificationService.success('Please use the last code', '');
            } else {
              this.notificationService.success('Verification code sent successfully', '');
            }

            localStorage.setItem('k-l', res.data.key);
            this.verificationCodeSent = true;
            setTimeout(() => {
              // this.verificationCodePart1Element.nativeElement.focus();
            }, 500);
            this.registrationKey = res.data.key;
          },
          err => {

            this.showSpinner = false;
            if (err.error.Message === '4') {
              console.log(err);
              this.verificationCodeSent = true;
              setTimeout(() => {
                // this.verificationCodePart1Element.nativeElement.focus();
              }, 500);
            }
          });
    } else {
      this.enterPressConfirm = true;
    }
  }

  rollbackToFirstStep() {
    this.verificationCodeSent = false;
    this.registrationKey = '';
  }

  rollbackToLoginMode() {
    this.rollbackToFirstStep();
    this.isLoginMode = true;
  }
}


