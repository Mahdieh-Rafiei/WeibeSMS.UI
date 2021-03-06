import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserAccountService} from '../../user-account.service';
import {SharedService} from '../../../../../shared/service/shared.service';
import {ChangeEmailInterface} from './models/change-email.interface';
import {NotificationService} from '../../../../../shared/notification.service';
import {errorAnimation} from '../../../../../shared/component/animation/error-animation';
import {UserInfoInterface} from '../../../../../auth/login/models/user-info.interface';

@Component({
  selector: 'app-change-email',
  templateUrl: './change-email.component.html',
  styleUrls: ['./change-email.component.scss'],
  animations: [
    errorAnimation()
  ],
})
export class ChangeEmailComponent implements OnInit {
  changeEmailForm: FormGroup;
  emailUnique: boolean = false;
  disableButton: boolean = false;
  currentUserInfo: UserInfoInterface;

  constructor(private formBuilder: FormBuilder,
              private sharedService: SharedService,
              private notificationService: NotificationService,
              private userAccountService: UserAccountService) {
  }

  ngOnInit() {
    this.createForm();
    this.currentUserInfo = this.sharedService.getCurrentUserInfo();
    this.changeEmailForm.patchValue({email: this.currentUserInfo.email});

    if (this.currentUserInfo.emailConfirmed) {
      this.changeEmailForm.controls['email'].disable();
    }
  }

  createForm() {
    this.changeEmailForm = this.formBuilder.group({
      email: [null, Validators.compose([Validators.required, Validators.email])]
    });
  }

  submit() {
    if (this.changeEmailForm.valid && !this.emailUnique) {
      const payload: ChangeEmailInterface = this.changeEmailForm.value;
      this.userAccountService.verifyEmail(payload)
        .subscribe(res => {
          this.disableButton = true;
          this.notificationService.success('send Email successfully', '');
        });
    }
  }

  checkUnique(key: number, value: string) {
    if (value.length > 0) {
      const payload = {key, value};
      this.sharedService.checkUnique(payload)
        .subscribe((res: any) => {
          if (!res.data) {
            this.emailUnique = false;
          } else {
            this.emailUnique = true;
          }
        });
    }
  }
}
