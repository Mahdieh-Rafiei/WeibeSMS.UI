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
import {CountryInterface} from '../../shared/models/country.interface';
import {SharedService} from '../../shared/service/shared.service';
import {DataCountryInterface} from '../../shared/models/data-country.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class LoginComponent implements OnInit {

  isLoginMode: boolean = true;
  verificationCodeSent: boolean = false;
  mobile: string = '';
  username: string = '';
  password: string = '';
  registrationKey: string;

  @ViewChild('verificationCodePart1Element') verificationCodePart1Element: ElementRef;
  @ViewChild('verificationCodePart2Element') verificationCodePart2Element: ElementRef;
  @ViewChild('verificationCodePart3Element') verificationCodePart3Element: ElementRef;
  @ViewChild('verificationCodePart4Element') verificationCodePart4Element: ElementRef;
  @ViewChild('verificationCodePart5Element') verificationCodePart5Element: ElementRef;

  verificationCodePart1: string = '';
  verificationCodePart2: string = '';
  verificationCodePart3: string = '';
  verificationCodePart4: string = '';
  verificationCodePart5: string = '';

  signUpForm: FormGroup;
  signInForm: FormGroup;

  enterPressConfirm: boolean = false;
  countries: DataCountryInterface[];
  constructor(private authService: AuthenticationService,
              private registerService: RegisterService,
              private notificationService: NotificationService,
              private configService: ConfigService,
              private fb: FormBuilder,
              private authSharedService: AuthSharedService,
              private shs: SharedService,
              private router: Router) {
  }

  ngOnInit() {
    this.createForm();
    this.getCountry();
  }


  getCountry() {
    this.shs.getCountry()
      .subscribe((res: CountryInterface) => this.countries = res.data);
  }

  createForm() {
    const pattern = /^(09|9)[0-9]{9}$/ig;
    this.signUpForm = this.fb.group({
      mobile: [null, Validators.compose([Validators.required, Validators.pattern(pattern)])],
      reason: [1],
      prefixNumberId: ['', Validators.required]
    });
    this.signInForm = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  login() {
    if (this.signInForm.valid) {
      const payload: LoginInterface = this.signInForm.value;
      this.authService.loginViaUsernamePassword(payload)
        .subscribe((res: LoginResponseInterface) => {
          this.router.navigateByUrl('index');
          this.authService.setToken(res.data.token);
          this.configService.authenticationChanged.emit(true);
        });
    }
  }

  keySendVerificationCode(event) {
    if (event.key === 'Enter') {
      console.log(event);
      this.sendVerificationCode();
    }
  }

  sendVerificationCode() {
    if (this.signUpForm.valid) {
      this.authSharedService.mobile = this.signUpForm.value.mobile;
      this.authSharedService.prefixNumberId = +this.signUpForm.value.prefixNumberId;
      const payload: SendVerificationCodeInterface = this.signUpForm.value;
      this.registerService.sendVerificationCode(payload)
        .subscribe((res: SendVerificationCodeResponseInterface) => {
            this.notificationService.success('Verification code sent successfully', '');
            localStorage.setItem('k-l', res.data.key);
            this.verificationCodeSent = true;
            setTimeout(() => {
              this.verificationCodePart1Element.nativeElement.focus();
            }, 500);
            this.registrationKey = res.data.key;
          },
          err => {
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
    this.registerService.verifyMobile(payload)
      .subscribe((res: any) => {
        // this.authService.setToken(res.data);
        this.authSharedService.keyLogin = res.data;
        this.router.navigateByUrl('/register');
      });
  }

  setFocus(elementNumber: number, value) {
    if (!value || value.length === 0) {
      return;
    }

    switch (elementNumber) {

      case 1:
        this.verificationCodePart2Element.nativeElement.focus();
        console.log(this.verificationCodePart1);
        break;

      case 2:
        this.verificationCodePart3Element.nativeElement.focus();
        console.log(this.verificationCodePart2);
        break;

      case 3:
        this.verificationCodePart4Element.nativeElement.focus();
        console.log(this.verificationCodePart3);
        break;

      case 4:
        this.verificationCodePart5Element.nativeElement.focus();
        console.log(this.verificationCodePart4);
        break;

      case 5:
        console.log(this.verificationCodePart5);
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
