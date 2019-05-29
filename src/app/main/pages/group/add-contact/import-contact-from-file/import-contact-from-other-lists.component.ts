import {Component, OnInit} from '@angular/core';
import {ContactService} from '../../contact/contact.service';
import {NotificationService} from '../../../../../shared/notification.service';
import {GroupService} from '../../group.service';
import _ from 'node_modules/lodash/lodash.js';
import {ActivatedRoute, Router} from '@angular/router';
import {UtilityService} from '../../../../../shared/utility.service';
import {GroupListInterface} from '../../group-list/models/group-list.interface';
import {GetAllContactGroupInterface} from './models/get-all--contact-group.interface';
import {ContactGroupMoveCopyResponseInterface} from './models/contact-group-move-copy-response.interface';

@Component({
  selector: 'app-import-contact-from-other-lists',
  templateUrl: './import-contact-from-other-lists.component.html',
  styleUrls: ['./import-contact-from-other-lists.component.scss']
})
export class ImportContactFromOtherListsComponent implements OnInit {

  groupId: number;
  isCollapsed = false;
  groupPageNumber: number = 1;
  groupPageSize: number = 10;
  contactPageNumber: number = 1;
  contactPageSize: number = 10;
  filterExpression: string = '';
  groups = [];
  ContactTotalItemsCount: number;
  clickedGroup: any;

  contactsForGrid: any[] = [];
  contactsSelectedFromGrid: Map<number, number[]> = new Map<number, number[]>();
  groupSelectedFromLeft: number[] = [];
  totalContactsSelectedCount;

  constructor(private contactService: ContactService,
              private groupService: GroupService,
              private activatedRoute: ActivatedRoute,
              private notificationService: NotificationService,
              private router: Router,
              private utilityService: UtilityService) {
  }

  ngOnInit() {
    this.groupId = parseInt(this.activatedRoute.parent.snapshot.paramMap.get('groupId'));
    this.getAllGroupList();

  }

  getAllGroupList() {
    this.groupService.getAllGroupList(this.groupPageSize, this.groupPageNumber, '')
      .subscribe((res: GroupListInterface) => {
        this.groups = res.data.items.filter(i => i.id !== this.groupId);
        this.groups.forEach(g => g.isSelected = false);
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
    console.log('Groups:');
    console.log(this.groupSelectedFromLeft);
    console.log('Contacts from grid:');
    console.log(this.contactsSelectedFromGrid);
  }

  groupCheckedChanged(e, g) {
    if (e) {
      this.groupSelectedFromLeft.push(g.id);
      this.contactsSelectedFromGrid.delete(g.id);
    } else {
      _.remove(this.groupSelectedFromLeft, id => id == g.id);
    }

    if (g.contacts) {
      g.contacts.forEach(c => c.isSelected = e);
    }
    this.totalContactsSelectedCountCalculate();

    console.log('Groups:');
    console.log(this.groupSelectedFromLeft);
    console.log('Contacts from grid:');
    console.log(this.contactsSelectedFromGrid);
  }

  loadContacts(group) {
    this.clickedGroup = group;
    if (!group.contacts) {
      this.getAllContacts(this.clickedGroup);
    } else {
      this.getDataWithSearch();
    }
  }

  getAllContacts(group) {
    this.contactService.getAllContacts(group.id, this.contactPageNumber, this.contactPageSize)
      .subscribe((res: GetAllContactGroupInterface) => {
        group.contacts = res.data.items;
        this.contactsForGrid = res.data.items;
        this.ContactTotalItemsCount = res.data.totalItemsCount;
        group.contacts.forEach(c => c.isSelected = this.clickedGroup.isSelected);
      });
  }


  operation(isCut: boolean) {
    const apiModel = new Map<number, number[]>();
    this.contactsSelectedFromGrid.forEach((value, key) => {
      apiModel.set(key, value);
    });

    this.groupSelectedFromLeft.forEach(g => {
      apiModel.set(g, []);
    });

    this.contactService.addContactFromGroups(this.groupId, apiModel, isCut)
      .subscribe((res: ContactGroupMoveCopyResponseInterface) => {
        console.log(res);
        this.notificationService.success('Operation done successfully', '');
        this.router.navigateByUrl(`group/${this.groupId}`);
      });
  }

  getDataWithSearch() {
    this.contactPageNumber = 1;
    this.getAllContacts(this.clickedGroup);
  }

  doPaging(e) {
    this.contactPageNumber = e;
    this.getAllContacts(this.clickedGroup);
  }

}
