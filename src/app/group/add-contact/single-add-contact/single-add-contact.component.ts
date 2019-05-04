import { Component, OnInit } from '@angular/core';
import {ContactService} from '../../contact/contact.service';
import {UserEventService} from '../../../user-event/user-event.service';
import {NotificationService} from '../../../shared/notification.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-single-add-contact',
  templateUrl: './single-add-contact.component.html',
  styleUrls: ['./single-add-contact.component.css']
})
export class SingleAddContactComponent implements OnInit {

  groupId:string;
  userEvents:any[]=[];
  mobile:string='';
  firstName:string='';
  lastName:string='';
  gender:number=3;
  email:string='';

  constructor(private contactService:ContactService,
              private userEventService:UserEventService,
              private notificationService:NotificationService,
              private activatedRoute:ActivatedRoute
              ) { }

  ngOnInit() {
    this.groupId = this.activatedRoute.snapshot.paramMap.get('groupId');
    this.userEventService.getUserEvents()
      .subscribe(res=>{
        console.log(res.Data);
        this.userEvents = res.Data;
      })
  }

  addContact(){
    if (this.mobile.length == 0)
    {
      this.notificationService.error(`Phone number cant be null!`,``);
      return;
    }

    this.contactService.addContact(parseInt(this.groupId),this.firstName,this.lastName,this.mobile,this.gender,this.email)
      .subscribe(res=>{
        console.log(res);
      });
  }
}
