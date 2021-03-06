import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {InfoGetInterface} from './models/info-get.interface';
import {SharedService} from '../../../../../shared/service/shared.service';
import {DataCountryInterface} from '../../../../../shared/models/data-country.interface';
import {NotificationService} from '../../../../../shared/notification.service';
import {UserAccountService} from '../../user-account.service';
import {errorAnimation} from '../../../../../shared/component/animation/error-animation';
import {DataService} from '../../../../../shared/service/data.service';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    errorAnimation()
  ]
})
export class InfoComponent implements OnInit {
  profileForm: FormGroup;
  infoData: InfoGetInterface;
  countries: DataCountryInterface[];
  genders = [{title: 'Unknown', value: 1},
    {title: 'Female', value: 2},
    {title: 'Male', value: 3}];
  imageUrl: string = null;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private userAccountService: UserAccountService,
              private notificationService: NotificationService,
              private dataService: DataService,
              private sharedService: SharedService) {
    this.route.data
      .subscribe((data: { info: InfoGetInterface }) => {
        this.infoData = data.info;
      });

    this.getCountry();
  }

  ngOnInit() {
    this.createForm();
    this.fillProfile(this.profileForm);
  }

  getCountry() {
    this.countries = this.sharedService.getCountries().data;
  }

  createForm() {
    this.profileForm = this.formBuilder.group({
      firstName: [null, Validators.compose([Validators.required, Validators.maxLength(20)])],
      lastName: [null, Validators.compose([Validators.required, Validators.maxLength(30)])],
      companyName: [null],
      gender: [''],
      defaultPrefixNumberId: [''],
      countryId: [''],
      birthday: [null]
    });
  }

  getData(event) {
    if (event) {
      this.userAccountService.removeAvatar()
        .subscribe(res => {
          this.dataService.sendData(true);
        });
    }
  }

  fillProfile(profileForm) {
    this.imageUrl = this.infoData.data.image ? this.infoData.data.image : null;
    profileForm.patchValue({
      firstName: this.infoData.data.firstName,
      lastName: this.infoData.data.lastName,
      companyName: this.infoData.data.companyName,
      email: this.infoData.data.email,
      gender: this.infoData.data.gender,
      defaultPrefixNumberId: this.infoData.data.defaultPrefixNumberId,
      countryId: this.infoData.data.countryId,
      birthday: this.infoData.data.birthDay ? new Date(this.infoData.data.birthDay * 1000) : null,
    });
  }

  submit() {
    if (this.profileForm.valid) {
      const payload = this.profileForm.value;
      payload['gender'] = +payload['gender'];
      if (this.profileForm.value.birthday) {
        payload['birthday'] = new Date(this.profileForm.value.birthday).getTime() / 1000;
      }
      this.userAccountService.modifyProfile(payload)
        .subscribe(res => {
          let userInfo = this.sharedService.getCurrentUserInfo();
          userInfo.firstName = payload['firstName'];
          this.sharedService.setUserInfo(userInfo);
          this.userAccountService.firstNameChanged.emit();
          this.notificationService.success('Update profile successfully', '');
          this.router.navigateByUrl('');
        });
    }
  }
}
