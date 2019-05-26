import {Component, OnInit} from '@angular/core';
import {UserAccountService} from '../../user-account.service';
import {NotificationService} from '../../../../../shared/notification.service';
import {UtilityService} from '../../../../../shared/utility.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ChangePasswordInterface} from './models/change-password.interface';
import {ChangePasswordResponseInterface} from './models/change-password-response.interface';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  changePassForm: FormGroup;
  notMatch: boolean = false;

  constructor(private userService: UserAccountService,
              private notificationService: NotificationService,
              private utilityService: UtilityService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.changePassForm = this.fb.group({
      oldPassword: [null, Validators.required],
      newPassword: [null, Validators.compose([Validators.required,
        Validators.pattern(/^(?=^.{8,}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)[0-9a-zA-Z!@#$%^&*()]*$/)])],
      confirmPassword: [null]
    });
  }

  submit() {
    if (!this.changePassForm.value.confirmPassword) {
      this.confirmPasswordOut();
    }
    if (this.changePassForm.valid && !this.notMatch && this.changePassForm.value.confirmPassword) {
      this.confirmPasswordOut();
      const payload: ChangePasswordInterface = this.changePassForm.value;
      delete payload['confirmPassword'];
      this.userService.changePassword(payload)
        .subscribe((res: ChangePasswordResponseInterface) => {
          this.notificationService.success('Password changed successfully!', '');
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
