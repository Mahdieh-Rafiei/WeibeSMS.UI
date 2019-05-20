import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {SharedService} from '../../../../shared/service/shared.service';
import {CountryInterface} from '../../../../shared/models/country.interface';
import {DataCountryInterface} from '../../../../shared/models/data-country.interface';
import {DataCityInterface} from '../../../../shared/models/data-city.interface';
import {CityInterface} from '../../../../shared/models/city.interface';

@Component({
  selector: 'app-billing-address',
  templateUrl: './billing-address.component.html',
  styleUrls: ['./billing-address.component.scss']
})
export class BillingAddressComponent implements OnInit {
  billingAddressData;
  billingAddressForm: FormGroup;
  countries: DataCountryInterface[];
  cities = [];
  vatNumber: boolean = true;

  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private shs: SharedService) {
    this.route.data
      .subscribe((data: { billingAddress }) => {
        this.billingAddressData = data;
      });
    this.getCountry();
  }

  ngOnInit() {
    this.createForm();
  }

  getCountry() {
    this.shs.getCountry()
      .subscribe((res: CountryInterface) => this.countries = res.data);
  }

  changeVatNumber(event) {
    if (event.value === '1') {
      this.vatNumber = true;
    } else if (event.value === '2') {
      this.vatNumber = false;
    }
  }

  createForm() {
    this.billingAddressForm = this.fb.group({
      fullName: [null],
      countryId: [''],
      cityId: [''],
      phone: [null],
      address: [null],
      zipCode: [null],
      vATNumber: [null],
    })
    ;
  }

  countrySelect() {
    const countryId = this.billingAddressForm.get('countryId').value;
    this.shs.getCity(countryId)
      .subscribe((res: CityInterface) => this.cities = res.data);
  }

  submit() {
    console.log(this.billingAddressForm.value);
  }
}
