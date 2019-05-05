import { Component, OnInit } from '@angular/core';
import {UserEventService} from './user-event.service';
import _ from 'node_modules/lodash/lodash.js';
import {UtilityService} from '../shared/utility.service';

@Component({
  selector: 'app-user-event',
  templateUrl: './user-event.component.html',
  styleUrls: ['./user-event.component.css']
})
export class UserEventComponent implements OnInit {

  userEvents:any[];
  filteredUserEvents:any[]=[];
  name:string;
  mode:string='default';
  currentUserEvent:any;
  filterExpression='';

  constructor(private userEventService:UserEventService,
              private utilityService:UtilityService) { }

  ngOnInit() {
    this.userEventService.getUserEvents()
      .subscribe(res =>{
        console.log(res);
        this.userEvents = res.data;
        this.realTimeFilter();
      });
  }

  addUserEvent(){
    this.userEventService.addUserEvent(this.name)
      .subscribe(res=>{
        console.log(res);
        this.userEvents.push({
          Id:res.data,
          Name:this.name
        });
        this.mode = 'default';
        this.name = '';
        this.realTimeFilter();
      });
  }

  removeUserEvent(userEvent:any){
    this.userEventService.removeUserEvent(userEvent.Id)
      .subscribe(res=>{
        console.log(res);
        this.name = '';
        _.remove(this.userEvents,ue=>ue.Id == userEvent.Id);
        this.realTimeFilter();
      });
  }

  modifyUserEvent(){
    this.userEventService.modifyUserEvent(this.currentUserEvent.Id,this.name)
      .subscribe(res => {
        console.log(res);
        this.currentUserEvent.name = this.name;
        this.mode='default';
      });
  }

  setModifyMode(userEvent){
    this.mode='edit';
    this.currentUserEvent = userEvent;
    this.name = this.currentUserEvent.name;
    this.realTimeFilter();
  }

  realTimeFilter(){
     this.utilityService.filterByExpression(this.userEvents,this.filteredUserEvents,'name',this.filterExpression);
  }
}
