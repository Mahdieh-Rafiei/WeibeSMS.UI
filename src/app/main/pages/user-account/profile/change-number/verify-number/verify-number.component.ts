import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {SharedService} from '../../../../../../shared/service/shared.service';
import {UserAccountService} from '../../../user-account.service';
import {VerifyMobileResponseInterafce} from './models/verify-mobile-response.interafce';

@Component({
  selector: 'app-verify-number',
  templateUrl: './verify-number.component.html',
  styleUrls: ['./verify-number.component.scss']
})
export class VerifyNumberComponent implements OnInit {
  verifyNumberForm: FormGroup;

  constructor(private fb: FormBuilder,
              private uas: UserAccountService,
              private shs: SharedService) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.verifyNumberForm = this.fb.group({
      key: [null],
      prefixNumberId: [null],
      mobile: [null],
      verificationCode: [null],
      reason: [3]
    });
  }

  submit() {
    if (this.verifyNumberForm.valid) {
      this.verifyNumberForm.patchValue({
        key: this.shs.data.key,
        prefixNumberId: this.shs.data.prefixNumberId,
        mobile: this.shs.data.mobile,
      });
      const payload = this.verifyNumberForm.value;
      this.uas.verifyMobile(payload)
        .subscribe((res: VerifyMobileResponseInterafce) => console.log(res));
    }
  }

}
