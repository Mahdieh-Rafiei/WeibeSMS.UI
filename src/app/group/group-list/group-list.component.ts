import { Component, OnInit } from '@angular/core';
import {GroupService} from '../group.service';
import _ from 'node_modules/lodash/lodash.js';
import {Router} from '@angular/router';
import {UtilityService} from '../../shared/utility.service';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})

export class GroupListComponent implements OnInit {

  pageNumber:number;
  pageSize:number;
  data:any;
  groups:any[]=[];
  currentGroup:any;
  filteredGroups:any[]=[];
  filterExpression='';

  showState:string='default';
  groupName:string='';

  constructor(private groupService:GroupService,
              private router:Router,
              private utilityService:UtilityService) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.groupService.getAll(this.pageSize,this.pageNumber)
      .subscribe(res=>{
        console.log(res);
        this.data= res.Data;
        this.groups = this.data.Items;

        this.realTimeFilter();
        debugger;
      });
  }
  setAddMode(){
    this.showState = 'add';
    this.groupName = '';
  }

  setEditMode(group){
    this.currentGroup = group;
    this.showState = 'edit';
    this.groupName = group.GroupName;
  }

  saveNewGroup(){
    this.groupService.addGroup(this.groupName).subscribe(res=>{
      console.log(res.Data);
      this.showState = 'default';
      let id = res.Data.Id;
      this.router.navigateByUrl(`group/${id}/add-contact`);
    });
  }

  removeGroup(group){
    this.currentGroup = group;

    if (this.currentGroup == null)
      return;

    this.groupService.removeGroup(this.currentGroup.Id).subscribe(res=>console.log(res));
    _.remove(this.groups,g=>g.Id == this.currentGroup.Id);
    this.realTimeFilter();
  }

  modifyGroup(){
    debugger;
    this.groupService.modifyGroup(this.currentGroup.Id,this.groupName)
      .subscribe(res=>{
        console.log(res);
        this.showState = 'default';
        this.currentGroup.GroupName = this.groupName;
        this.realTimeFilter();
      });
  }

  realTimeFilter(){
      this.filteredGroups = this.utilityService.filterByExpression(this.groups,'GroupName',this.filterExpression);
    }
}
