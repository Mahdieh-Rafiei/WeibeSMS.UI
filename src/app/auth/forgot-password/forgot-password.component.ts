import {
    ChangeDetectionStrategy,
    Component,
    OnInit,
    ViewEncapsulation
} from '@angular/core';
import {ForgotPasswordService} from './forgot-password.service';
import {Router} from '@angular/router';
import {AuthenticationService} from '../login/authentication.service';
import {ConfigService} from '../../shared/config.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SendVerificationCodeInterface} from '../login/models/send-verification-code.interface';
import {ChangePasswordInterface} from './models/change-password.interface';
import {AuthSharedService} from '../auth-shared.service';
import {NotificationService} from '../../shared/notification.service';
import {InputedMobileModel} from '../../shared/component/country-flag-numbers/inputed-mobile-model';
import {SharedService} from '../../shared/service/shared.service';
import {errorAnimation} from "../../shared/component/animation/error-animation";

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: [
        errorAnimation()
    ],
})

export class ForgotPasswordComponent implements OnInit {

    step: number = 1;
    key: string;
    password: string;
    confirmPassword: string;
    isCorrectMobile = false;
    forgotPasswordForm: FormGroup;
    resetPassForm: FormGroup;
    notMatch: boolean = false;
    enterPressConfirm: boolean = false;
    verificationCode: string;

    constructor(private forgotPasswordService: ForgotPasswordService,
                private router: Router,
                private formBuilder: FormBuilder,
                private authSharedService: AuthSharedService,
                private sharedService: SharedService,
                private authService: AuthenticationService,
                public configService: ConfigService,
                private notificationService: NotificationService) {
    }

    ngOnInit() {
        this.createForm();
    }

    createForm() {
        this.forgotPasswordForm = this.formBuilder.group({
            mobile: [null, Validators.compose([Validators.required])],
            reason: [2],
            prefixNumberId: [1, Validators.required]
        });
        this.resetPassForm = this.formBuilder.group({
            password: [null, Validators.compose([Validators.required,
                Validators.pattern(/^(?=^.{8,}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)[0-9a-zA-Z!@#$%^&*()]*$/)])],
            confirmPassword: [null]
        });
    }

    setMobile(e: InputedMobileModel) {
        this.forgotPasswordForm.patchValue({'mobile': e.mobile});
        this.forgotPasswordForm.patchValue({'prefixNumberId': e.country.id});
        this.isCorrectMobile = e.isCorrectMobile;
    }

    sendVerificationCode() {

        if (this.forgotPasswordForm.valid && this.isCorrectMobile) {
            this.authSharedService.prefixNumberId = +this.forgotPasswordForm.value.countryId;
            const payload: SendVerificationCodeInterface = this.forgotPasswordForm.value;
            payload['mobile'] = this.forgotPasswordForm.controls['mobile'].value;
            payload['prefixNumberId'] = this.forgotPasswordForm.controls['prefixNumberId'].value;

            this.sharedService.spinnerStatusChanged.emit(true);

            this.forgotPasswordService.sendVerificationCode(payload)
                .subscribe(res => {
                        if (res.data.codeIsExists) {
                            this.notificationService.info('Use the last verification code', '');
                        }

                        this.sharedService.spinnerStatusChanged.emit(false);

                        this.step = 2;
                        setTimeout(() => {

                        }, 500);
                        this.key = res.data.key;
                        localStorage.setItem('k-f', res.data.key);

                    },
                    err => {
                        this.sharedService.spinnerStatusChanged.emit(false);

                        if (err.error.Message === '4') {
                            this.step = 2;
                            setTimeout(() => {
                            }, 500);
                        }
                    });
        } else {
            this.enterPressConfirm = true;
        }
    }

    keySendVerificationCode(event) {

        if (event.key === 'Enter') {
            this.sendVerificationCode();
        }
    }

    changePassword() {
        if (!this.resetPassForm.value.confirmPassword) {
            this.confirmPasswordOut();
        }
        if (this.resetPassForm.valid && !this.notMatch && this.resetPassForm.value.confirmPassword) {
            this.confirmPasswordOut();

            this.sharedService.spinnerStatusChanged.emit(true);

            const payload: ChangePasswordInterface = this.resetPassForm.value;
            delete payload['confirmPassword'];
            payload['key'] = this.key;
            payload['mobile'] = this.forgotPasswordForm.controls['mobile'].value;
            payload['prefixNumberId'] = this.forgotPasswordForm.value.prefixNumberId;
            payload['verificationCode'] = +this.verificationCode;
            this.forgotPasswordService.changePassword(payload)
                .subscribe(res => {
                    this.sharedService.spinnerStatusChanged.emit(false);
                    this.notificationService.success('Password changed successfully', '');
                    this.configService.authenticationChanged.emit(true);
                    localStorage.removeItem('k-f');
                    localStorage.removeItem('k-v-f');
                    this.router.navigate(['/']);
                    this.authService.setToken(res.data.token);
                    this.configService.authenticationChanged.emit(true);
                }, err => {
                    this.sharedService.spinnerStatusChanged.emit(false);
                });
        }
    }

    confirmPasswordOut() {
        if (this.resetPassForm.value.password !== this.resetPassForm.value.confirmPassword) {
            this.notMatch = true;
            return;
        } else {
            this.notMatch = false;
        }
    }

    onVerified(e: string) {
        this.step = 3;
        this.verificationCode = e;
    }
}

