import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {CountryInterface} from '../../../../../shared/models/country.interface';
import {SharedService} from '../../../../../shared/service/shared.service';
import {DataCountryInterface} from '../../../../../shared/models/data-country.interface';

@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrls: ['./change-number.component.scss']
})
export class ChangeNumberComponent implements OnInit {
  changeNumberForm: FormGroup;
  countries: DataCountryInterface[];

  constructor(private fb: FormBuilder,
              private shs: SharedService,
              private router: Router) {
  }

  ngOnInit() {
    this.createForm();
    this.getCountry();
  }


  getCountry() {
    this.shs.getCountry()
      .subscribe((res: CountryInterface) => this.countries = res.data);
  }

  createForm() {
    const pattern = /^(09|9)[0-9]{9}$/ig;
    this.changeNumberForm = this.fb.group({
      mobile: [null, Validators.compose([Validators.required, Validators.pattern(pattern)])],
      reason: [1],
      countryId: ['', Validators.required]
    });
  }

  submit() {
    console.log(this.changeNumberForm.value);
    if (this.changeNumberForm.valid) {
      this.router.navigate(['./privacy/verify-number']);
    }
  }
}
