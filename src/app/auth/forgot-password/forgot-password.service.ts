import {Injectable} from '@angular/core';
import {ApiService} from '../../shared/api.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ForgotPasswordService {

  constructor(private apiService: ApiService) {
  }

  sendVerificationCode(payload): Observable<any> {
    const url = `user/sendVerificationCode`;
    return this.apiService.post(url, payload, false);
  }

  verify(mobile: string, verificationCode: string, key: string): Observable<any> {
    let payload = {
      'Key': key,
      'Mobile': mobile,
      'VerificationCode': verificationCode
    };

    return this.apiService.post('user/verifyMobile', payload, false);
  }

  changePassword(password: string): Observable<any> {
    let payload = {
      'Password': password
    };

    return this.apiService.post('user/changePassword', payload, true);
  }
}
