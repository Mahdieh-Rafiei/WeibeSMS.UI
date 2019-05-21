import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {GroupService} from '../group.service';
import _ from 'node_modules/lodash/lodash.js';
import {Router} from '@angular/router';
import {UtilityService} from '../../../../shared/utility.service';
import {NotificationService} from '../../../../shared/notification.service';
import {GroupListInterface} from './models/group-list.interface';
import {AddGroupNameInterface} from './models/add-group-name.interface';
import {AddGroupNameResponseInterface} from './models/add-group-name-response.interface';
import {ModifyGroupNameResponseInterface} from './models/modify-group-name-response.interface';
import {RemoveGroupNameResponseInterface} from './models/remove-group-name-response.interface';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})

export class GroupListComponent implements OnInit {

  pageNumber: number = 1;
  pageSize: number = 10;
  data: any;
  groups: any[] = [];
  currentGroup: any;
  totalItemsCount: number;
  phrase = '';

  showState: string = 'default';
  groupName: string = '';

  constructor(private groupService: GroupService,
              private router: Router,
              private utilityService: UtilityService,
              private notificationService: NotificationService) {
  }

  ngOnInit() {
    this.getAllGroupList();
  }

  getAllGroupList() {
    this.groupService.getAllGroupList(this.pageSize, this.pageNumber, this.phrase)
      .subscribe((res: GroupListInterface) => {
        this.data = res.data;
        this.groups = this.data.items;
        this.totalItemsCount = this.data.totalItemsCount;
      });
  }

  setAddMode() {
    this.showState = 'add';
    this.groupName = '';
  }

  setEditMode(group) {
    this.currentGroup = group;
    this.showState = 'edit';
    this.groupName = group.groupName;
  }

  saveNewGroup() {
    const data: AddGroupNameInterface = {GroupName: this.groupName};
    this.groupService.addGroup(data)
      .subscribe((res: AddGroupNameResponseInterface) => {
        this.showState = 'default';
        const id = res.data.id;
        this.notificationService.success('New group added successfully', '');
        this.router.navigateByUrl(`group/${id}/add-contact/single-contact`);
      });
  }

  removeGroup(group) {

    this.currentGroup = group;

    if (this.currentGroup == null) return;

    this.groupService.removeGroup(this.currentGroup.id)
      .subscribe((res: RemoveGroupNameResponseInterface) => {
        _.remove(this.groups, g => g.id === this.currentGroup.id);
        this.notificationService.success('Group removed successfully', '');
      });
  }

  modifyGroup() {
    const data = {GroupName: this.groupName};
    this.groupService.modifyGroup(this.currentGroup.id, data)
      .subscribe((res: ModifyGroupNameResponseInterface) => {
        console.log(res);
        this.showState = 'default';
        this.currentGroup.groupName = this.groupName;
        this.notificationService.success('Group modified successfully', '');
      });
  }

  getDataWithSearch() {
    this.pageNumber = 1;
    this.getAllGroupList();
  }

  doPaging(e) {
    this.pageNumber = e;
    this.getAllGroupList();
  }
}
