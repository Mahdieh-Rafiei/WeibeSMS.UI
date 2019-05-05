import {Component, Input, OnInit} from '@angular/core';
import {ContactService} from '../../contact/contact.service';
import {UserEventService} from '../../../user-event/user-event.service';
import {NotificationService} from '../../../shared/notification.service';
import {ActivatedRoute, Router} from '@angular/router';
import {GroupService} from '../../group.service';

@Component({
  selector: 'app-single-add-contact',
  templateUrl: './single-add-contact.component.html',
  styleUrls: ['./single-add-contact.component.css']
})
export class SingleAddContactComponent implements OnInit {

  groupId:number;
  userEvents:any[]=[];
  mobile:string='';
  firstName:string='';
  lastName:string='';
  gender:number=3;
  email:string='';

  constructor(private contactService:ContactService,
              private userEventService:UserEventService,
              private notificationService:NotificationService,
              private activatedRoute:ActivatedRoute,
              private groupService:GroupService,
              private router:Router
              ) { }

  ngOnInit() {
    this.groupId = this.groupService.selectedGroupId;
    this.userEventService.getUserEvents()
      .subscribe(res=>{
        console.log(res.data);
        this.userEvents = res.data;
      })
  }

  addContact(){
    if (this.mobile.length == 0)
    {
      this.notificationService.error(`Phone number cant be null!`,``);
      return;
    }

    this.contactService.addContact(this.groupId,this.firstName,this.lastName,this.mobile,this.gender,this.email)
      .subscribe(res=>{
        this.notificationService.success('Contact added successfully','');
        this.router.navigateByUrl(`group/${this.groupId}`);
      });
  }
}
