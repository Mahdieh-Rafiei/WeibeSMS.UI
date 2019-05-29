import {Injectable} from '@angular/core';
import {ApiService} from '../../shared/api.service';
import {Observable} from 'rxjs';
import {SendVerificationCodeInterface} from '../login/models/send-verification-code.interface';
import {SendVerificationCodeResponseInterface} from '../login/models/send-verification-code-response.interface';
import {VerifyMobileResponseInterface} from '../login/models/verify-mobile-response.interface';
import {VerifyMobileInterface} from '../login/models/verify-mobile.interface';
import {RegisterInterface} from './models/register.interface';
import {RegisterResponseInterface} from './models/register-response.interface';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private apiService: ApiService) {
  }

  sendVerificationCode(payload): Observable<SendVerificationCodeResponseInterface> {
    const url = `guest/SendVerificationCode`;
    return this.apiService.post<SendVerificationCodeInterface>(url, payload, false);
  }

  verifyMobile(payload): Observable<VerifyMobileResponseInterface> {
    const url = `guest/VerifyMobile`;
    return this.apiService.post<VerifyMobileInterface>(url, payload, false);
  }

  saveInfo(payload): Observable<RegisterResponseInterface> {
    const url = `guest/register`;
    return this.apiService.post<RegisterInterface>(url, payload, false);
  }

  checkUnique(payload) {
    const url = `User/isDuplicateValue?key=${payload.key}&value=${payload.value}`;
    return this.apiService.get(url, false);
  }
}
