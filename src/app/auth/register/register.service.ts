import {Injectable} from '@angular/core';
import {ApiService} from '../../shared/api.service';
import {Observable} from 'rxjs';
import {SendVerificationCodeInterface} from '../login/models/send-verification-code.interface';
import {SendVerificationCodeResponseInterface} from '../login/models/send-verification-code-response.interface';
import {VerifyMobileResponseInterface} from '../login/models/verify-mobile-response.interface';
import {VerifyMobileInterface} from '../login/models/verify-mobile.interface';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private apiService: ApiService) {
  }

  sendVerificationCode(payload): Observable<SendVerificationCodeResponseInterface> {
    const url = `User/SendVerificationCode`;
    return this.apiService.post<SendVerificationCodeInterface>(url, payload, false);
  }

  verifyMobile(payload): Observable<VerifyMobileResponseInterface> {
    const url = `User/VerifyMobile`;
    return this.apiService.post<VerifyMobileInterface>(url, payload, false);
  }

  saveInfo(firstName: string, lastName: string, email: string, userName: string, password: string, key: string, mobile: number): Observable<any> {
    let payload = {
      'FirstName': firstName,
      'LastName': lastName,
      'username': userName,
      'Password': password,
      'email': email,
      key,
      mobile
    };

    return this.apiService.post(`User/register`, payload, true);
  }
}
