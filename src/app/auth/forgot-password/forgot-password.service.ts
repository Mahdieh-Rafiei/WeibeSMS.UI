import {Injectable} from '@angular/core';
import {ApiService} from '../../shared/api.service';
import {Observable} from 'rxjs';
import {VerifyMobileResponseInterface} from '../login/models/verify-mobile-response.interface';
import {SendVerificationCodeResponseInterface} from '../login/models/send-verification-code-response.interface';

@Injectable({
  providedIn: 'root'
})

export class ForgotPasswordService {

  constructor(private apiService: ApiService) {
  }

  sendVerificationCode(payload): Observable<SendVerificationCodeResponseInterface> {
    const url = `guest/sendVerificationCode`;
    return this.apiService.post(url, payload, false);
  }

  verify(payload): Observable<VerifyMobileResponseInterface> {
    const url = `guest/verifyMobile`;
    return this.apiService.post(url, payload, false);
  }

  changePassword(payload): Observable<any> {
    const url = `guest/password`;
    return this.apiService.post(url, payload, false);
  }
}
