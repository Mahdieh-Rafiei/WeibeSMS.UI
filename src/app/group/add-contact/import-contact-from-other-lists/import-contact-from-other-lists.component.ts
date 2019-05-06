import { Component, OnInit } from '@angular/core';
import {ContactService} from '../../contact/contact.service';
import {NotificationService} from '../../../shared/notification.service';
import {GroupService} from '../../group.service';
import _ from 'node_modules/lodash/lodash.js';
import {ActivatedRoute} from '@angular/router';
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
  selectedGroup:any;
  filteredContacts:any[];

  constructor(private contactService:ContactService,
              private groupService:GroupService,
              private activatedRoute:ActivatedRoute,
              private notificationService:NotificationService,
              private utilityService:UtilityService) { }

  ngOnInit() {
    this.groupId = parseInt(this.activatedRoute.parent.snapshot.paramMap.get('groupId'));
    this.groupService.getAll(this.groupPageSize,this.groupPageNumber)
      .subscribe(res=>{
        console.log(res);
        this.groups = res.data.items.filter(i=>i.id != this.groupId);
        this.selectedGroup = _.head(this.groups);

        this.contactService.getAllContacts(this.selectedGroup.id,this.contactPageNumber,this.contactPageSize)
          .subscribe(res=>{
            console.log(res.data);
            res.data.items.forEach(i=>i.isSelected=false);
            this.selectedGroup.contacts = res.data.items;
            this.filteredContacts = Object.assign([],this.selectedGroup.contacts);
          });
      });
  }

  loadContacts(group){
    if (!group.contacts){
      this.contactService.getAllContacts(group.id,this.contactPageNumber,this.contactPageSize)
        .subscribe(res=> {
          group.contacts = res.data.items;
          this.realTimeFilter();
        });
    }
    this.selectedGroup = group;
    this.realTimeFilter();
  }

  realTimeFilter(){
    this.utilityService.filterByExpression(this.selectedGroup.contacts,this.filteredContacts,'firstName',this.filterExpression);
  }
}
