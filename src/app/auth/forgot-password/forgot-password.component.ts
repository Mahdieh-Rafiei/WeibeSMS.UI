import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ForgotPasswordService} from './forgot-password.service';
import {Router} from '@angular/router';
import {AuthenticationService} from '../login/authentication.service';
import {ConfigService} from '../../shared/config.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SendVerificationCodeInterface} from '../login/models/send-verification-code.interface';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})

export class ForgotPasswordComponent implements OnInit {

  step: number = 1;
  mobile: string;
  verificationCodePart1: string = '';
  verificationCodePart2: string = '';
  verificationCodePart3: string = '';
  verificationCodePart4: string = '';
  verificationCodePart5: string = '';
  key: string;
  password: string;
  confirmPassword: string;

  forgotPasswordForm: FormGroup;

  enterPressConfirm: boolean = false;

  @ViewChild('verificationCodePart1Element') verificationCodePart1Element: ElementRef;
  @ViewChild('verificationCodePart2Element') verificationCodePart2Element: ElementRef;
  @ViewChild('verificationCodePart3Element') verificationCodePart3Element: ElementRef;
  @ViewChild('verificationCodePart4Element') verificationCodePart4Element: ElementRef;

  @ViewChild('verificationCodePart5Element') verificationCodePart5Element: ElementRef;

  constructor(private forgotPasswordService: ForgotPasswordService,
              private router: Router,
              private fb: FormBuilder,
              private authService: AuthenticationService,
              private configService: ConfigService) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    const pattern = /^(09|9)[0-9]{9}$/ig;
    this.forgotPasswordForm = this.fb.group({
      Mobile: [null, Validators.compose([Validators.required, Validators.pattern(pattern)])],
      SendVerificationReason: [2]
    });
  }

  test() {
    console.log(this.forgotPasswordForm.controls['Mobile']);

  }

  sendVerificationCode() {
    if (this.forgotPasswordForm.valid) {
      const payload: SendVerificationCodeInterface = this.forgotPasswordForm.value;
      this.forgotPasswordService.sendVerificationCode(payload)
        .subscribe(res => {
          console.log(res);
          this.step = 2;
          this.key = res.data.registrationKey;
        });
    } else {
      this.enterPressConfirm = true;
    }
  }

  keySendVerificationCode(event) {
    if (event.key === 'Enter') {
      console.log(event);
      this.sendVerificationCode();
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

  getCountDown(event) {
    if (event) {
      this.sendVerificationCode();
      this.verificationCodePart1 = '';
      this.verificationCodePart2 = '';
      this.verificationCodePart3 = '';
      this.verificationCodePart4 = '';
      this.verificationCodePart5 = '';
    }
  }

  verify() {
    const verificationCode = this.verificationCodePart1.concat(this.verificationCodePart2, this.verificationCodePart3,
      this.verificationCodePart4, this.verificationCodePart5);

    this.forgotPasswordService.verify(this.mobile, verificationCode, this.key)
      .subscribe(res => {
        console.log(res);
        this.step = 3;
        this.authService.setToken(res.data.token);
      });
  }

  changePassword() {
    this.forgotPasswordService.changePassword(this.password)
      .subscribe(res => {
        console.log(res);
        this.configService.authenticationChanged.emit(true);
        this.router.navigateByUrl('');
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
}
