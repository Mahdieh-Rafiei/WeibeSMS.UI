import {Component, OnInit} from '@angular/core';
import {UserNotificationService} from '../user-notification.service';
import {NotificationResponseInterface} from './models/notification-response.interface';
import {MatDialog} from '@angular/material';
import {ShowNotificationComponent} from '../show/show-notification.component';
import {GetUserNotificationInterface} from './models/get-user-notification.interface';

@Component({
  selector: 'app-user-notification',
  templateUrl: './user-notification.component.html',
  styleUrls: ['./user-notification.component.scss']
})
export class UserNotificationComponent implements OnInit {

  userNotifications: any[];
  pageNumber: number = 1;
  pageSize: number = 10;
  showNotification: boolean = false;
  selectedUserNotification: any;
  totalItemsCount: number;

  constructor(private userNotificationService: UserNotificationService,
              private dialog: MatDialog) {
  }

  ngOnInit() {
    this.getAllUserNotifications(this.pageNumber, this.pageSize, false);
  }

  getAllUserNotifications(pageNumber, pageSize, onlyUnread) {
    this.userNotificationService.getAllUserNotifications(pageNumber, pageSize, onlyUnread)
      .subscribe((res: NotificationResponseInterface) => {
        this.userNotifications = res.data.items;
        this.totalItemsCount = res.data.totalItemsCount;
      });
  }

  preparingShowNotification(userNotification) {
    this.openDialog('600px', 'auto', '', {userNotification});
  }

  openDialog(width, height, panelClass, data): void {
    const dialogRef = this.dialog.open(ShowNotificationComponent, {
      width,
      height,
      panelClass,
      data
    });

    dialogRef.afterClosed()
      .subscribe(result => {
        if (result && result.showNotify) {
          const userNotification = result.showNotify.userNotification;
          this.userNotificationService.getUserNotification(userNotification.id)
            .subscribe((res: GetUserNotificationInterface) => {
              console.log(res.data);
              userNotification.isRead = true;
            });
        }
      });
  }

  doPaging(e) {
    this.pageNumber = e;
    this.getAllUserNotifications(this.pageNumber, this.pageSize, false);
  }

}
