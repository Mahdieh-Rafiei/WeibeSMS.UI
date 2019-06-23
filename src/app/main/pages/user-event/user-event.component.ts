import {Component, OnInit} from '@angular/core';
import {UserEventService} from './user-event.service';
import {RemoveUserEventResponseInterface} from './models/remove-user-event-response.interface';
import {RemoveUserEventInterface} from './models/remove-user-event.interface';
import {MatDialog} from '@angular/material';
import {NotificationService} from '../../../shared/notification.service';
import {AddEditUserEventComponent} from './add-edit/add-edit-user-event.component';
import {GetUserEventsModelInterface} from './models/get-user-events-model.interface';
import {UserEventInterface} from './models/user-event.interface';
import {UserEventResponseInterface} from './models/user-event-response.interface';

@Component({
  selector: 'app-user-event',
  templateUrl: './user-event.component.html',
  styleUrls: ['./user-event.component.scss']
})
export class UserEventComponent implements OnInit {
  userEvents: UserEventInterface[];
  totalItems = 0;
  getModel: GetUserEventsModelInterface = {
    pageNumber: 1,
    pageSize: 10,
    phrase: ''
  };

  constructor(private userEventService: UserEventService,
              private dialog: MatDialog,
              private ns: NotificationService) {
  }

  ngOnInit() {
    this.getUserEvents();
  }

  getUserEvents() {
    this.userEventService.getUserEvents(this.getModel.pageNumber,
      this.getModel.pageSize, this.getModel.phrase)
      .subscribe((res: UserEventResponseInterface) => {
        this.userEvents = res.data.items;
        this.totalItems = res.data.totalItemsCount;
      });
  }

  removeUserEvent(index: number, id: number) {
    const payload: RemoveUserEventInterface = {
      DeleteAnyway: true
    };
    this.userEventService.removeUserEvent(id, payload)
      .subscribe((res: RemoveUserEventResponseInterface) => {
        this.userEvents.splice(index, 1);
      });
  }


  addEditUserEvent(data: UserEventInterface, index: number) {
    this.openDialog('480px', 'auto', '', {data, index});
  }


  openDialog(width, height, panelClass, data): void {
    const dialogRef = this.dialog.open(AddEditUserEventComponent, {
      width,
      height,
      panelClass,
      data
    });

    dialogRef.afterClosed()
      .subscribe(result => {
        if (result && result.addUserEvent) {
          this.userEvents.unshift({id: result.addUserEvent.id, name: result.addUserEvent.name});
          this.ns.success('New group added successfully', '');
        } else if (result && result.editUserEvent) {
          this.userEvents[result.editUserEvent.index].name = result.editUserEvent.name;
        }

      });
  }

  doPaging(e) {
    this.getModel.pageNumber = e;
    this.getUserEvents();
  }

  getData(event) {
    this.getModel.phrase = event;
    this.getUserEvents();
  }
}
