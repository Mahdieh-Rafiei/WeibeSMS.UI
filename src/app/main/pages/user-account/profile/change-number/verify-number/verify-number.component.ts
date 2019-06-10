import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {SharedService} from '../../../../../../shared/service/shared.service';
import {UserAccountService} from '../../../user-account.service';
import {VerifyMobileResponseInterafce} from './models/verify-mobile-response.interafce';
import {ChangeNumberInterface} from '../models/change-number.interface';
import {Router} from '@angular/router';
import {NotificationService} from '../../../../../../shared/notification.service';

@Component({
  selector: 'app-verify-number',
  templateUrl: './verify-number.component.html',
  styleUrls: ['./verify-number.component.scss']
})
export class VerifyNumberComponent implements OnInit {
  verifyNumberForm: FormGroup;

  constructor(private fb: FormBuilder,
              private uas: UserAccountService,
              private router: Router,
              private ns: NotificationService,
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

  getCountDown(event) {
    if (event) {
      const payload = {
        mobile: this.shs.data.mobile,
        prefixNumberId: this.shs.data.prefixNumberId,
        reason: 3
      };
      this.uas.sendVerificationCode(payload)
        .subscribe((res: ChangeNumberInterface) => {
          this.shs.data['key'] = res.data.key;
        });
    }
  }

  submit() {
    if (this.verifyNumberForm.valid) {
      this.verifyNumberForm.patchValue({
        key: this.shs.data.key ? this.shs.data.key : localStorage.getItem('k-u'),
        prefixNumberId: this.shs.data.prefixNumberId,
        mobile: this.shs.data.mobile,
      });
      const payload = this.verifyNumberForm.value;
      this.uas.verifyMobile(payload)
        .subscribe((res: VerifyMobileResponseInterafce) => {
          this.ns.success('change number successfully', '');
          localStorage.removeItem('k-u');
          this.router.navigate(['/profile/change-number']);
        });
    }
  }

}
