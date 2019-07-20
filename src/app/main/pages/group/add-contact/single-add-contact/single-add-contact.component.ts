import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ContactService} from './contact.service';
import {UserEventService} from '../../../user-event/user-event.service';
import {NotificationService} from '../../../../../shared/notification.service';
import {ActivatedRoute, Router} from '@angular/router';
import {GroupService} from '../../group.service';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CountryInterface} from '../../../../../shared/models/country.interface';
import {SharedService} from '../../../../../shared/service/shared.service';
import {DataCountryInterface} from '../../../../../shared/models/data-country.interface';
import {GetContactInterface} from './models/get-contact.interface';
import {DataGetContactInterface} from './models/data-get-contact.interface';
import {errorAnimation} from '../../../../../shared/component/animation/error-animation';
import {AddContactInterface} from './models/add-contact.interface';
import {UtilityService} from '../../../../../shared/utility.service';
import {UserEventInterface} from '../../../user-event/models/user-event.interface';
import {UserEventResponseInterface} from '../../../user-event/models/user-event-response.interface';
import {EventUserAddContactInterface} from './models/event-user-add-contact.interface';
import {DialogComponent} from '../../../../../shared/component/dialog/dialog.component';
import {MatDialog} from '@angular/material';
import {InputedMobileModel} from '../../../../../shared/component/country-flag-numbers/inputed-mobile-model';


@Component({
  selector: 'app-single-add-contact',
  templateUrl: './single-add-contact.component.html',
  styleUrls: ['./single-add-contact.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    errorAnimation()
  ]
})

export class SingleAddContactComponent implements OnInit {
  singleContactForm: FormGroup;
  groupId: number;
  userEvents: UserEventInterface[] = [];

  genders = [{title: 'Unknown', value: 1},
    {title: 'Female', value: 2},
    {title: 'Male', value: 3}];

  countries: DataCountryInterface[];
  mobileValue;
  val = [];
  id = [];
  req = false;
  showAdd: number;

  contact: DataGetContactInterface;
  contactId: number;

  pageNumber = 1;
  pageSize = 10;
  totalItemsCount: number;
  phrase = '';

  constructor(private contactService: ContactService,
              private userEventService: UserEventService,
              private notificationService: NotificationService,
              private route: ActivatedRoute,
              private groupService: GroupService,
              private fb: FormBuilder,
              private router: Router,
              private shs: SharedService,
              private utilityService: UtilityService,
              private dialog: MatDialog) {

    if (!this.contactId) {
      this.getCountry();
    }

    this.route.params.subscribe(item => {
      this.contactId = parseInt(item.contactId);
      this.groupId = parseInt(item.groupId);
    });
  }

  ngOnInit() {
    if (!this.contactId) {
      this.groupId = parseInt(this.route.parent.snapshot.paramMap.get('groupId'));
    }

    this.getUserEvents();
    this.createForm();
    if (this.contactId) {
      this.getContact();
    } else {
      this.addUserEvent(0);
    }
  }

  getContact() {
    this.contactService.getContact(this.contactId)
      .subscribe((res: GetContactInterface) => {
        this.contact = res.data;
        this.fillContact(this.singleContactForm);
      });
  }

  setMobile(e: InputedMobileModel) {

    this.singleContactForm.patchValue({mobile: e.mobile});
    this.singleContactForm.patchValue({prefixNumberId: e.country.id});
  }

  fillContact(singleContactForm) {
    singleContactForm.patchValue({
      contactGroupId: this.groupId,
      gender: this.contact.gender,
      firstName: this.contact.firstName,
      lastName: this.contact.lastName,
      email: this.contact.email,
      mobile: `+${this.contact.mobile}`
    });
    singleContactForm.controls.mobile.disable();
    if (!this.contact.eventsUser || this.contact.eventsUser.length === 0) {
      this.addUserEvent(0);
    } else {
      for (let i = 0; i < this.contact.eventsUser.length; i++) {
        this.addUserEvent(i);
        const singleContact = this.singleContactForm.get('eventsUser') as FormArray;
        singleContact.controls[i].patchValue({
          id: this.contact.eventsUser[i].id,
          value: new Date(this.contact.eventsUser[i].value * 1000),
        });
      }
    }
    this.mobileValue = `+${this.contact.mobile}`;
  }

  getCountry() {
    this.countries = this.shs.getCountries().data;
  }

  getUserEvents() {
    this.userEventService.getUserEvents(this.pageNumber, this.pageSize, this.phrase)
      .subscribe((res: UserEventResponseInterface) => {
        this.userEvents = res.data.items;
      });
  }

  createForm() {
    this.singleContactForm = this.fb.group({
      contactGroupId: this.groupId,
      gender: [''],
      firstName: [null],
      lastName: [null],
      mobile: [null, Validators.required],
      prefixNumberId: [1, Validators.required],
      email: [null, Validators.compose([Validators.email])],
      eventsUser: this.fb.array([])
    });
  }

  submit() {
    if (!this.contactId) {
      this.countries.forEach(item => {
        if (this.singleContactForm.value.prefixNumberId === item.id) {
          this.mobileValue = this.singleContactForm.value.mobile.substring(item.prefixNumber.length);
        }
      });
    }

    this.singleContactForm.value.eventsUser.forEach((item, index) => {
      if (!item.id && item.value) {
        this.id[index] = true;
        this.val[index] = false;
        this.req = true;
        return;
      } else if (item.id && !item.value) {
        this.val[index] = true;
        this.id[index] = false;
        this.req = true;
        return;
      } else if (item.id && item.value) {
        this.val[index] = false;
        this.id[index] = false;
        this.req = false;
        return;
      }
      if (this.singleContactForm.value.eventsUser.length > 1) {
        if (!item.id && !item.value) {
          this.val[index] = true;
          this.id[index] = true;
          this.req = true;
        }
      }
    });

    if (this.singleContactForm.valid && this.mobileValue && !this.req) {

      const payload: AddContactInterface = this.singleContactForm.value;
      // payload.mobile = this.mobileValue;
      payload.gender === 0 ? payload.gender = 1 : payload.gender;
      if (payload.eventsUser.length === 1 && !payload.eventsUser[0].value && !payload.eventsUser[0].id) {
        delete payload.eventsUser;
      } else {
        this.singleContactForm.value.eventsUser.forEach((item, index) => {
          const isUnix = this.utilityService.onlyDigit(this.singleContactForm.value.eventsUser[index].value);
          if (!isUnix) {
            this.singleContactForm.value.eventsUser[index].value = this.singleContactForm.value.eventsUser[index].value.getTime() / 1000;
          }
        });
      }

      if (payload.eventsUser && payload.eventsUser.length > 0) {
        const uniqueIds = Array.from(new Set(payload.eventsUser.map
        ((item: EventUserAddContactInterface): number => item.id)));

        const uniqueEventUsers: EventUserAddContactInterface[] = [];

        let i = 0;
        uniqueIds.forEach(id => {
          let found = false;

          const eu = payload.eventsUser[i];
          for (let j = 0; j < payload.eventsUser.length; j++) {
            if (eu.id == id) {
              found = true;
              break;
            }
          }
          if (found) {
            uniqueEventUsers.push(eu);
          }
          i++;
        });

        payload.eventsUser = uniqueEventUsers;
      }

      if (!this.contactId) {
        this.contactService.addContact(payload)
          .subscribe(res => {
            this.notificationService.success('Contact added successfully', '');
            this.router.navigateByUrl(`group/${this.groupId}`);
          });
      } else {
        delete payload.mobile;
        delete payload.prefixNumberId;
        this.contactService.editContact(payload, this.contactId)
          .subscribe(res => {
            this.notificationService.success('Contact added successfully', '');
            this.router.navigateByUrl(`group/${this.groupId}`);
          });
      }
    }
  }

  addUserEvent(index) {
    this.showAdd = index;
    const eventUser = this.fb.group({
      id: [''],
      value: [null],
    });
    (this.singleContactForm.get('eventsUser') as FormArray).push(eventUser);
  }

  deleteEventUser(index, length) {
    this.showAdd = length - 2;
    const userEvent = this.singleContactForm.get('eventsUser') as FormArray;
    userEvent.removeAt(index);
    if (userEvent.length === 0) {
      this.addUserEvent(0);
    }
  }

  get userEvent() {
    return this.singleContactForm.get('eventsUser')['controls'];
  }

  removeContact() {
    this.openDeleteDialog('480px', 'auto', '', {
      modalType: 'deleteContact',
      modalHeader: 'Delete Contact',
      modalText: 'Are you sure to remove this contact?'
    });
  }

  openDeleteDialog(width, height, panelClass, data): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width,
      height,
      panelClass,
      data
    });

    dialogRef.afterClosed()
      .subscribe(result => {
        if (result) {
          if (result.remove.modalType === 'deleteContact') {
            this.contactService.removeContact(this.contactId)
              .subscribe(res => {
                this.notificationService.success('Contact removed successfully', '');
                this.router.navigateByUrl(`group/${this.groupId}`);
              });
          }
        }
      });
  }
}
