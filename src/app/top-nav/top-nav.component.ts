import {Component, Injectable, OnInit} from '@angular/core';
import {ConfigService} from '../shared/config.service';
import {AuthenticationService} from '../login/authentication.service';
import {UserNotificationService} from '../user-notification/user-notification.service';
import _ from 'node_modules/lodash/lodash.js';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})

@Injectable()
export class TopNavComponent implements OnInit {

  sidebarMode:string='';
  userNotifications:any[];
  showNotification:boolean=false;
  selectedNotification:any;

  constructor(private configService:ConfigService,
              private userNotificationService:UserNotificationService,
              private authService:AuthenticationService) { }

  ngOnInit() {

    if (window.innerWidth < 768 ){
      this.sidebarMode = 'hidden';
    } else if (window.innerWidth >= 768 && window.innerWidth < 991){
      this.sidebarMode = 'slim';
    }else {
      this.sidebarMode = 'default';
    }

    this.userNotificationService.getAllUserNotifications(1,10,true)
      .subscribe(res=>{
        console.log(res.data);
        this.userNotifications = res.data.items
      });
    // this.configService.sidebarStateChanged.emit(this.sidebarMode);
  }

  changeSidebarState(){

    if (window.innerWidth < 768) {
      this.sidebarMode = this.sidebarMode == 'default' ? 'hidden' : 'default';
    }else {
      this.sidebarMode = this.sidebarMode == 'default' ? 'slim' : 'default';
    }

    this.configService.sidebarStateChanged.emit(this.sidebarMode);
  }

  logOut(){
    this.authService.logOut();
  }

  preparingShowNotification(notification){
    this.selectedNotification=notification;
    this.showNotification=true;
    _.remove(this.userNotifications,un=>un.id == notification.id);
    this.userNotificationService.getUserNotification(notification.id)
      .subscribe(res=>{
        console.log(res.data);
      });
  }
}
