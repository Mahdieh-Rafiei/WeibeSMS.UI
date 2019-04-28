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

  newGroupName:string;
  modifyGroupName:string;

  showAddGroupModal:boolean = false;
  constructor(private groupService:GroupService,
              private router:Router) { }

  ngOnInit() {
    this.groupService.getAll(this.pageSize,this.pageNumber)
      .subscribe(res=>{
        console.log(res);
        this.data= res.Data;
        this.groups = this.data.Items;
      });
  }

  addNewGroup(){
    debugger;
    this.showAddGroupModal=true;
    this.groupService.addGroup(this.newGroupName).subscribe(res=>{
      console.log(res.Data);
      this.showAddGroupModal = false;
      let id = res.Data .Id;
      this.router.navigateByUrl(`group/${id}/add-contact`);
    });
  }

  removeGroup(){
    if (this.currentGroup == null)
      return;

    this.groupService.removeGroup(this.currentGroup.Id).subscribe(res=>console.log(res));
    this.groups = _.remove(this.groups,g=>g.Id != this.currentGroup.Id);
  }

  modifyGroup(){
    this.groupService.modifyGroup(this.currentGroup.Id,this.modifyGroupName)
      .subscribe(res=>console.log(res));
  }
}
