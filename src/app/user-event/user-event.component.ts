import { Component, OnInit } from '@angular/core';
import {UserEventService} from './user-event.service';

@Component({
  selector: 'app-user-event',
  templateUrl: './user-event.component.html',
  styleUrls: ['./user-event.component.css']
})
export class UserEventComponent implements OnInit {

  userEvents:any[];
  name:string;

  constructor(private userEventService:UserEventService) { }

  ngOnInit() {
    this.userEventService.getUserEvents()
      .subscribe(res =>{
        console.log(res);
        this.userEvents = res.Data;
      });
  }

  addUserEvent(){
    this.userEventService.addUserEvent(this.name)
      .subscribe(res=>{
        console.log(res);
        this.userEvents.push({
          Id:res.Data,
          Name:this.name
        });
      });
  }

  removeUserEvent(userEvent:any){
    this.userEventService.removeUserEvent(userEvent.Id)
      .subscribe(res=>{
        console.log(res);
        this.userEvents = this.userEvents.filter(ue => ue.Id != userEvent.Id);
      });
  }
}
