import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SharedService} from '../../../../shared/service/shared.service';
import {CountryInterface} from '../../../../shared/models/country.interface';
import {DataCountryInterface} from '../../../../shared/models/data-country.interface';
import {DataCityInterface} from '../../../../shared/models/data-city.interface';
import {CityInterface} from '../../../../shared/models/city.interface';
import {BillingService} from '../billing.service';
import {NotificationService} from '../../../../shared/notification.service';
import {BillindAddressResponseInterface} from './models/billind-address-response.interface';
import {BillingAddressInterface} from './models/billing-address.interface';

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
              private bs: BillingService,
              private notificationService: NotificationService,
              private shs: SharedService) {
    this.route.data
      .subscribe((data: { billingAddress: BillindAddressResponseInterface }) => {
        this.billingAddressData = data.billingAddress;
      });
    this.getCountry();
  }

  ngOnInit() {
    this.createForm();
    setTimeout(() => {
      this.fillBillingAddress(this.billingAddressForm);
    }, 200);
  }

  getCountry() {
    this.shs.getCountry()
      .subscribe((res: CountryInterface) => this.countries = res.data);
  }

  fillBillingAddress(billingAddressForm) {
    if (this.billingAddressData.data && this.billingAddressData.data.countryId) {
      this.countrySelect(this.billingAddressData.data.countryId);
    }
    billingAddressForm.patchValue({
      fullName: this.billingAddressData.data ? this.billingAddressData.data.fullName : null,
      countryId: this.billingAddressData.data ? this.billingAddressData.data.countryId : '',
      cityId: this.billingAddressData.data ? this.billingAddressData.data.cityId : '',
      phone: this.billingAddressData.data ? this.billingAddressData.data.phone : null,
      address: this.billingAddressData.data ? this.billingAddressData.data.address : null,
      zipCode: this.billingAddressData.data ? this.billingAddressData.data.zipCode : null,
      prefix: this.billingAddressData.data ? this.billingAddressData.data.prefix : null,
      vatNumber: this.billingAddressData.data ? this.billingAddressData.data.vatNumber : null,
    });
    if (this.billingAddressData.data && this.billingAddressData.data.vatNumber) {
      this.vatNumber = false;
    }

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
      fullName: [null, Validators.required],
      countryId: ['', Validators.required],
      cityId: ['', Validators.required],
      phone: [null, Validators.required],
      address: [null, Validators.required],
      zipCode: [null, Validators.required],
      prefix: [null, Validators.required],
      vatNumber: [null],
    })
    ;
  }

  countrySelect(id) {
    const countryId = id ? id : this.billingAddressForm.get('countryId').value;
    this.shs.getCity(countryId)
      .subscribe((res: CityInterface) => this.cities = res.data);
  }

  submit() {
    const payload = this.billingAddressForm.value;
    if (!payload['vatNumber']) {
      delete payload['vatNumber'];
    }
    this.bs.modifyAddress(payload)
      .subscribe(res => {
        this.notificationService.success('save billing address successfully', '');
      });
  }
}
