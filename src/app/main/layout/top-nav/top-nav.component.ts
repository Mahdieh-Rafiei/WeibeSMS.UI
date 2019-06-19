import {Component, Injectable, OnInit} from '@angular/core';
import {ConfigService} from '../../../shared/config.service';
import {AuthenticationService} from '../../../auth/login/authentication.service';
import {UserNotificationService} from '../../pages/user-notification/user-notification.service';
import _ from 'node_modules/lodash/lodash.js';
import {NotificationResponseInterface} from '../../pages/user-notification/list/models/notification-response.interface';
import {GetUserNotificationInterface} from '../../pages/user-notification/list/models/get-user-notification.interface';
import {DataService} from '../../../shared/service/data.service';

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
  openHelp: boolean = false;

  constructor(public configService: ConfigService,
              private userNotificationService: UserNotificationService,
              private authService: AuthenticationService,
              private ds: DataService) {
  }

  ngOnInit() {

    this.userNotificationService.getAllUserNotifications(1, 10, true)
      .subscribe((res: NotificationResponseInterface) => {
        this.userNotifications = res.data.items;
      });
  }

  changeSidebarState() {
    this.ds.show = !this.ds.show;

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

  showHelp() {
    this.openHelp = !this.openHelp;
    this.ds.sendDataShowHelp(this.openHelp);
  }

  deleteAccount() {
    this.authService.deleteAccount()
      .subscribe(res => {
        this.logOut();
      });
  }
}
