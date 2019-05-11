import { Component, OnInit } from '@angular/core';
import {ContactService} from '../../contact/contact.service';
import {NotificationService} from '../../../shared/notification.service';
import {GroupService} from '../../group.service';
import _ from 'node_modules/lodash/lodash.js';
import {ActivatedRoute, Router} from '@angular/router';
import {UtilityService} from '../../../shared/utility.service';

@Component({
  selector: 'app-import-contact-from-other-lists',
  templateUrl: './import-contact-from-other-lists.component.html',
  styleUrls: ['./import-contact-from-other-lists.component.css']
})
export class ImportContactFromOtherListsComponent implements OnInit {

  groupId:number;
  isCollapsed = false;
  groupPageNumber:number=1;
  groupPageSize:number=10;
  contactPageNumber:number=1;
  contactPageSize:number=10;
  filterExpression:string='';
  groups:any[]=[];
  clickedGroup:any;

  contactsForGrid:any[]=[];
  contactsSelectedFromGrid:Map<number,number[]>= new Map<number,number[]>();
  groupSelectedFromLeft:number[]=[];
  totalContactsSelectedCount;

  constructor(private contactService:ContactService,
              private groupService:GroupService,
              private activatedRoute:ActivatedRoute,
              private notificationService:NotificationService,
              private router:Router,
              private utilityService:UtilityService) { }

  ngOnInit() {
    this.groupId = parseInt(this.activatedRoute.parent.snapshot.paramMap.get('groupId'));
    this.groupService.getAll(this.groupPageSize,this.groupPageNumber,'')
      .subscribe(res=>{
        this.groups = res.data.items.filter(i=>i.id != this.groupId);
        this.groups.forEach(g=> g.isSelected=false);
      });
  }

  totalContactsSelectedCountCalculate(){
     let count = 0;

     this.groupSelectedFromLeft.forEach(g=>{
      let group = _.find(this.groups,grp=>grp.id == g);
      count += group.contactsCount;
     });

     this.contactsSelectedFromGrid.forEach(value => {
       count += value.length
     });

     this.totalContactsSelectedCount = count;
  }

  contactCheckedChanged(e,c){
    this.clickedGroup.contacts.forEach(cc =>{
      if (cc.id == c.id){
        cc.isSelected = e;
      }
    });

    let keyExists = this.contactsSelectedFromGrid.has(this.clickedGroup.id);
    if (e){
      if (keyExists){
        this.contactsSelectedFromGrid.get(this.clickedGroup.id).push(c.id);
      } else
      {
        this.contactsSelectedFromGrid.set(this.clickedGroup.id,[c.id]);
      }
    } else {
      this.clickedGroup.isSelected = false;
      _.remove(this.groupSelectedFromLeft,id=>id==this.clickedGroup.id);

      let selectedContacts = this.clickedGroup.contacts.filter(c=>c.isSelected);
      if (!this.contactsSelectedFromGrid.has(this.clickedGroup.id)){
        this.contactsSelectedFromGrid.set(this.clickedGroup.id,[]);
      }else {
        let array = this.contactsSelectedFromGrid.get(this.clickedGroup.id);
        selectedContacts.forEach(sc=>{
          if(!_.includes(array,sc.id)){
            array.push(sc.id);
          }
        });
      }

      if (keyExists) {
          _.remove(this.contactsSelectedFromGrid.get(this.clickedGroup.id),id=>id==c.id);
      }
    }

    this.totalContactsSelectedCountCalculate();
    console.log('Groups:');
    console.log(this.groupSelectedFromLeft);
    console.log('Contacts from grid:');
    console.log(this.contactsSelectedFromGrid);
  }

  groupCheckedChanged(e,g){
    if (e){
      this.groupSelectedFromLeft.push(g.id);
      this.contactsSelectedFromGrid.delete(g.id);
    } else {
      _.remove(this.groupSelectedFromLeft,id=>id == g.id);
    }

    if (g.contacts){
      g.contacts.forEach(c=> c.isSelected = e);
    }
    this.totalContactsSelectedCountCalculate();

    console.log('Groups:');
    console.log(this.groupSelectedFromLeft);
    console.log('Contacts from grid:');
    console.log(this.contactsSelectedFromGrid);
  }

  loadContacts(group){
    this.clickedGroup = group;
    if (!group.contacts){
      this.contactService.getAllContacts(group.id,this.contactPageNumber,this.contactPageSize)
        .subscribe(res=> {
          group.contacts = res.data.items;
          group.contacts.forEach(c=>c.isSelected=this.clickedGroup.isSelected);
          this.realTimeFilter();
        });
    }
    else {
      this.realTimeFilter();
    }
  }

  realTimeFilter(){
    this.utilityService.filterByExpression(this.clickedGroup.contacts,this.contactsForGrid,'firstName',this.filterExpression);
  }

  operation(isCut:boolean){
    let apiModel = new Map<number,number[]>();
    this.contactsSelectedFromGrid.forEach((value, key) => {
      apiModel.set(key,value);
    });

    this.groupSelectedFromLeft.forEach(g => {
      apiModel.set(g,[]);
    });

    this.contactService.addContactFromGroups(this.groupId,apiModel,isCut)
      .subscribe(res=>{
        console.log(res);
        this.notificationService.success('Operation done successfully','');
        this.router.navigateByUrl(`group/${this.groupId}`);
      });
  }
}
