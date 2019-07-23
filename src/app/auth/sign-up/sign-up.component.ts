import {AfterViewChecked, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ConfigService} from '../../shared/config.service';
import {InputedMobileModel} from '../../shared/component/country-flag-numbers/inputed-mobile-model';
import {SendVerificationCodeInterface} from '../login/models/send-verification-code.interface';
import {SendVerificationCodeResponseInterface} from '../login/models/send-verification-code-response.interface';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthSharedService} from '../auth-shared.service';
import {NotificationService} from '../../shared/notification.service';
import {RegisterService} from '../register/register.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit, AfterViewChecked {

  signUpForm: FormGroup;
  registrationKey: string;
  isCorrectMobile = false;
  enterPressConfirm = false;
  verificationCodeSent = false;

  constructor(private configService: ConfigService,
              private authSharedService: AuthSharedService,
              private notificationService: NotificationService,
              private registerService: RegisterService,
              private formBuilder: FormBuilder,
              private router: Router,
              private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.creatForm();
    this.registrationKey = localStorage.getItem('k-l');
  }

  ngAfterViewChecked() {
    this.changeDetectorRef.detectChanges();
  }

  setMobile(e: InputedMobileModel) {
    this.isCorrectMobile = e.isCorrectMobile;
    this.signUpForm.patchValue({'mobile': e.mobile});
    this.signUpForm.patchValue({'prefixNumberId': e.country.id});
  }

  keySendVerificationCode(event) {
    if (event.key === 'Enter') {
      this.sendVerificationCode();
    }
  }

  sendVerificationCode() {

    if (this.signUpForm.valid && this.isCorrectMobile) {
      // this.configService.spinnerStatusChanged.emit(true);
      this.authSharedService.mobile = this.signUpForm.value.mobile;
      this.authSharedService.prefixNumberId = +this.signUpForm.value.prefixNumberId;
      const payload: SendVerificationCodeInterface = this.signUpForm.value;

      this.registerService.sendVerificationCode(payload)
        .subscribe((res: SendVerificationCodeResponseInterface) => {

            // this.configService.spinnerStatusChanged.emit(false);
            if (res.data.codeIsExists) {
              this.notificationService.success('Please use the last code', '');
            } else {
              this.notificationService.success('Verification code sent successfully', '');
            }

            localStorage.setItem('k-l', res.data.key);

            this.verificationCodeSent = true;
            setTimeout(() => {

            }, 500);
            this.registrationKey = res.data.key;
          },
          err => {

            // this.configService.spinnerStatusChanged.emit(false);

            if (err.error.Message === '4') {
              console.log(err);
              this.verificationCodeSent = true;
              setTimeout(() => {

              }, 500);
            }
          });
    } else {
      this.enterPressConfirm = true;
    }
  }

  rollbackToLoginMode() {
    this.router.navigateByUrl('/auth/login');
  }

  creatForm() {
    this.signUpForm = this.formBuilder.group({
      mobile: [null, Validators.compose([Validators.required
      ])],
      reason: [1],
      prefixNumberId: [1, Validators.required]
    });
  }

  rollbackToFirstStep() {
    this.verificationCodeSent = false;
    this.registrationKey = '';
  }
}
