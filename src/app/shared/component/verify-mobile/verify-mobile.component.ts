import {
  AfterContentInit,
  AfterViewChecked, AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import {RegisterService} from '../../../auth/register/register.service';
import {AuthSharedService} from '../../../auth/auth-shared.service';
import {Router} from '@angular/router';
import {VerifyMobileInterface} from './models/verify-mobile.interface';
import {SharedService} from '../../service/shared.service';
import {UserAccountService} from '../../../main/pages/user-account/user-account.service';
import {Observable} from 'rxjs';
import {VerifyMobileResponseInterface} from '../../../auth/login/models/verify-mobile-response.interface';

@Component({
  selector: 'app-verify-mobile',
  templateUrl: './verify-mobile.component.html',
  styleUrls: ['./verify-mobile.component.scss']
})

export class VerifyMobileComponent implements OnInit, AfterViewInit {

  showSpinner = false;
  prefixNumber = '';
  verificationCode = '';

  @Output() wrongClicked: EventEmitter<null> = new EventEmitter<null>();
  @Output() verified: EventEmitter<string> = new EventEmitter<string>();

  @Input() registrationKey: string;
  @Input() mobile: number;
  @Input() prefixNumberId: number;
  @Input() reason: number;

  @ViewChild('verificationCodePart1Element') verificationCodePart1Element: ElementRef;
  @ViewChild('verificationCodePart2Element') verificationCodePart2Element: ElementRef;
  @ViewChild('verificationCodePart3Element') verificationCodePart3Element: ElementRef;
  @ViewChild('verificationCodePart4Element') verificationCodePart4Element: ElementRef;
  @ViewChild('verificationCodePart5Element') verificationCodePart5Element: ElementRef;

  verificationCodePart1 = '';
  verificationCodePart2 = '';
  verificationCodePart3 = '';
  verificationCodePart4 = '';
  verificationCodePart5 = '';

  constructor(private registerService: RegisterService,
              private authSharedService: AuthSharedService,
              private router: Router,
              private sharedService: SharedService,
              private userAccountService: UserAccountService) {
  }

  ngOnInit() {
    this.prefixNumber = this.sharedService.getCountries()
      .data.filter(c => c.id == this.prefixNumberId)[0].prefixNumber;
  }

  ngAfterViewInit() {
    //TODO: first focus not works!
    this.verificationCodePart1Element.nativeElement.focus();
  }

  verify() {
    this.verificationCode = this.verificationCodePart1.concat(this.verificationCodePart2, this.verificationCodePart3,
      this.verificationCodePart4, this.verificationCodePart5);
    const payload: VerifyMobileInterface = {
      key: this.registrationKey ? this.registrationKey : localStorage.getItem('k-l'),
      mobile: this.mobile,
      prefixNumberId: this.prefixNumberId,
      verificationCode: +this.verificationCode,
      reason: this.reason
    };
    this.showSpinner = true;

    let observable: Observable<VerifyMobileResponseInterface>;

    if (this.reason === 3) {
      observable = this.userAccountService.verifyMobile(payload);
    } else {
      observable = this.registerService.verifyMobile(payload);
    }


    observable
      .subscribe((res: any) => {
          this.showSpinner = false;
          // this.authService.setToken(res.data);
          this.authSharedService.keyLogin = res.data;
          this.authSharedService.mobile = this.mobile.toString();
          this.verified.emit(this.verificationCode);

        },
        err => {
          this.showSpinner = false;
          this.emptyBoxes();
          this.verificationCodePart1Element.nativeElement.focus();
        });
  }

  emptyBoxes() {
    this.verificationCodePart1 = '';
    this.verificationCodePart2 = '';
    this.verificationCodePart3 = '';
    this.verificationCodePart4 = '';
    this.verificationCodePart5 = '';
  }

  setFocus(elementNumber: number, value) {

    if (!value || value.length === 0) {
      return;
    }

    switch (elementNumber) {

      case 1:
        this.verificationCodePart2Element.nativeElement.focus();
        break;

      case 2:
        this.verificationCodePart3Element.nativeElement.focus();
        break;

      case 3:
        this.verificationCodePart4Element.nativeElement.focus();
        break;

      case 4:
        this.verificationCodePart5Element.nativeElement.focus();
        break;

      case 5:
    }

    if (this.verificationCodePart1 && this.verificationCodePart2 && this.verificationCodePart3 &&
      this.verificationCodePart4 && this.verificationCodePart5) {
      this.verify();
    }
  }

  changeFocus(elementNumber: number, event) {
    if (event.key === 'Backspace') {
      switch (elementNumber) {

        case 2:
          if (this.verificationCodePart2 === '') {
            this.verificationCodePart1Element.nativeElement.focus();
          }
          this.verificationCodePart2 = '';
          break;

        case 3:
          if (this.verificationCodePart3 === '') {
            this.verificationCodePart2Element.nativeElement.focus();
          }
          this.verificationCodePart3 = '';
          break;

        case 4:
          if (this.verificationCodePart4 === '') {
            this.verificationCodePart3Element.nativeElement.focus();
          }
          this.verificationCodePart4 = '';
          break;

        case 5:
          if (this.verificationCodePart5 === '') {
            this.verificationCodePart4Element.nativeElement.focus();
          }
          this.verificationCodePart5 = '';
          break;

        case 1:
          break;
      }
    }
  }

  getCountDown(event) {
    if (event) {
      // this.sendVerificationCode();
    }
  }

  rollback() {
    this.wrongClicked.emit();
  }
}
