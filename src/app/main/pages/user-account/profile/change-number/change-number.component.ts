import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {SharedService} from '../../../../../shared/service/shared.service';
import {DataCountryInterface} from '../../../../../shared/models/data-country.interface';
import {SendVerificationCodeInterface} from '../../../../../auth/login/models/send-verification-code.interface';
import {UserAccountService} from '../../user-account.service';
import {ChangeNumberInterface} from './models/change-number.interface';
import {UserInfoInterface} from '../../../../../auth/login/models/user-info.interface';
import {InputedMobileModel} from '../../../../../shared/component/country-flag-numbers/inputed-mobile-model';
import {NotificationService} from '../../../../../shared/notification.service';

@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrls: ['./change-number.component.scss']
})
export class ChangeNumberComponent implements OnInit {

  changeNumberForm: FormGroup;
  countries: DataCountryInterface[];
  currentUserInfo: UserInfoInterface;
  inputedMobileModel: InputedMobileModel;
  mobileModified = false;
  key = '';
  codeSent = false;

  constructor(private formBuilder: FormBuilder,
              private sharedService: SharedService,
              private router: Router,
              private userAccountService: UserAccountService,
              private notificationService: NotificationService) {
  }

  ngOnInit() {

    this.countries = this.sharedService.getCountries().data;
    this.currentUserInfo = this.sharedService.getCurrentUserInfo();
    const pureMobile = this.currentUserInfo.mobile.toString().substring(this.currentUserInfo.mobile.toString().length - 10);
    const prefixNumber = '+' + this.currentUserInfo.mobile.toString().substring(0, this.currentUserInfo.mobile.toString().length - 10);
    const country = this.countries.filter(c => c.prefixNumber == prefixNumber)[0];

    this.inputedMobileModel = {
      country: country,
      mobile: pureMobile,
      isCorrectMobile: true
    };

    this.createForm();
  }

  setValue(e: InputedMobileModel) {
    this.changeNumberForm.patchValue({'mobile': e.mobile});
    this.changeNumberForm.patchValue({'prefixNumberId': e.country.id});
    this.inputedMobileModel.isCorrectMobile = e.isCorrectMobile;
    this.mobileModified = this.currentUserInfo.mobile.toString() != (e.country.prefixNumber + e.mobile).substring(1);
  }

  createForm() {
    this.changeNumberForm = this.formBuilder.group({
      mobile: [null, Validators.required],
      reason: [3],
      prefixNumberId: [1, Validators.required]
    });
  }

  submit() {
    if (this.changeNumberForm.valid) {

      const payload: SendVerificationCodeInterface = this.changeNumberForm.value;
      this.sharedService.data = payload;
      this.userAccountService.sendVerificationCode(payload)
        .subscribe((res: ChangeNumberInterface) => {
            this.sharedService.data.key = res.data.key;
            localStorage.setItem('k-u', res.data.key);
            this.key = res.data.key;
            this.codeSent = true;
          },
          err => {
            if (err.error.Message === '4') {
              this.key = localStorage.getItem('k-u');
              this.codeSent = true;
            }
          });
    }
  }

  onVerified(e) {
    this.notificationService.success('Mobile number changed successfully', '');
    debugger;
    this.inputedMobileModel.mobile = this.changeNumberForm.controls['mobile'].value;
    this.inputedMobileModel.country = this.countries.filter(c => c.id === this.changeNumberForm.controls['prefixNumberId'].value)[0];
    let userInfo = this.sharedService.getCurrentUserInfo();
    userInfo.mobile = parseInt(`${this.inputedMobileModel.country.prefixNumber}${this.inputedMobileModel.mobile}`);
    userInfo.prefixNumberId = this.inputedMobileModel.country.id;
    this.sharedService.setUserInfo(userInfo);
    this.codeSent = false;
  }
}
