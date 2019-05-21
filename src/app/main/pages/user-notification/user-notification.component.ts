import {Component, OnInit} from '@angular/core';
import {UserNotificationService} from './user-notification.service';
import _ from 'node_modules/lodash/lodash.js';
import {NotificationResponseInterface} from './models/notification-response.interface';
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

  constructor(private userNotificationService: UserNotificationService) {
  }

  ngOnInit() {
    this.getAllUserNotifications(this.pageNumber, this.pageSize, false);
  }

  getAllUserNotifications(pageNumber, pageSize, onlyUnread) {
    this.userNotificationService.getAllUserNotifications(pageNumber, pageSize, onlyUnread)
      .subscribe((res: NotificationResponseInterface) => {
        this.userNotifications = res.data.items;
      });
  }

  preparingShowNotification(userNotification) {
    this.selectedUserNotification = userNotification;
    this.showNotification = true;
    this.userNotificationService.getUserNotification(userNotification.id)
      .subscribe((res: GetUserNotificationInterface) => {
        console.log(res.data);
        userNotification.isRead = true;
      });
  }
}
