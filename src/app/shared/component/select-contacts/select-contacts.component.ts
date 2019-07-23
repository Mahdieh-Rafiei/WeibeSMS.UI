import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GroupListInterface} from '../../../main/pages/group/group-list/models/group-list.interface';
import {GetAllContactGroupInterface} from '../../../main/pages/group/add-contact/import-contact-from-other-list/models/get-all--contact-group.interface';
import {ContactGroupMoveCopyResponseInterface} from '../../../main/pages/group/add-contact/import-contact-from-other-list/models/contact-group-move-copy-response.interface';
import {ContactService} from '../../../main/pages/group/add-contact/single-add-contact/contact.service';
import {GroupService} from '../../../main/pages/group/group.service';
import {NotificationService} from '../../notification.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-select-contacts',
  templateUrl: './select-contacts.component.html',
  styleUrls: ['./select-contacts.component.scss']
})

export class SelectContactsComponent implements OnInit {


  clickedGroup: any;
  totalContactsSelectedCount;
  contactPageSize = 10;

  @Input() groups: any[];
  @Input() groupId: number;
  @Input() hasOperation: boolean;
  @Input() apiModel: Map<number, number[]>;

  @Output() groupStatesChanged: EventEmitter<any[]> = new EventEmitter<any[]>();

  @Output() apiModelChanged: EventEmitter<Map<number, number[]>> =
    new EventEmitter<Map<number, number[]>>();

  constructor(private contactService: ContactService,
              private groupService: GroupService,
              private notificationService: NotificationService,
              private router: Router) {
  }

  ngOnInit() {
    if (!this.groups || this.groups.length === 0) {
      this.getAllGroupList();
    } else {
      this.totalContactsSelectedCountCalculate();
    }
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
    this.groups.forEach(g => {
      if (g.isSelected) {
        count += g.totalItems;
      } else {
        count += g.contacts.filter(c => c.isSelected).length;
      }
    });

    this.totalContactsSelectedCount = count;
  }

  contactCheckedChanged() {
    this.clickedGroup.isSelected = false;
    this.totalContactsSelectedCountCalculate();
    this.calculateApiModel();
  }

  groupCheckedChanged(e, g) {
    g.contacts.forEach(c => c.isSelected = e);
    this.totalContactsSelectedCountCalculate();
    this.calculateApiModel();
  }

  loadContacts(group) {
    this.clickedGroup = group;

    if (group.loadedPageNumbers.length === 0 || group.loadedPageNumbers.filter(x => x === group.pageNumber).length === 0) {
      this.getContactsFromServer(this.clickedGroup);
    }
  }

  getContactsFromServer(group) {
    this.contactService.getAllContacts(group.id, group.pageNumber, this.contactPageSize, '')
      .subscribe((res: GetAllContactGroupInterface) => {
        res.data.items.forEach(item => {
          const contact: any = item;
          contact.isSelected = group.isSelected;
          group.contacts.push(contact);
        });
        group.loadedPageNumbers.push(group.pageNumber);
      });
  }

  doPaging(e) {
    this.clickedGroup.pageNumber = e;

    for (let i = 0; this.clickedGroup.loadedPageNumbers.length > i; i++) {
      const num = this.clickedGroup.loadedPageNumbers[i];
      if (num === e) {
        return;
      }
    }

    this.getContactsFromServer(this.clickedGroup);
    this.totalContactsSelectedCountCalculate();
    this.calculateApiModel();
  }

  calculateApiModel() {

    this.apiModel = new Map<number, number[]>();

    for (let i = 0; this.groups.length > i; i++) {
      const group = this.groups[i];
      if (group.totalItems === 0) {
        continue;
      }

      if (group.isSelected) {
        this.apiModel.set(group.id, []);
      } else {

        const contactIds = group.contacts.filter(c => c.isSelected)
          .map(c => c.id);

        if (contactIds.length > 0){
          this.apiModel.set(group.id, contactIds);
        }
      }
    }

    this.apiModelChanged.emit(this.apiModel);
    this.groupStatesChanged.emit(this.groups);
  }

  operation(isCut: boolean) {
    this.contactService.addContactFromGroups(this.groupId, this.apiModel, isCut)
      .subscribe((res: ContactGroupMoveCopyResponseInterface) => {
        this.notificationService.success('Operation done successfully', '');
        this.router.navigateByUrl(`group/${this.groupId}`);
      });
  }
}
