import {Component, OnInit} from '@angular/core';
import {UserEventService} from './user-event.service';
import {RemoveUserEventResponseInterface} from './models/remove-user-event-response.interface';
import {RemoveUserEventInterface} from './models/remove-user-event.interface';
import {MatDialog} from '@angular/material';
import {NotificationService} from '../../../shared/notification.service';
import {AddEditUserEventComponent} from './add-edit/add-edit-user-event.component';
import {UserEventInterface} from './models/user-event.interface';
import {UserEventResponseInterface} from './models/user-event-response.interface';
import {DialogComponent} from '../../../shared/component/dialog/dialog.component';
import {TableConfigInterface} from '../../../shared/component/table/models/table-config.interface';
import {PagingModel} from '../../../shared/component/table/models/paging-model';
import {FilterDataModel} from '../../../shared/component/filter/filter-data-model';

@Component({
  selector: 'app-user-event',
  templateUrl: './user-event.component.html',
  styleUrls: ['./user-event.component.scss']
})
export class UserEventComponent implements OnInit {
  userEvents: UserEventInterface[];
  phrase = '';
  tableConfig: TableConfigInterface = {
    rowColumnsConfig: [],
    pagingModel: new PagingModel(),
    hasActions: true,
    hasRemoveButton: true,
    hasAddOrUpdateButton: true,
    headerNames: ['Id', 'Title']
  };

  filterDataModel = new FilterDataModel();

  constructor(private userEventService: UserEventService,
              private dialog: MatDialog,
              private notificationService: NotificationService) {
  }

  ngOnInit() {
    this.getUserEvents();
    this.generateRowColumns();
  }

  getUserEvents() {
    this.userEventService.getUserEvents(this.tableConfig.pagingModel.pageNumber,
      this.tableConfig.pagingModel.pageSize, this.phrase)
      .subscribe((res: UserEventResponseInterface) => {
        this.userEvents = res.data.items;
        this.tableConfig.pagingModel.totalItemsCount = res.data.totalItemsCount;
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

  getData(event) {
    this.phrase = event;
    this.getUserEvents();
  }

  getFilterData(e:FilterDataModel){
    this.tableConfig.pagingModel.pageSize = e.pageSize;
    this.getUserEvents();
  }

  generateRowColumns() {
    this.tableConfig.rowColumnsConfig.push({propertyName: 'name'});
  }
}
