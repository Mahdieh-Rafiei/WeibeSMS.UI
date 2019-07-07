import {Component, OnInit} from '@angular/core';
import {UserNotificationService} from '../user-notification.service';
import {MatDialog} from '@angular/material';
import {ShowNotificationComponent} from '../show/show-notification.component';
import {GetUserNotificationInterface} from './models/get-user-notification.interface';
import {FilterDataModel} from '../../../../shared/component/filter/filter-data-model';
import {TableConfigInterface} from '../../../../shared/component/table/models/table-config.interface';
import {PagingModel} from '../../../../shared/component/table/models/paging-model';
import {DataGetUserNotificationInterface} from './models/data-get-user-notification.interface';


@Component({
  selector: 'app-user-notification',
  templateUrl: './user-notification.component.html',
  styleUrls: ['./user-notification.component.scss']
})
export class UserNotificationComponent implements OnInit {
  userNotifications: DataGetUserNotificationInterface[];
  showNotification: boolean = false;
  selectedUserNotification: any;

  phrase = '';
  tableConfig: TableConfigInterface = {
    pagingModel: new PagingModel(),
    // headerNames: ['Id','Title', 'Status', 'Date time'],
    headersConfig: [{
      title: 'Id',
      hideInResponsive: false
    }, {title: 'Title', hideInResponsive: false}, {title: 'Status', hideInResponsive: false}, {
      title: 'Date time',
      hideInResponsive: false
    }],
    rowColumnsConfig: [],
  };

  filterDataModel = new FilterDataModel();

  constructor(private userNotificationService: UserNotificationService,
              private dialog: MatDialog) {
  }

  ngOnInit() {
    this.filterDataModel.fromToDate = true;
    this.filterDataModel.notificationStatuses = [
      {value: 0, title: 'All'},
      {value: true, title: 'Read'},
      {value: false, title: 'Unread'}
    ];
    this.generateRowColumns();
    this.getAllUserNotifications();
  }

  getAllUserNotifications() {
    this.userNotificationService.getAllUserNotifications(
      this.tableConfig.pagingModel.pageNumber,
      this.tableConfig.pagingModel.pageSize,
      this.filterDataModel.fromDate,
      this.filterDataModel.toDate,
      this.filterDataModel.notificationStatusSelected,
      this.phrase
    )
      .subscribe(res => {
        this.userNotifications = res.data.items;
        this.tableConfig.pagingModel.totalItemsCount = res.data.totalItemsCount;
      });
  }

  preparingShowNotification(userNotification: DataGetUserNotificationInterface) {
    this.openDialog('600px', 'auto', '', {userNotification});
  }

  openDialog(width, height, panelClass, data)
    :
    void {
    const dialogRef = this.dialog.open(ShowNotificationComponent, {
      width,
      height,
      panelClass,
      data
    });

    dialogRef.afterClosed()
      .subscribe(result => {
        if (result && result.showNotify) {
          const userNotification = result.showNotify.userNotification;
          this.userNotificationService.getUserNotification(userNotification.id)
            .subscribe((res: GetUserNotificationInterface) => {
              userNotification.isRead = true;
            });
        }
      });
  }

  getFilterData(e: FilterDataModel) {
    this.tableConfig.pagingModel.pageSize = e.pageSize;
    this.getAllUserNotifications();
  }

  generateRowColumns() {
    this.tableConfig.rowColumnsConfig.push({propertyName: 'title'});
    this.tableConfig.rowColumnsConfig.push({
      buttonConfig: {
        classSelector: (value: DataGetUserNotificationInterface) => {
          return value.isRead ? 'green-btn' : 'red-btn';
        },
        action: (value: DataGetUserNotificationInterface) => {
          this.preparingShowNotification(value);
        },
        innerHTMLSelector: (value: DataGetUserNotificationInterface) => {
          return value.isRead ? 'read' : 'unread';
        }
      }
    });
    this.tableConfig.rowColumnsConfig.push({propertyName: 'creationDateTime', isDateTime: true});
  }
}
