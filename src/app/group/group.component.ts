import { Component, OnInit } from '@angular/core';
import {GroupService} from './group.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactService} from './contact/contact.service';
import _ from 'node_modules/lodash/lodash.js';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  group:any;
  groupId:string;
  contacts:any[];

  constructor(private groupService:GroupService,
              private activatedRoute:ActivatedRoute,
              private contactService:ContactService) { }

  ngOnInit() {
    this.groupId = this.activatedRoute.snapshot.paramMap.get('groupId');
    this.groupService.selectedGroupId = parseInt(this.groupId);
    this.groupService.getGroup(this.groupId).subscribe(res=>{
      console.log(res.data);
      this.group = res.data;

      this.contacts = res.data.contacts.items;
      console.log(this.contacts);
    });
  }

  removeFromGroup(contact){
     this.contactService.removeContactFromGroup(this.group.id,contact.id)
       .subscribe(res=>{
         console.log(res);
         _.remove(this.contacts,c=>c.id == contact.id);
       });
  }
}
