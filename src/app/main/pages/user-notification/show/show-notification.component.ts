import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DataNotificationInterface} from '../list/models/data-notification.interface';

@Component({
  selector: 'app-dialog',
  templateUrl: './show-notification.component.html',
  styleUrls: ['./show-notification.component.scss']
})
export class ShowNotificationComponent implements OnInit {

  optionIndex: number;
  userNotification: DataNotificationInterface;

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
