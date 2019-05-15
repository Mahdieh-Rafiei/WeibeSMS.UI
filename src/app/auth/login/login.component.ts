import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {RegisterService} from '../register/register.service';
import {Router} from '@angular/router';
import {AuthenticationService} from './authentication.service';
import {NotificationService} from '../../shared/notification.service';
import _ from 'node_modules/lodash/lodash.js';
import {LoginResponseInterface} from './models/login-response.interface';
import {ConfigService} from '../../shared/config.service';
import {LoginInterface} from './models/login.interface';
import {SendVerificationCodeInterface} from './models/send-verification-code.interface';
import {SendVerificationCodeResponseInterface} from './models/send-verification-code-response.interface';
import {VerifyMobileInterface} from './models/verify-mobile.interface';
import {VerifyMobileResponseInterface} from './models/verify-mobile-response.interface';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
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


  constructor(private authService: AuthenticationService,
              private registerService: RegisterService,
              private notificationService: NotificationService,
              private configService: ConfigService,
              private fb: FormBuilder,
              private router: Router) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    const pattern = /^(09|9)[0-9]{9}$/ig;
    this.signUpForm = this.fb.group({
      mobile: [null, Validators.compose([Validators.required, Validators.pattern(pattern)])],
      sendVerificationReason: [1]
    });
  }

  login() {
    if (this.username.length === 0) {
      this.notificationService.error('username cant be null!', '');
      return;
    }
    if (this.password.length === 0) {
      this.notificationService.error('password cant be null!', '');
      return;
    }

    const data: LoginInterface = {username: this.username, password: this.password};
    this.authService.loginViaUsernamePassword(data)
      .subscribe((res: LoginResponseInterface) => {
        this.authService.setToken(res.data.token);
        this.configService.authenticationChanged.emit(true);
        this.router.navigateByUrl('');
      });
  }

  sendVerificationCode() {
    if (this.signUpForm.valid) {
      const payload: SendVerificationCodeInterface = this.signUpForm.value;
      this.registerService.sendVerificationCode(payload)
        .subscribe((res: SendVerificationCodeResponseInterface) => {
          this.notificationService.success('Verification code sent successfully', '');
          console.log(res.data);
          this.verificationCodeSent = true;
          this.registrationKey = res.data.registrationKey;
        });
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
      Key: this.registrationKey,
      Mobile: this.mobile.toString(),
      VerificationCode: verificationCode.toString()
    };
    this.registerService.verifyMobile(payload)
      .subscribe((res: any) => {
        this.authService.setToken(res.data.token);
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
        this.verify();
    }
  }
}
