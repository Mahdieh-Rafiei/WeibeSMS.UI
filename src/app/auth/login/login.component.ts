import {Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {RegisterService} from '../register/register.service';
import {Router} from '@angular/router';
import {AuthenticationService} from './authentication.service';
import {NotificationService} from '../../shared/notification.service';
import {LoginResponseInterface} from './models/login-response.interface';
import {ConfigService} from '../../shared/config.service';
import {LoginInterface} from './models/login.interface';
import {SendVerificationCodeInterface} from './models/send-verification-code.interface';
import {SendVerificationCodeResponseInterface} from './models/send-verification-code-response.interface';
import {VerifyMobileInterface} from './models/verify-mobile.interface';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthSharedService} from '../auth-shared.service';
import {SharedService} from '../../shared/service/shared.service';
import {DataCountryInterface} from '../../shared/models/data-country.interface';
import {errorAnimation} from '../../shared/component/animation/error-animation';
import {UserAccountService} from '../../main/pages/user-account/user-account.service';
import {UserInfoResponseInterface} from './models/user-info-response.interface';
import {UtilityService} from '../../shared/utility.service';
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

export class LoginComponent implements OnInit {

  isLoginMode = true;
  verificationCodeSent = false;
  mobile = '';
  username = '';
  password = '';
  registrationKey: string;
  isCorrectMobile = false;

  @ViewChild('verificationCodePart1Element') verificationCodePart1Element: ElementRef;
  @ViewChild('verificationCodePart2Element') verificationCodePart2Element: ElementRef;
  @ViewChild('verificationCodePart3Element') verificationCodePart3Element: ElementRef;
  @ViewChild('verificationCodePart4Element') verificationCodePart4Element: ElementRef;
  @ViewChild('verificationCodePart5Element') verificationCodePart5Element: ElementRef;

  @ViewChild('mobileInput') mobileInput: ElementRef;

  verificationCodePart1 = '';
  verificationCodePart2 = '';
  verificationCodePart3 = '';
  verificationCodePart4 = '';
  verificationCodePart5 = '';

  signUpForm: FormGroup;
  signInForm: FormGroup;

  enterPressConfirm = false;
  countries: DataCountryInterface[];
  showSpinner = false;
  inputedMobileModel: InputedMobileModel;
  isTried = false;

  mobileValue;

  constructor(private authService: AuthenticationService,
              private registerService: RegisterService,
              private notificationService: NotificationService,
              private configService: ConfigService,
              private fb: FormBuilder,
              private authSharedService: AuthSharedService,
              private shs: SharedService,
              private router: Router,
              private userAccountService: UserAccountService,
              private utilityService: UtilityService) {
  }

  ngOnInit() {
    this.createForm();
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
      this.authSharedService.mobile = this.mobileValue;
      this.authSharedService.prefixNumberId = +this.signUpForm.value.prefixNumberId;
      const payload: SendVerificationCodeInterface = this.signUpForm.value;

      this.registerService.sendVerificationCode(payload)
        .subscribe((res: SendVerificationCodeResponseInterface) => {
            debugger;
            this.showSpinner = false;
            if (res.data.codeIsExists) {
              this.notificationService.success('Please use the last code', '');
            } else {
              this.notificationService.success('Verification code sent successfully', '');
            }

            localStorage.setItem('k-l', res.data.key);
            this.verificationCodeSent = true;
            setTimeout(() => {
              this.verificationCodePart1Element.nativeElement.focus();
            }, 500);
            this.registrationKey = res.data.key;
          },
          err => {
            debugger;
            this.showSpinner = false;
            if (err.error.Message === '4') {
              console.log(err);
              this.verificationCodeSent = true;
              setTimeout(() => {
                this.verificationCodePart1Element.nativeElement.focus();
              }, 500);
            }
          });
    } else {
      this.enterPressConfirm = true;
    }
  }

  getCountDown(event) {
    if (event) {
      this.sendVerificationCode();
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

  verify() {
    const verificationCode = this.verificationCodePart1.concat(this.verificationCodePart2, this.verificationCodePart3,
      this.verificationCodePart4, this.verificationCodePart5);
    const payload: VerifyMobileInterface = {
      Key: this.registrationKey ? this.registrationKey : localStorage.getItem('k-l'),
      Mobile: this.signUpForm.value.mobile,
      prefixNumberId: this.signUpForm.value.prefixNumberId,
      VerificationCode: +verificationCode,
      reason: 1
    };
    this.showSpinner = true;
    this.registerService.verifyMobile(payload)
      .subscribe((res: any) => {
          this.showSpinner = false;
          // this.authService.setToken(res.data);
          this.authSharedService.keyLogin = res.data;
          this.router.navigateByUrl('/register');
        },
        err => {
          this.showSpinner = false;
          this.emptyBoxes();
        });
  }

  emptyBoxes() {
    this.verificationCodePart1 = '';
    this.verificationCodePart2 = '';
    this.verificationCodePart3 = '';
    this.verificationCodePart4 = '';
    this.verificationCodePart5 = '';
  }

  setFocus(elementNumber: number, value) {
    if (!value || value.length === 0) {
      return;
    }

    switch (elementNumber) {

      case 1:
        this.verificationCodePart2Element.nativeElement.focus();
        break;

      case 2:
        this.verificationCodePart3Element.nativeElement.focus();
        break;

      case 3:
        this.verificationCodePart4Element.nativeElement.focus();
        break;

      case 4:
        this.verificationCodePart5Element.nativeElement.focus();
        break;

      case 5:
    }

    if (this.verificationCodePart1 && this.verificationCodePart2 && this.verificationCodePart3 &&
      this.verificationCodePart4 && this.verificationCodePart5) {
      this.verify();
    }
  }

  changeFocus(elementNumber: number, event) {
    if (event.key === 'Backspace') {
      switch (elementNumber) {

        case 2:
          if (this.verificationCodePart2 === '') {
            this.verificationCodePart1Element.nativeElement.focus();
          }
          this.verificationCodePart2 = '';
          break;

        case 3:
          if (this.verificationCodePart3 === '') {
            this.verificationCodePart2Element.nativeElement.focus();
          }
          this.verificationCodePart3 = '';
          break;

        case 4:
          if (this.verificationCodePart4 === '') {
            this.verificationCodePart3Element.nativeElement.focus();
          }
          this.verificationCodePart4 = '';
          break;

        case 5:
          if (this.verificationCodePart5 === '') {
            this.verificationCodePart4Element.nativeElement.focus();
          }
          this.verificationCodePart5 = '';
          break;

        case 1:
          break;
      }
    }
  }
}


