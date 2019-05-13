import {Component, OnInit} from '@angular/core';
import {GroupService} from './group.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactService} from './contact/contact.service';
import _ from 'node_modules/lodash/lodash.js';
import {GroupResponseInterface} from './models/group-response.interface';
import {RemoveContactFormGroupInterface} from './models/remove-contact-form-group.interface';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  group: any;
  groupId: string;
  contacts: any[];

  constructor(private groupService: GroupService,
              private activatedRoute: ActivatedRoute,
              private contactService: ContactService) {
  }

  ngOnInit() {
    this.groupId = this.activatedRoute.snapshot.paramMap.get('groupId');
    this.groupService.getGroup(this.groupId)
      .subscribe((res: GroupResponseInterface) => {
        this.group = res.data;
        this.contacts = res.data.contacts.items;
      });
  }

  removeFromGroup(contact) {
    this.contactService.removeContactFromGroup(this.group.id, contact.id)
      .subscribe((res: RemoveContactFormGroupInterface) => {
        console.log(res);
        _.remove(this.contacts, c => c.id === contact.id);
      });
  }
}
