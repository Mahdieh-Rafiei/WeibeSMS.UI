import {Component, OnInit} from '@angular/core';
import {UserEventService} from './user-event.service';
import _ from 'node_modules/lodash/lodash.js';
import {UtilityService} from '../../../shared/utility.service';
import {UserEventResponseInterface} from './models/user-event-response.interface';
import {AddUserEventInterface} from './models/add-user-event.interface';
import {EditUserEventInterface} from './models/edit-user-event.interface';
import {EditUserEventResponseInterface} from './models/edit-user-event-response.interface';
import {AddUserEventResponseInterface} from './models/add-user-event-response.interface';
import {RemoveUserEventResponseInterface} from './models/remove-user-event-response.interface';
import {RemoveUserEventInterface} from './models/remove-user-event.interface';

@Component({
  selector: 'app-user-event',
  templateUrl: './user-event.component.html',
  styleUrls: ['./user-event.component.css']
})
export class UserEventComponent implements OnInit {

  userEvents: any[];
  filteredUserEvents: any[] = [];
  name: string;
  mode: string = 'default';
  currentUserEvent: any;
  filterExpression = '';

  constructor(private userEventService: UserEventService,
              private utilityService: UtilityService) {
  }

  ngOnInit() {
    this.getUserEvents();
  }

  getUserEvents() {
    this.userEventService.getUserEvents()
      .subscribe((res: UserEventResponseInterface) => {
        console.log(res);
        this.userEvents = res.data;
        this.realTimeFilter();
      });
  }

  addUserEvent() {
    const payload: AddUserEventInterface = {
      Name: this.name
    };
    this.userEventService.addUserEvent(payload)
      .subscribe((res: AddUserEventResponseInterface) => {
        console.log(res);
        this.userEvents.push({
          Id: res.data,
          Name: this.name
        });
        this.mode = 'default';
        this.name = '';
        this.realTimeFilter();
      });
  }

  removeUserEvent(userEvent: any) {
    const payload: RemoveUserEventInterface = {
      DeleteAnyway: true
    };
    this.userEventService.removeUserEvent(userEvent.id, payload)
      .subscribe((res: RemoveUserEventResponseInterface) => {
        console.log(res);
        this.name = '';
        _.remove(this.userEvents, ue => ue.Id == userEvent.Id);
        this.realTimeFilter();
      });
  }

  modifyUserEvent() {
    const payload: EditUserEventInterface = {
      Name: this.name
    };
    this.userEventService.modifyUserEvent(this.currentUserEvent.id, payload)
      .subscribe((res: EditUserEventResponseInterface) => {
        console.log(res);
        this.currentUserEvent.name = this.name;
        this.mode = 'default';
      });
  }

  setModifyMode(userEvent) {
    this.mode = 'edit';
    this.currentUserEvent = userEvent;
    this.name = this.currentUserEvent.name;
    this.realTimeFilter();
  }

  realTimeFilter() {
    this.utilityService.filterByExpression(this.userEvents, this.filteredUserEvents, 'name', this.filterExpression);
  }
}
