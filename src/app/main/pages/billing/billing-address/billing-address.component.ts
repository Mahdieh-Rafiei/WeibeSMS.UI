import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SharedService} from '../../../../shared/service/shared.service';
import {DataCountryInterface} from '../../../../shared/models/data-country.interface';
import {BillingService} from '../billing.service';
import {NotificationService} from '../../../../shared/notification.service';
import {BillindAddressResponseInterface} from './models/billind-address-response.interface';
import {errorAnimation} from '../../../../shared/component/animation/error-animation';
import {InputedMobileModel} from '../../../../shared/component/country-flag-numbers/inputed-mobile-model';
import {DataBillingAddressInterface} from './models/data-billing-address.interface';

@Component({
  selector: 'app-billing-address',
  templateUrl: './billing-address.component.html',
  styleUrls: ['./billing-address.component.scss'],
  animations: [
    errorAnimation()
  ],
})

export class BillingAddressComponent implements OnInit, AfterViewChecked {
  billingAddress: DataBillingAddressInterface;
  billingAddressForm: FormGroup;
  cities = [];
  vatNumber = true;
  lastMobileData: InputedMobileModel;

  @ViewChild('mobileInput') mobileInput: ElementRef;

  countries: DataCountryInterface[];
  mobileValue;

  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private bs: BillingService,
              private notificationService: NotificationService,
              private shs: SharedService,
              private changeDetectorRef: ChangeDetectorRef) {
    this.route.data
      .subscribe((data: { billingAddress: BillindAddressResponseInterface }) => {
        this.billingAddress = data.billingAddress.data;
        if (this.billingAddress) {
          this.mobileValue = true;

        }
      });
  }

  ngAfterViewChecked() {
    this.changeDetectorRef.detectChanges();
  }

  ngOnInit() {

    this.bs.mode = 'address';
    this.createForm();
    this.countries = this.shs.getCountries().data;

    this.lastMobileData = {
      isCorrectMobile: true,
      mobile: this.billingAddress.phone.toString(),
      country: this.countries.filter(c => c.id == this.billingAddress.prefixNumberId)[0]
    };

    this.fillBillingAddress(this.billingAddressForm);
  }

  fillBillingAddress(billingAddressForm) {
    if (!this.billingAddress) {
      return;
    }

    billingAddressForm.patchValue({
      fullName: this.billingAddress ? this.billingAddress.fullName : null,
      countryId: this.billingAddress ? this.billingAddress.countryId : '',
      phone: this.billingAddress ? this.lastMobileData.country.prefixNumber + this.billingAddress.phone : null,
      address: this.billingAddress ? this.billingAddress.address : null,
      zipCode: this.billingAddress ? this.billingAddress.zipCode : null,
      prefixNumberId: this.billingAddress ? this.billingAddress.countryId : '',
      vatNumber: this.billingAddress ? this.billingAddress.vatNumber : null,
    });

    this.cities = this.countries.filter(c => c.id == this.billingAddress.countryId)[0].states;
    billingAddressForm.patchValue({'cityId':this.billingAddress.cityId});
    this.billingAddressForm.patchValue({cityId: this.billingAddress.cityId});
    if (this.billingAddress && this.billingAddress.vatNumber) {
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

  setMobile(e: InputedMobileModel) {
    this.billingAddressForm.patchValue({'phone': e.mobile});
    this.billingAddressForm.patchValue({'prefixNumberId': e.country.id});
    this.mobileValue = e.isCorrectMobile;
  }

  createForm() {
    this.billingAddressForm = this.fb.group({
      fullName: [null, Validators.required],
      countryId: ['', Validators.required],
      cityId: ['', Validators.required],
      phone: ['', Validators.required],
      address: [null, Validators.required],
      zipCode: [null, Validators.required],
      prefixNumberId: ['', Validators.required],
      vatNumber: [null],
    });
  }

  countrySelect(e) {
    const countryId = e.target.value;
    this.cities = this.countries.filter(c => c.id == countryId)[0].states;
  }

  submit() {
    if (this.billingAddressForm.valid) {
      const payload = this.billingAddressForm.value;
      if (!payload.vatNumber) {
        delete payload.vatNumber;
      }
      this.bs.modifyAddress(payload)
        .subscribe(res => {
          this.notificationService.success('Billing address saved successfully', '');
          this.shs.getCurrentUserInfo().hasBillingAddress = true;
        });
    }
  }
}
