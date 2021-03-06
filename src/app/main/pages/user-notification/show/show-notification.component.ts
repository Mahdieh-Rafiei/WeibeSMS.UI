import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DataGetUserNotificationInterface} from '../list/models/data-get-user-notification.interface';

@Component({
  selector: 'app-dialog',
  templateUrl: './show-notification.component.html',
  styleUrls: ['./show-notification.component.scss']
})
export class ShowNotificationComponent implements OnInit {

  optionIndex: number;
  userNotification: DataGetUserNotificationInterface;

  constructor(public dialogRef: MatDialogRef<ShowNotificationComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    dialogRef.disableClose = true;
    this.optionIndex = data.index;
    this.userNotification = data.userNotification;

  }

  ngOnInit() {
  }

  onSubmit() {
    this.dialogRef.close({showNotify: {userNotification: this.userNotification}});
  }

}
