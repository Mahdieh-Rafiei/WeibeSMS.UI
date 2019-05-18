import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {ProfileGetInterface} from './models/profile-get.interface';
import {ProfileService} from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  profileData: ProfileGetInterface;

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
  }

  createForm() {
    this.profileForm = this.fb.group({
      firstName: [null, Validators.compose([Validators.required, Validators.maxLength(20)])],
      lastName: [null, Validators.compose([Validators.required, Validators.maxLength(30)])],
      company: [null],
      email: [null],
      phone: [this.profileData.data.mobile],
      gender: [null],
      defaultPrefix: [null],
      country: [null],
      birthday: [null]
    });
  }

  submit() {
    if (this.profileForm.valid) {
      const payload = this.profileForm.value;
      this.ps.modifyProfile(payload)
        .subscribe(res => console.log(res));
    }
  }

}
