import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GroupListInterface} from '../../../main/pages/group/group-list/models/group-list.interface';
import {GetAllContactGroupInterface} from '../../../main/pages/group/add-contact/import-contact-from-other-list/models/get-all--contact-group.interface';
import {ContactGroupMoveCopyResponseInterface} from '../../../main/pages/group/add-contact/import-contact-from-other-list/models/contact-group-move-copy-response.interface';
import {ContactService} from '../../../main/pages/group/add-contact/single-add-contact/contact.service';
import {GroupService} from '../../../main/pages/group/group.service';
import {NotificationService} from '../../notification.service';
import {Router} from '@angular/router';
import _ from 'node_modules/lodash/lodash.js';

@Component({
  selector: 'app-select-contacts',
  templateUrl: './select-contacts.component.html',
  styleUrls: ['./select-contacts.component.scss']
})

export class SelectContactsComponent implements OnInit {

  groups = [];
  clickedGroup: any;
  totalContactsSelectedCount;
  contactPageSize: number = 10;
  groupSelectedFromLeft: number[] = [];
  contactsSelectedFromGrid: Map<number, number[]> = new Map<number, number[]>();
  @Input() groupId: number;
  @Input() hasOperation: boolean;
  apiModel: Map<number, number[]>;
  @Output() apiModelChanged: EventEmitter<Map<number, number[]>> =
    new EventEmitter<Map<number, number[]>>();

  constructor(private contactService: ContactService,
              private groupService: GroupService,
              private notificationService: NotificationService,
              private router: Router) {
  }

  ngOnInit() {
    this.getAllGroupList();
  }

  getAllGroupList() {
    this.groupService.getAllGroupList(1, 1000, '')
      .subscribe((res: GroupListInterface) => {
        this.groups = res.data.items.filter(i => i.id !== this.groupId);
        this.groups.forEach(g => {
          g.isSelected = false;
          g.pageNumber = 1;
          g.loadedPageNumbers = [];
          g.totalItems = g.contactsCount;
          g.contacts = [];
        });
      });
  }

  totalContactsSelectedCountCalculate() {
    let count = 0;

    this.groupSelectedFromLeft.forEach(g => {
      const group = _.find(this.groups, grp => grp.id === g);
      count += group.contactsCount;
    });

    this.contactsSelectedFromGrid.forEach(value => {
      count += value.length;
    });

    this.totalContactsSelectedCount = count;
    this.calculateApiModel();
  }

  contactCheckedChanged(e, c) {
    this.clickedGroup.contacts.forEach(cc => {
      if (cc.id === c.id) {
        cc.isSelected = e;
      }
    });

    const keyExists = this.contactsSelectedFromGrid.has(this.clickedGroup.id);
    if (e) {
      if (keyExists) {
        this.contactsSelectedFromGrid.get(this.clickedGroup.id).push(c.id);
      } else {
        this.contactsSelectedFromGrid.set(this.clickedGroup.id, [c.id]);
      }
    } else {
      this.clickedGroup.isSelected = false;
      //TODO: use splice instead of lodash in all components!
      _.remove(this.groupSelectedFromLeft, id => id === this.clickedGroup.id);

      const selectedContacts = this.clickedGroup.contacts.filter(c => c.isSelected);
      if (!this.contactsSelectedFromGrid.has(this.clickedGroup.id)) {
        this.contactsSelectedFromGrid.set(this.clickedGroup.id, []);
      } else {
        const array = this.contactsSelectedFromGrid.get(this.clickedGroup.id);
        selectedContacts.forEach(sc => {
          if (!_.includes(array, sc.id)) {
            array.push(sc.id);
          }
        });
      }

      if (keyExists) {
        _.remove(this.contactsSelectedFromGrid.get(this.clickedGroup.id), id => id == c.id);
      }
    }

    this.totalContactsSelectedCountCalculate();
  }

  groupCheckedChanged(e, g) {
    if (e) {
      this.groupSelectedFromLeft.push(g.id);
      this.contactsSelectedFromGrid.delete(g.id);
    } else {
      _.remove(this.groupSelectedFromLeft, id => id == g.id);
    }

    g.contacts.forEach(c => c.isSelected = e);
    this.totalContactsSelectedCountCalculate();
  }

  loadContacts(group) {
    this.clickedGroup = group;

    if (group.loadedPageNumbers.length == 0 || group.loadedPageNumbers.filter(x => x == group.pageNumber).length == 0) {
      this.getContactsFromServer(this.clickedGroup);
    }
  }

  getContactsFromServer(group) {
    this.contactService.getAllContacts(group.id, group.pageNumber, this.contactPageSize, '')
      .subscribe((res: GetAllContactGroupInterface) => {
        res.data.items.forEach(i => {
          group.contacts.push(i);
        });
        group.loadedPageNumbers.push(group.pageNumber);
        group.contacts.forEach(c => c.isSelected = this.clickedGroup.isSelected);
      });
  }

  doPaging(e) {
    this.clickedGroup.pageNumber = e;

    for (let i = 0; this.clickedGroup.loadedPageNumbers.length > i; i++) {
      let num = this.clickedGroup.loadedPageNumbers[i];
      if (num == e) {
        return;
      }
    }

    this.getContactsFromServer(this.clickedGroup);
  }

  calculateApiModel() {
    this.apiModel = new Map<number, number[]>();

    this.contactsSelectedFromGrid.forEach((value, key) => {
      this.apiModel.set(key, value);
    });

    this.groupSelectedFromLeft.forEach(g => {
      this.apiModel.set(g, []);
    });

    this.apiModelChanged.emit(this.apiModel);
  }

  operation(isCut: boolean) {
    this.contactService.addContactFromGroups(this.groupId, this.apiModel, isCut)
      .subscribe((res: ContactGroupMoveCopyResponseInterface) => {
        this.notificationService.success('Operation done successfully', '');
        this.router.navigateByUrl(`group/${this.groupId}`);
      });
  }
}
