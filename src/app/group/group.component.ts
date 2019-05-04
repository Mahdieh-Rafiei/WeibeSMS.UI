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
  id:string;
  contacts:any[];
  isAddMode:boolean=false;

  firstName:string;
  lastName:string;
  mobile:string;
  email:string='';
  gender:number;

  constructor(private groupService:GroupService,
              private activatedRoute:ActivatedRoute,
              private contactService:ContactService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('groupId');
    this.groupService.getGroup(this.id).subscribe(res=>{
      console.log(res.Data);
      this.group = res.Data;

      this.contacts = res.Data.Contacts.Items;
      console.log(this.contacts);
    });
  }

  removeFromGroup(contact){
     this.contactService.removeContactFromGroup(this.group.Id,contact.Id)
       .subscribe(res=>{
         console.log(res);
         _.remove(this.contacts,c=>c.Id == contact.Id);
       });
  }

  // addContact(){
  //   this.contactService.addContact(this.group.Id,this.firstName,this.lastName,this.mobile,this.gender,this.email)
  //     .subscribe(res => {
  //       console.log(res);
  //       this.contacts.push({
  //         'FirstName':this.firstName,
  //         'LastName':this.lastName,
  //         'Id':res.Data,
  //         'Mobile':this.mobile
  //       });
  //     });
  // }
}
