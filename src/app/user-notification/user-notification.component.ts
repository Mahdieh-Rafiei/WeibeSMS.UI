import { Component, OnInit } from '@angular/core';
import {UserNotificationService} from './user-notification.service';
import _ from 'node_modules/lodash/lodash.js';

@Component({
  selector: 'app-user-notification',
  templateUrl: './user-notification.component.html',
  styleUrls: ['./user-notification.component.css']
})
export class UserNotificationComponent implements OnInit {

  userNotifications:any[];
  pageNumber:number=1;
  pageSize:number=10;
  showNotification:boolean=false;
  selectedUserNotification:any;

  constructor(private userNotificationService:UserNotificationService) { }

  ngOnInit() {
    this.userNotificationService.getAllUserNotifications(this.pageNumber,this.pageSize,false)
      .subscribe(res=>{
        console.log(res.data);
        this.userNotifications=res.data.items;
      });
  }

  preparingShowNotification(userNotification){
    this.selectedUserNotification=userNotification;
    this.showNotification=true;
    this.userNotificationService.getUserNotification(userNotification.id)
      .subscribe(res=>{
        console.log(res.data);
        userNotification.isRead = true;
      });
  }
}
