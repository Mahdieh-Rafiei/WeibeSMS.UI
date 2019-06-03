import {Injectable} from '@angular/core';
import {ApiService} from '../../../shared/api.service';
import {Observable} from 'rxjs';
import {InfoGetInterface} from './profile/info/models/info-get.interface';
import {InfoInterface} from './profile/info/models/info.interface';
import {ChangePasswordResponseInterface} from './privacy/change-password/models/change-password-response.interface';
import {ChangeEmailInterface} from './profile/change-email/models/change-email.interface';
import {SenderIdResponseInterface} from './profile/sender-id/models/sender-id-response.interface';
import {LoginLogInterface} from './privacy/login-log/models/login-log.interface';

@Injectable({
  providedIn: 'root'
})
export class UserAccountService {

  constructor(private apiService: ApiService) {
  }

  changePassword(payload): Observable<ChangePasswordResponseInterface> {
    const url = `User/password`;
    return this.apiService.put(url, payload, true);
  }

  getProfile(): Observable<InfoGetInterface> {
    const url = `User/profile`;
    return this.apiService.get(url, true);
  }

  modifyProfile(payload): Observable<any> {
    const url = `User`;
    return this.apiService.put<InfoInterface>(url, payload, true);
  }

  verifyEmail(payload): Observable<any> {
    const url = `User/sendVerificationUrl`;
    return this.apiService.post<ChangeEmailInterface>(url, payload, true);
  }

  getSenderId(): Observable<SenderIdResponseInterface> {
    const url = `User/senderName`;
    return this.apiService.get(url, true);
  }

  modifySenderId(payload: string): Observable<any> {
    const url = `User/senderName`;
    return this.apiService.put(url, payload, true);
  }

  loginLog(pageNumber: number, pageSize: number, phrase: string): Observable<LoginLogInterface> {
    const url = `User/login?pageNumber=${pageNumber}&pageSize=${pageSize}`;
    return this.apiService.get(url, true);
  }
}
