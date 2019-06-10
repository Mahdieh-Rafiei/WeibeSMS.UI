import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ContactService} from '../../contact/contact.service';
import {UserEventService} from '../../../user-event/user-event.service';
import {NotificationService} from '../../../../../shared/notification.service';
import {ActivatedRoute, Router} from '@angular/router';
import {GroupService} from '../../group.service';
import {UserEventResponseInterface} from '../../../user-event/models/user-event-response.interface';
import {AddContactInterface} from './models/add-contact.interface';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CountryInterface} from '../../../../../shared/models/country.interface';
import {SharedService} from '../../../../../shared/service/shared.service';
import {DataCountryInterface} from '../../../../../shared/models/data-country.interface';

@Component({
  selector: 'app-single-add-contact',
  templateUrl: './single-add-contact.component.html',
  styleUrls: ['./single-add-contact.component.scss']
})
export class SingleAddContactComponent implements OnInit {
  singleContactForm: FormGroup;
  groupId: number;
  userEvents: any[] = [];
  mobile: string = '';
  firstName: string = '';
  lastName: string = '';
  gender: number = 3;
  email: string = '';

  genders = [{title: 'Unknown', value: 1},
    {title: 'Female', value: 2},
    {title: 'Male', value: 3}];

  countries: DataCountryInterface[];
  countryPrefix;
  countryFlag;
  mobileValue;

  @ViewChild('mobileInput') mobileInput: ElementRef;

  constructor(private contactService: ContactService,
              private userEventService: UserEventService,
              private notificationService: NotificationService,
              private activatedRoute: ActivatedRoute,
              private groupService: GroupService,
              private fb: FormBuilder,
              private router: Router,
              private shs: SharedService
  ) {
    this.getCountry();
  }

  ngOnInit() {
    this.groupId = parseInt(this.activatedRoute.parent.snapshot.paramMap.get('groupId'));
    // this.getUserEvents();
    this.createForm();
  }

  getCountry() {
    this.shs.getCountry()
      .subscribe((res: CountryInterface) => {
        this.countries = res.data;
        this.selectCountry(1, this.countries[0]);
      });
  }

  selectCountry(index, country) {
    this.countryPrefix = country.prefixNumber;
    this.countryFlag = country.flag;
    if (index === 2) {
      this.mobileInput.nativeElement.focus();
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

  changeMobile(mobile: string) {
    this.countries.forEach(item => mobile === item.prefixNumber ? this.selectCountry(2, item) : null);
  }

  getUserEvents() {
    this.userEventService.getUserEvents()
      .subscribe((res: UserEventResponseInterface) => {
        console.log(res.data);
        this.userEvents = res.data;
      });
  }

  createForm() {
    this.singleContactForm = this.fb.group({
      gender: [''],
      firstName: [null],
      lastName: [null],
      mobile: [null, Validators.required],
      prefixNumberId: [1, Validators.required],
      contactGroupId: [null],
      email: [null, Validators.compose([Validators.email])],

    });
  }

  submit() {
    console.log(this.singleContactForm.value);
    if (this.singleContactForm.valid) {
      this.countries.forEach(item => {
        if (this.singleContactForm.value.prefixNumberId === item.id) {
          this.mobileValue = this.singleContactForm.value.mobile.substring(item.prefixNumber.length);
        }
      });
      const payload = this.singleContactForm.value;
      payload['mobile'] = this.mobileValue;

      this.contactService.addContact(payload)
        .subscribe(res => {
          this.notificationService.success('Contact added successfully', '');
          this.router.navigateByUrl(`group/${this.groupId}`);
        });
    }
  }

  addContact() {
    if (this.mobile.length === 0) {
      this.notificationService.error(`Phone number cant be null!`, ``);
      return;
    }

    const payload: AddContactInterface = {
      Gender: this.gender,
      FirstName: this.firstName,
      LastName: this.lastName,
      Mobile: this.mobile,
      ContactGroupId: this.groupId,
      Email: this.email
    };

    this.contactService.addContact(payload)
      .subscribe(res => {
        this.notificationService.success('Contact added successfully', '');
        this.router.navigateByUrl(`group/${this.groupId}`);
      });
  }
}
