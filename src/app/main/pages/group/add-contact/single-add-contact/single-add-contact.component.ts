import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ContactService} from '../../contact/contact.service';
import {UserEventService} from '../../../user-event/user-event.service';
import {NotificationService} from '../../../../../shared/notification.service';
import {ActivatedRoute, Router} from '@angular/router';
import {GroupService} from '../../group.service';
import {UserEventResponseInterface} from '../../../user-event/models/user-event-response.interface';
import {AddContactInterface} from './models/add-contact.interface';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CountryInterface} from '../../../../../shared/models/country.interface';
import {SharedService} from '../../../../../shared/service/shared.service';
import {DataCountryInterface} from '../../../../../shared/models/data-country.interface';
import {DataUserEventInterface} from '../../../user-event/models/data-user-event.interface';
import {GetContactInterface} from '../../contact/models/get-contact.interface';
import {DataGetContactInterface} from '../../contact/models/data-get-contact.interface';

@Component({
  selector: 'app-single-add-contact',
  templateUrl: './single-add-contact.component.html',
  styleUrls: ['./single-add-contact.component.scss']
})
export class SingleAddContactComponent implements OnInit {
  singleContactForm: FormGroup;
  groupId: number;
  userEvents: DataUserEventInterface[] = [];

  genders = [{title: 'Unknown', value: 1},
    {title: 'Female', value: 2},
    {title: 'Male', value: 3}];

  countries: DataCountryInterface[];
  countryPrefix;
  countryFlag;
  mobileValue;
  val = [];
  id = [];
  req: boolean = false;
  showAdd: number;

  contact: DataGetContactInterface;
  contactId: number;

  constructor(private contactService: ContactService,
              private userEventService: UserEventService,
              private notificationService: NotificationService,
              private activatedRoute: ActivatedRoute,
              private groupService: GroupService,
              private fb: FormBuilder,
              private router: Router,
              private shs: SharedService) {
    if (!this.contactId) {
      this.getCountry();
    }
    this.activatedRoute.params.subscribe(item => this.contactId = parseInt(item.contactId));
  }

  ngOnInit() {
    this.groupId = parseInt(this.activatedRoute.parent.snapshot.paramMap.get('groupId'));
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

  fillContact(singleContactForm) {
    singleContactForm.patchValue({
      gender: this.contact.gender,
      firstName: this.contact.firstName,
      lastName: this.contact.lastName,
      email: this.contact.email,
      mobile: `+${this.contact.mobile}`
    });
    singleContactForm['controls'].mobile.disable();
    if (!this.contact.eventsUser || this.contact.eventsUser.length === 0) {
      this.addUserEvent(0);
    } else {
      for (let i = 0; i < this.contact.eventsUser.length; i++) {
        this.addUserEvent(i);
        const singleContact = this.singleContactForm.get('eventsUser') as FormArray;
        singleContact['controls'][i].patchValue({
          id: this.contact.eventsUser[i].id,
          value: new Date(this.contact.eventsUser[i].value * 1000),
        });
      }
    }
  }

  getCountry() {
    this.shs.getCountry()
      .subscribe((res: CountryInterface) => {
        this.countries = res.data;
        this.selectCountry(1, this.countries[0]);
      });
  }

  selectCountry(index, country) {
    if (!this.contactId) {
      this.countryPrefix = country.prefixNumber;
      this.countryFlag = country.flag;
      if (index === 2) {
        this.countries.forEach(item => {
          if (this.singleContactForm.value.prefixNumberId === item.id) {
            this.mobileValue = this.singleContactForm.value.mobile.substring(item.prefixNumber.length);
          }
        });
        this.singleContactForm.patchValue({
          mobile: country.prefixNumber + this.mobileValue
        });
      } else {
        this.singleContactForm.patchValue({
          mobile: country.prefixNumber
        });
      }
      this.singleContactForm.patchValue({
        prefixNumberId: country.id,
      });
    }
  }

  changeMobile(mobile: string) {
    this.countries.forEach(item => mobile === item.prefixNumber ? this.selectCountry(2, item) : null);
    this.mobileValue = mobile;
  }

  getUserEvents() {
    this.userEventService.getUserEvents()
      .subscribe((res: any) => {
        this.userEvents = res.data;
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
    this.countries.forEach(item => {
      if (this.singleContactForm.value.prefixNumberId === item.id) {
        this.mobileValue = this.singleContactForm.value.mobile.substring(item.prefixNumber.length);
      }
    });

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
      payload['mobile'] = this.mobileValue;
      payload['gender'] === '' ? payload['gender'] = 1 : payload['gender'];
      if (payload.eventsUser.length === 1 && !payload.eventsUser[0].value && !payload.eventsUser[0].id) {
        delete payload['eventsUser'];
      } else {
        this.singleContactForm.value.eventsUser.forEach((item, index) => {
          this.singleContactForm.value.eventsUser[index].value = this.singleContactForm.value.eventsUser[index].value.getTime() / 1000;
        });
      }

      this.contactService.addContact(payload)
        .subscribe(res => {
          this.notificationService.success('Contact added successfully', '');
          this.router.navigateByUrl(`group/${this.groupId}`);
        });
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
    return this.singleContactForm['controls'].eventsUser;
  }

}
