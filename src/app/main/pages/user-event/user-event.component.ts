import {Component, OnInit} from '@angular/core';
import {UserEventService} from './user-event.service';
import {UserEventResponseInterface} from './models/user-event-response.interface';
import {RemoveUserEventResponseInterface} from './models/remove-user-event-response.interface';
import {RemoveUserEventInterface} from './models/remove-user-event.interface';
import {MatDialog} from '@angular/material';
import {NotificationService} from '../../../shared/notification.service';
import {AddEditUserEventComponent} from './add-edit/add-edit-user-event.component';
import {DataUserEventInterface} from './models/data-user-event.interface';

@Component({
  selector: 'app-user-event',
  templateUrl: './user-event.component.html',
  styleUrls: ['./user-event.component.scss']
})
export class UserEventComponent implements OnInit {
  userEvents: DataUserEventInterface[];

  constructor(private userEventService: UserEventService,
              private dialog: MatDialog,
              private ns: NotificationService) {
  }

  ngOnInit() {
    this.getUserEvents();
  }

  getUserEvents() {
    this.userEventService.getUserEvents()
      .subscribe((res: UserEventResponseInterface) => {
        console.log(res);
        this.userEvents = res.data;
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


  addEditUserEvent(data: DataUserEventInterface) {
    this.openDialog('400px', 'auto', '', {data});
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
        if (result && result.addEditUserEvent) {
          this.userEvents.unshift({id: result.addEditUserEvent.id, name: result.addEditUserEvent.name});
          this.ns.success('New group added successfully', '');
        }
      });
  }
}
