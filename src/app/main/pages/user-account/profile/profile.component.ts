import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private fb: FormBuilder) {
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
      phone: [null],
      gender: [null],
      defaultPrefix: [null],
      country: [null],
      birthday: [null]
    });
  }

  submit() {
    console.log(this.profileForm.value);
  }

}
