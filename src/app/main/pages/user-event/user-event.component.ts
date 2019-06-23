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
import {DialogComponent} from '../../../shared/component/dialog/dialog.component';

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
              private notificationService: NotificationService) {
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

  removeUserEvent(index: number, userEvent) {
    this.openDeleteDialog('480px', 'auto', '', {
      modalType: 'deleteUserEvent',
      modalHeader: 'Delete userEvent',
      modalText: 'are you sure to remove this userEvent?',
      id: userEvent.id,
      index
    });
  }

  openDeleteDialog(width, height, panelClass, data): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width,
      height,
      panelClass,
      data
    });

    dialogRef.afterClosed()
      .subscribe(result => {
        if (result && result.remove) {
          if (result.remove.modalType === 'deleteUserEvent') {
            const payload: RemoveUserEventInterface = {DeleteAnyway: true};
            this.userEventService.removeUserEvent(result.remove.data.id, payload)
              .subscribe((res: RemoveUserEventResponseInterface) => {
                this.userEvents.splice(result.remove.data.index, 1);
                this.notificationService.success('userEvent removed successfully', '');
              });
          }
        }
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
          this.notificationService.success('New group added successfully', '');
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
