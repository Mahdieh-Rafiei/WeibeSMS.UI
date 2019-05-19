import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {ProfileGetInterface} from './models/profile-get.interface';
import {ProfileService} from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  profileData: ProfileGetInterface;

  genders = [{title: 'Unknown', value: 1}, {title: 'Female', value: 2}, {title: 'Male', value: 3}];

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private ps: ProfileService) {
    this.route.data
      .subscribe((data: { profile: ProfileGetInterface }) => {
        this.profileData = data.profile;
      });
  }

  ngOnInit() {
    this.createForm();
    this.fillProfile(this.profileForm);
  }

  createForm() {
    this.profileForm = this.fb.group({
      firstName: [null, Validators.compose([Validators.required, Validators.maxLength(20)])],
      lastName: [null, Validators.compose([Validators.required, Validators.maxLength(30)])],
      company: [null],
      email: [null],
      gender: [''],
      defaultPrefix: [null],
      country: [null],
      birthday: [null]
    });
  }

  fillProfile(profileForm) {
    profileForm.patchValue({
      firstName: this.profileData.data.firstName,
      lastName: this.profileData.data.lastName,
      company: this.profileData.data.companyName,
      email: this.profileData.data.email,
      gender: this.profileData.data.gender,
      defaultPrefix: this.profileData.data.defaultPrefix,
      country: this.profileData.data.countryId,
      birthday: [null]
    });
  }

  submit() {
    if (this.profileForm.valid) {
      const payload = this.profileForm.value;
      payload['gender'] = +payload['gender'];
      if (this.profileForm.value.birthday) {
        const date = new Date(this.profileForm.value.birthday).getTime() / 1000;
        payload['birthday'] = date;
      }
      this.ps.modifyProfile(payload)
        .subscribe(res => console.log(res));
    }
  }

}
