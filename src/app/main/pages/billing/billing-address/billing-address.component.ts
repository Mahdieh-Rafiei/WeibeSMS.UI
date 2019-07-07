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
import {CityInterface} from '../../../../shared/models/city.interface';
import {BillingService} from '../billing.service';
import {NotificationService} from '../../../../shared/notification.service';
import {BillindAddressResponseInterface} from './models/billind-address-response.interface';
import {errorAnimation} from '../../../../shared/component/animation/error-animation';

@Component({
  selector: 'app-billing-address',
  templateUrl: './billing-address.component.html',
  styleUrls: ['./billing-address.component.scss'],
  animations: [
    errorAnimation()
  ],
})

export class BillingAddressComponent implements OnInit, AfterViewChecked {
  billingAddressData;
  billingAddressForm: FormGroup;
  cities = [];
  vatNumber = true;

  @ViewChild('mobileInput') mobileInput: ElementRef;

  countries: DataCountryInterface[];
  countryPrefix;
  countryFlag;
  mobileValue;

  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private bs: BillingService,
              private notificationService: NotificationService,
              private shs: SharedService,
              private changeDetectorRef: ChangeDetectorRef,
              private router: Router) {
    this.route.data
      .subscribe((data: { billingAddress: BillindAddressResponseInterface }) => {
        this.billingAddressData = data.billingAddress;

      });

  }

  ngAfterViewChecked() {
    this.changeDetectorRef.detectChanges();
  }

  ngOnInit() {

    this.bs.mode = 'address';
    this.createForm();
    this.countries = this.shs.getCountriesByCache();
    this.selectCountry(1, this.countries[0]);
    this.fillBillingAddress(this.billingAddressForm);
    this.setMobileValue();
  }


  changeMobile(mobile: string) {
    this.countries.forEach(item => {
      mobile === item.prefixNumber ? this.selectCountry(2, item) : null;
    });
    this.setMobileValue();
  }

  selectCountry(index, country) {
    this.countryPrefix = country.prefixNumber;
    this.countryFlag = country.flag;
    if (index === 2) {
      this.mobileInput.nativeElement.focus();
      this.setMobileValue();
      this.billingAddressForm.patchValue({
        phone: country.prefixNumber + this.mobileValue
      });
    } else {
      this.billingAddressForm.patchValue({
        phone: country.prefixNumber
      });
    }
    this.billingAddressForm.patchValue({
      prefixNumberId: country.id,
    });
  }

  fillBillingAddress(billingAddressForm) {
    if (!this.billingAddressData.data) {
      return;
    }

    if (this.billingAddressData.data && this.billingAddressData.data.countryId) {
      this.countrySelect(this.billingAddressData.data.countryId);
    }
    let prefixNumber;
    this.countries.forEach(item => {
      if (this.billingAddressData.data.prefixNumberId === item.id) {
        prefixNumber = item.prefixNumber;
        this.selectCountry(1, item);
      }
    });
    billingAddressForm.patchValue({
      fullName: this.billingAddressData.data ? this.billingAddressData.data.fullName : null,
      countryId: this.billingAddressData.data ? this.billingAddressData.data.countryId : '',
      cityId: this.billingAddressData.data ? this.billingAddressData.data.cityId : '',
      phone: this.billingAddressData.data ? prefixNumber + this.billingAddressData.data.phone : null,
      address: this.billingAddressData.data ? this.billingAddressData.data.address : null,
      zipCode: this.billingAddressData.data ? this.billingAddressData.data.zipCode : null,
      prefixNumberId: this.billingAddressData.data ? this.billingAddressData.data.prefixNumberId : '',
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
      phone: ['', Validators.required],
      address: [null, Validators.required],
      zipCode: [null, Validators.required],
      prefixNumberId: ['', Validators.required],
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
    if (this.billingAddressForm.valid) {
      this.setMobileValue();
      const payload = this.billingAddressForm.value;
      payload.phone = this.mobileValue;
      if (!payload.vatNumber) {
        delete payload.vatNumber;
      }
      this.bs.modifyAddress(payload)
        .subscribe(res => {
          this.notificationService.success('Billing address saved successfully', '');
        });
    }
  }

  setMobileValue() {
    this.countries.forEach(item => {
      if (this.billingAddressForm.value.prefixNumberId === item.id) {
        this.mobileValue = this.billingAddressForm.value.phone.substring(item.prefixNumber.length);
      }
    });
  }
}
