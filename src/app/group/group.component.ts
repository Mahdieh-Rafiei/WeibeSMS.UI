import { Component, OnInit } from '@angular/core';
import {GroupService} from './group.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  group:any;
  id:string;
  contacts:any[];
  constructor(private groupService:GroupService,
              private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.groupService.getGroup(this.id).subscribe(res=>{
      console.log(res.Data);
      this.group = res.Data;
      this.contacts = res.Data.Contacts.Items;
    });
  }
}
