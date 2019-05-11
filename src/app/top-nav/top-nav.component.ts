import {Component, Injectable, OnInit} from '@angular/core';
import {ConfigService} from '../shared/config.service';
import {AuthenticationService} from '../login/authentication.service';
import {UserNotificationService} from '../user-notification/user-notification.service';
import _ from 'node_modules/lodash/lodash.js';
import {NotificationResponseInterface} from '../user-notification/models/notification-response.interface';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})

@Injectable()
export class TopNavComponent implements OnInit {

  userNotifications:any[];
  showNotification:boolean=false;
  selectedNotification:any;

  constructor(public configService:ConfigService,
              private userNotificationService:UserNotificationService,
              private authService:AuthenticationService) { }

  ngOnInit() {

    this.userNotificationService.getAllUserNotifications(1, 10, true)
      .subscribe((res: NotificationResponseInterface) => {
        this.userNotifications = res.data.items;
      });
  }

  changeSidebarState() {

    if (window.innerWidth < 768) {
      this.configService.sidebarMode = this.configService.sidebarMode == 'default' ? 'hidden' : 'default';
    }else {
      this.configService.sidebarMode = this.configService.sidebarMode == 'default' ? 'slim' : 'default';
    }
  }

  logOut() {
    this.authService.logOut();
  }

  preparingShowNotification(notification) {
    this.selectedNotification = notification;
    this.showNotification = true;
    _.remove(this.userNotifications, un => un.id == notification.id);
    this.userNotificationService.getUserNotification(notification.id)
      .subscribe(res => {
        console.log(res.data);
      });
  }
}
