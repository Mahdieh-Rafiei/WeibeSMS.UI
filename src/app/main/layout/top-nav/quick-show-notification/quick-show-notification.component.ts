import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {GroupService} from '../../../pages/group/group.service';
import {FormBuilder} from '@angular/forms';
import {DataGetUserNotificationInterface} from '../../../pages/user-notification/list/models/data-get-user-notification.interface';
import {GetUserNotificationInterface} from '../../../pages/user-notification/list/models/get-user-notification.interface';
import {UserNotificationService} from '../../../pages/user-notification/user-notification.service';

@Component({
  selector: 'app-quick-show-notification',
  templateUrl: './quick-show-notification.component.html',
  styleUrls: ['./quick-show-notification.component.css']
})

export class QuickShowNotificationComponent implements OnInit {

  notification: DataGetUserNotificationInterface;
  index: number;
  isSuccess = false;

  constructor(public dialogRef: MatDialogRef<QuickShowNotificationComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private gs: GroupService,
              private fb: FormBuilder,
              private userNotificationService: UserNotificationService) {
    dialogRef.disableClose = true;
    this.notification = data.data;
    this.index = data.index;
  }

  ngOnInit() {
    this.userNotificationService.getUserNotification(this.notification.id)
      .subscribe((res: GetUserNotificationInterface) => {
        this.isSuccess = true;
      });
  }

  closeDialog() {
    this.dialogRef.close(this.isSuccess ? {index: this.index} : null);
  }
}
