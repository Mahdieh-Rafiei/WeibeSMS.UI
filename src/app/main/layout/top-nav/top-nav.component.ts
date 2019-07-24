import {Component, Injectable, OnInit} from '@angular/core';
import {ConfigService} from '../../../shared/config.service';
import {AuthenticationService} from '../../../auth/login/authentication.service';
import {UserNotificationService} from '../../pages/user-notification/user-notification.service';
import {NotificationResponseInterface} from '../../pages/user-notification/list/models/notification-response.interface';
import {DataService} from '../../../shared/service/data.service';
import {SharedService} from '../../../shared/service/shared.service';
import {DataGetUserNotificationInterface} from '../../pages/user-notification/list/models/data-get-user-notification.interface';
import {MatDialog} from '@angular/material';
import {QuickShowNotificationComponent} from './quick-show-notification/quick-show-notification.component';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})

@Injectable()
export class TopNavComponent implements OnInit {

  userNotifications: DataGetUserNotificationInterface[];
  openHelp: boolean = false;

  constructor(public configService: ConfigService,
              private userNotificationService: UserNotificationService,
              private authService: AuthenticationService,
              private dataService: DataService,
              public sharedService: SharedService,
              private dialog: MatDialog) {
  }

  ngOnInit() {

    this.userNotificationService.getAllUserNotifications(1, 3, 0,
      2147483647, false, '')
      .subscribe((res: NotificationResponseInterface) => {
        console.log(res.data);
        this.userNotifications = res.data.items;
      });
  }

  changeSidebarState() {
    this.dataService.show = !this.dataService.show;

    if (window.innerWidth < 768) {
      this.sharedService.sidebarMode = this.sharedService.sidebarMode == 'default' ? 'hidden' : 'default';
    } else {
      this.sharedService.sidebarMode = this.sharedService.sidebarMode == 'default' ? 'slim' : 'default';
    }
  }

  logOut() {
    this.authService.logOut();
  }

  showNotification(data: DataGetUserNotificationInterface, index) {
    this.openDialog('480px', 'auto', '', {data, index});
  }

  openDialog(width, height, panelClass, data): void {
    const dialogRef = this.dialog.open(QuickShowNotificationComponent, {
      width,
      height,
      panelClass,
      data
    });

    dialogRef.afterClosed()
      .subscribe(result => {
        if (result) {
          this.userNotifications.splice(result.index, 1);
        }
      });
  }

  showHelp() {
    this.openHelp = !this.openHelp;
    this.dataService.sendDataShowHelp(this.openHelp);
  }

  deleteAccount() {
    this.authService.deleteAccount()
      .subscribe(res => {
        this.logOut();
      });
  }
}
