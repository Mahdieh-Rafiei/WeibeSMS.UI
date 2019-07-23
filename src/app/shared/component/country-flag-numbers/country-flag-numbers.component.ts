import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import {UtilityService} from '../../utility.service';
import {DataCountryInterface} from '../../models/data-country.interface';
import {SharedService} from '../../service/shared.service';
import {InputedMobileModel} from './inputed-mobile-model';

@Component({
  selector: 'app-country-flag-numbers',
  templateUrl: './country-flag-numbers.component.html',
  styleUrls: ['./country-flag-numbers.component.scss']
})

export class CountryFlagNumbersComponent implements OnInit, AfterViewChecked {

  countries: DataCountryInterface[];
  isTried: boolean;
  selectedCountry: DataCountryInterface;
  @Input() lastData: InputedMobileModel;
  mobile: string = '';
  isCorrectMobile = false;
  @Output() inputMobileStateChanged: EventEmitter<InputedMobileModel> = new EventEmitter<InputedMobileModel>();
  @ViewChild('dd') dd: ElementRef;
  filteredCountries: DataCountryInterface[];
  inputGotFocus = true;
  pureMobile = '';

  constructor(private utilityService: UtilityService,
              private sharedService: SharedService,
              private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.getCountries();
    if (this.lastData) {
      this.mobile = `${this.lastData.country.prefixNumber}${this.lastData.mobile}`;
      this.pureMobile = this.mobile.substring(this.lastData.country.prefixNumber.length, this.mobile.length);
      this.selectedCountry = this.lastData.country;
      this.isCorrectMobile = this.lastData.isCorrectMobile;
    }
  }

  ngAfterViewChecked(){
    this.changeDetectorRef.detectChanges();
  }

  changeMobile(e) {

    this.pureMobile = this.mobile.substring(this.selectedCountry.prefixNumber.length, this.mobile.length);
    this.isCorrectMobile = this.utilityService.isMobile(this.pureMobile);
    for (let i = 0; this.countries.length > i; i++) {
      let country = this.countries[i];
      if (country.prefixNumber == e.target.value) {
        this.selectedCountry = country;
        return;
      }
    }

    this.inputMobileStateChanged.emit({
      mobile: this.pureMobile,
      country: this.selectedCountry,
      isCorrectMobile: this.isCorrectMobile
    });
  }

  selectCountry(index, country) {
    this.mobile = this.mobile.substring(this.selectedCountry ? this.selectedCountry.prefixNumber.length : 0);
    this.selectedCountry = country;
    this.mobile = `${this.selectedCountry.prefixNumber}${this.mobile}`;

    this.inputMobileStateChanged.emit({
      mobile: this.pureMobile,
      country: this.selectedCountry,
      isCorrectMobile: this.isCorrectMobile
    });
  }

  getCountries() {
    this.countries = this.sharedService.getCountries().data;
    this.filteredCountries = this.countries;
    if (!this.lastData) {
      this.selectCountry(1, this.countries[0]);
    }
  }

  checkDropDownOpen() {
    return this.dd.nativeElement.classList.length == 2;
  }

  onKeyDown(e) {

    if (!this.checkDropDownOpen()) {
      return;
    }

    if (e.keyCode >= 38 && e.keyCode <= 41) {
      return;
    }

    if (e.key == 'Backspace') {
      this.filteredCountries = this.countries;
      return;
    }

    if (e.keyCode >= 65 && e.keyCode <= 90) {
      this.filteredCountries = this.countries.filter(c => c.name[0].toUpperCase() === e.key.toUpperCase());
    }
  }
}
