import {Component, OnInit} from '@angular/core';
import {GroupService} from '../group.service';
import {Router} from '@angular/router';
import {UtilityService} from '../../../../shared/utility.service';
import {NotificationService} from '../../../../shared/notification.service';
import {GroupListInterface} from './models/group-list.interface';
import {RemoveGroupNameResponseInterface} from './models/remove-group-name-response.interface';
import {MatDialog} from '@angular/material';
import {AddEditGroupComponent} from './add-edit/add-edit-group.component';
import {ItemsGroupListInterface} from './models/items-group-list.interface';
import {errorAnimation} from '../../../../shared/component/animation/error-animation';
import {DialogComponent} from '../../../../shared/component/dialog/dialog.component';

import {TableConfigInterface} from '../../../../shared/component/table/models/table-config.interface';
import {PagingModelInterface} from '../../../../shared/component/table/models/paging-model.interface';
import {RemoveKeyInterface} from '../../developers/developer/models/remove-key.interface';
import {FilterDataInterface} from "../../../../shared/component/filter/filter-data.interface";

@Component({
    selector: 'app-group-list',
    templateUrl: './group-list.component.html',
    styleUrls: ['./group-list.component.scss'],
    animations: [
        errorAnimation()
    ],
})

export class GroupListComponent implements OnInit {


  data: any;
  groups: ItemsGroupListInterface[] = [];
  phrase = '';
  groupName: string = '';
  filterData = {};
  tableConfig: TableConfigInterface;
  pagingModel: PagingModelInterface = {
    pageNumber: 1,
    pageSize: 10,
    totalItemsCount: 0
  };

  constructor(private groupService: GroupService,
              private router: Router,
              private utilityService: UtilityService,
              private dialog: MatDialog,
              private ns: NotificationService,
              private notificationService: NotificationService) {
  }

  ngOnInit() {
    this.getAllGroupList();
    this.generateRowColumns();
  }

  getAllGroupList() {
    this.groupService.getAllGroupList(this.pagingModel.pageSize, this.pagingModel.pageNumber
      , this.phrase)
      .subscribe((res: GroupListInterface) => {
        this.data = res.data;
        this.groups = this.data.items;
        this.pagingModel.totalItemsCount = this.data.totalItemsCount;
      });
  }

  removeGroup(index, group) {
    this.openDeleteDialog('480px', 'auto', '', {
      modalType: 'deleteGroup',
      modalHeader: 'Delete Group',
      modalText: 'are you sure to remove this group?',
      id: group.id,
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
          if (result.remove.modalType === 'deleteGroup') {
            this.groupService.removeGroup(result.remove.data.id)
              .subscribe((res: RemoveGroupNameResponseInterface) => {
                this.groups.splice(result.remove.data.index, 1);
                this.notificationService.success('Group removed successfully', '');
              });
          }
        }
      });
  }


  addEditGroup(data: ItemsGroupListInterface, index) {
    this.openDialog('480px', 'auto', '', {data, index});
  }

  openDialog(width, height, panelClass, data): void {
    const dialogRef = this.dialog.open(AddEditGroupComponent, {
      width,
      height,
      panelClass,
      data
    });

    dialogRef.afterClosed()
      .subscribe(result => {
        if (result && result.addGroup) {
          const id = result.addGroup.id;
          this.notificationService.success('New group added successfully', '');
          this.router.navigateByUrl(`group/${id}/add-contact/single-contact`);
        } else if (result && result.editGroup) {
          this.groups[result.editGroup.index].groupName = result.editGroup.groupName;
          this.notificationService.success('Group modified successfully', '');
        }
      });
  }

  getData(event) {
    this.phrase = event;
    this.getAllGroupList();
  }

  getFilterData(event) {
    this.getAllGroupList();
  }

  generateRowColumns() {
    this.tableConfig = {
      hasActions: true,
      hasAddOrUpdateButton: true,
      hasRemoveButton: true,
      hasShowButton: true,
      rowColumnsConfig: []
    };

    this.tableConfig.rowColumnsConfig.push({propertyName: 'groupName', isDateTime: false, classes: null});
    this.tableConfig.rowColumnsConfig.push({propertyName: 'contactsCount', isDateTime: false, classes: null});
  }

  showDetails(group: ItemsGroupListInterface) {
    this.router.navigateByUrl(`/group/${group.id}`);
  }

}

