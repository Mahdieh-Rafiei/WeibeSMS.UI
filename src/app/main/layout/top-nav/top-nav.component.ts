import {Component, Injectable, OnInit} from '@angular/core';
import {ConfigService} from '../../../shared/config.service';
import {AuthenticationService} from '../../../auth/login/authentication.service';
import {UserNotificationService} from '../../pages/user-notification/user-notification.service';
import _ from 'node_modules/lodash/lodash.js';
import {NotificationResponseInterface} from '../../pages/user-notification/models/notification-response.interface';
import {GetUserNotificationInterface} from '../../pages/user-notification/models/get-user-notification.interface';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})

@Injectable()
export class TopNavComponent implements OnInit {

  userNotifications: any[];
  showNotification: boolean = false;
  selectedNotification: any;

  constructor(public configService: ConfigService,
              private userNotificationService: UserNotificationService,
              private authService: AuthenticationService) {
  }

  ngOnInit() {

    this.userNotificationService.getAllUserNotifications(1, 10, true)
      .subscribe((res: NotificationResponseInterface) => {
        this.userNotifications = res.data.items;
      });
  }

  changeSidebarState() {

    if (window.innerWidth < 768) {
      this.configService.sidebarMode = this.configService.sidebarMode == 'default' ? 'hidden' : 'default';
    } else {
      this.configService.sidebarMode = this.configService.sidebarMode == 'default' ? 'slim' : 'default';
    }
  }

  logOut() {
    this.authService.logOut();
  }

  preparingShowNotification(notification) {
    this.selectedNotification = notification;
    this.showNotification = true;
    _.remove(this.userNotifications, un => un.id === notification.id);
    this.userNotificationService.getUserNotification(notification.id)
      .subscribe((res: GetUserNotificationInterface) => {
        console.log(res.data);
      });
  }

  deleteAccount() {
    this.authService.deleteAccount()
      .subscribe(res => {
        this.logOut();
      });
  }
}
