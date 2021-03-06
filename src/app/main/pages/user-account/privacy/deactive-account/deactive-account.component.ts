import {Component, OnInit} from '@angular/core';
import {TitleValueInterface} from './models/title-value.interface';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NotificationService} from '../../../../../shared/notification.service';
import {MatDialog} from '@angular/material';
import {DeleteAccountComponent} from './delete-acount/delete-account.component';
import {AuthenticationService} from '../../../../../auth/login/authentication.service';
import {errorAnimation} from '../../../../../shared/component/animation/error-animation';
import {PrivacyService} from '../privacy.service';

@Component({
  selector: 'app-deactive-account',
  templateUrl: './deactive-account.component.html',
  styleUrls: ['./deactive-account.component.scss'],
  animations: [
    errorAnimation()
  ]
})
export class DeactiveAccountComponent implements OnInit {
  deActiveForm: FormGroup;
  needDescription = false;
  reasons: TitleValueInterface[] = [
    {title: 'I have a privacy concern', value: 1},
    {title: 'I\'m not getting any value from my membership', value: 2},
    {title: 'I\'m getting too many sms', value: 3},
    {title: 'I\'m moving to a new panel', value: 4},
    {title: 'I\'m not using the system', value: 5},
    {title: 'I\'m not not happy with the amount', value: 6},
    {title: 'I can\'t use panel easily', value: 7},
    {title: 'Other', value: 8},

  ];

  constructor(private formBuilder: FormBuilder,
              private notificationService: NotificationService,
              private dialog: MatDialog,
              private authService: AuthenticationService,
              private privacyService: PrivacyService) {
  }

  ngOnInit() {
    this.privacyService.mode = 'deactivate';
    this.createForm();
    this.deActiveForm.controls['reason'].patchValue(1);
  }

  createForm() {
    this.deActiveForm = this.formBuilder.group({
      reason: [''],
      description: [''],
    });
  }

  submit() {
    if (this.deActiveForm.valid) {
      this.openDialog('400px', 'auto', '', {data: this.deActiveForm.value});
    }
  }

  openDialog(width, height, panelClass, data): void {
    const dialogRef = this.dialog.open(DeleteAccountComponent, {
      width,
      height,
      panelClass,
      data
    });

    dialogRef.afterClosed()
      .subscribe(result => {
        if (result && result.deleteAccount) {
          this.authService.logOut();
          this.notificationService.success('User deactivated successfully. Deactivation allowed just per 24 hours!', '');
        }
      });
  }

  onReasonChange(e) {
    this.needDescription = e.target.value == 8;
  }
}
