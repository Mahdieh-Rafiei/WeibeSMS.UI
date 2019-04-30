import { Component, OnInit } from '@angular/core';
import {GroupService} from '../group.service';
import _ from 'node_modules/lodash/lodash.js';
import {Router} from '@angular/router';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})

export class GroupListComponent implements OnInit {

  pageNumber:number;
  pageSize:number;
  data:any;
  groups:any[];
  currentGroup:any;

  showState:string='default';
  newGroupName:string;
  modifyGroupName:string;

  constructor(private groupService:GroupService,
              private router:Router) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.groupService.getAll(this.pageSize,this.pageNumber)
      .subscribe(res=>{
        console.log(res);
        this.data= res.Data;
        this.groups = this.data.Items;
      });
  }
  setAddMode(){
    this.showState = 'add';
  }

  setEditMode(group){
    this.currentGroup = group;
    this.showState = 'edit';
  }

  saveNewGroup(){
    this.groupService.addGroup(this.newGroupName).subscribe(res=>{
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
  }

  modifyGroup(){
    debugger;
    this.groupService.modifyGroup(this.currentGroup.Id,this.currentGroup.GroupName)
      .subscribe(res=>{
        console.log(res);
        this.showState = 'default';
      });
  }
}
