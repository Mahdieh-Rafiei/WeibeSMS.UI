import {Component, OnInit} from '@angular/core';
import {UserAccountService} from '../../user-account.service';
import {NotificationService} from '../../../../../shared/notification.service';
import {UtilityService} from '../../../../../shared/utility.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ChangePasswordInterface} from './models/change-password.interface';
import {ChangePasswordResponseInterface} from './models/change-password-response.interface';
import {errorAnimation} from '../../../../../shared/component/animation/error-animation';
import {Router} from '@angular/router';
import {PrivacyService} from '../privacy.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
  animations: [
    errorAnimation()
  ]

})
export class ChangePasswordComponent implements OnInit {
  changePassForm: FormGroup;
  notMatch = false;

  constructor(private userService: UserAccountService,
              private notificationService: NotificationService,
              private utilityService: UtilityService,
              private formBuilder: FormBuilder,
              private router: Router,
              private privacyService: PrivacyService) {
  }

  ngOnInit() {
    this.privacyService.mode = 'changePassword';
    this.createForm();
  }

  createForm() {
    this.changePassForm = this.formBuilder.group({
      oldPassword: ['', Validators.required],
      newPassword: [null, Validators.compose([Validators.required,
        Validators.pattern(this.utilityService.passwordRegex())])],
      confirmPassword: ['', Validators.required]
    });
  }

  submit() {
    if (!this.changePassForm.value.confirmPassword) {
      this.confirmPasswordOut();
    }
    if (this.changePassForm.valid && !this.notMatch && this.changePassForm.value.confirmPassword) {
      this.confirmPasswordOut();
      const payload: ChangePasswordInterface = this.changePassForm.value;
      this.userService.changePassword(payload)
        .subscribe((res: ChangePasswordResponseInterface) => {
          this.notificationService.success('Password changed successfully!', '');
          this.router.navigateByUrl(``);
        });
    }
  }

  confirmPasswordOut() {
    if (this.changePassForm.value.newPassword !== this.changePassForm.value.confirmPassword) {
      this.notMatch = true;
      return;
    } else {
      this.notMatch = false;
    }
  }
}
