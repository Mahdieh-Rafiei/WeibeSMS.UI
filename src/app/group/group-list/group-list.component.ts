import { Component, OnInit } from '@angular/core';
import {GroupService} from '../group.service';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})

export class GroupListComponent implements OnInit {

  pageNumber:number;
  pageSize:number;
  groups:any[];
  currentGroup:any;

  newGroupName:string;
  modifyGroupName:string;

  constructor(private groupService:GroupService) { }

  ngOnInit() {
    this.groupService.getAll(this.pageSize,this.pageNumber)
      .subscribe(res=>{
        console.log(res);
        this.groups = res.Data;
      });
  }

  addNewGroup(){
    debugger;
    this.groupService.addGroup(this.newGroupName).subscribe(res=>console.log(res.Data));
  }

  removeGroup(){
    if (this.currentGroup == null)
      return;

    this.groupService.removeGroup(this.currentGroup.Id).subscribe(res=>console.log(res));
  }

  modifyGroup(){
    this.groupService.modifyGroup(this.currentGroup.Id,this.modifyGroupName)
      .subscribe(res=>console.log(res));
  }
}
