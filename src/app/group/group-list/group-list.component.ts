import { Component, OnInit } from '@angular/core';
import {GroupService} from '../group.service';
import _ from 'node_modules/lodash/lodash.js';
import {Router} from '@angular/router';
import {UtilityService} from '../../shared/utility.service';
import {NotificationService} from '../../shared/notification.service';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})

export class GroupListComponent implements OnInit {

  pageNumber:number=1;
  pageSize:number=10;
  data:any;
  groups:any[]=[];
  currentGroup:any;
  totalItemsCount:number;
  // filteredGroups:any[]=[];
  phrase='';

  showState:string='default';
  groupName:string='';

  constructor(private groupService:GroupService,
              private router:Router,
              private utilityService:UtilityService,
              private notificationService:NotificationService) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.groupService.getAll(this.pageSize,this.pageNumber,this.phrase)
      .subscribe(res=>{
        console.log(res);
        this.data= res.data;
        this.groups = this.data.items;
        this.totalItemsCount = this.data.totalItemsCount;
      });
  }
  setAddMode(){
    this.showState = 'add';
    this.groupName = '';
  }

  setEditMode(group){
    this.currentGroup = group;
    this.showState = 'edit';
    this.groupName = group.groupName;
  }

  saveNewGroup(){
    this.groupService.addGroup(this.groupName).subscribe(res=>{
      console.log(res.data);
      this.showState = 'default';
      let id = res.data.id;
      this.notificationService.success('New group added successfully','');
      this.router.navigateByUrl(`group/${id}/add-contact/single-contact`);
    });
  }

  removeGroup(group){

    debugger;

    this.currentGroup = group;

    if (this.currentGroup == null)
      return;

    this.groupService.removeGroup(this.currentGroup.id)
      .subscribe(res=>{
        console.log(res);
        _.remove(this.groups,g=>g.id == this.currentGroup.id);
        this.notificationService.success('Group removed successfully','');
        // this.realTimeFilter();
      });
  }

  modifyGroup(){
    this.groupService.modifyGroup(this.currentGroup.id,this.groupName)
      .subscribe(res=>{
        console.log(res);
        this.showState = 'default';
        this.currentGroup.groupName = this.groupName;
        this.notificationService.success('Group modified successfully','');
        // this.realTimeFilter();
      });
  }

  getDataWithSearch(){
    this.pageNumber=1;
    this.getData();
  }

  doPaging(e){
    this.pageNumber=e;
    this.getData();
  }

}
