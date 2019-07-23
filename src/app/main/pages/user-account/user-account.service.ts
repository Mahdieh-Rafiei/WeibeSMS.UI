import {EventEmitter, Injectable, Output} from '@angular/core';
import {ApiService} from '../../../shared/api.service';
import {Observable} from 'rxjs';
import {InfoGetInterface} from './profile/info/models/info-get.interface';
import {InfoInterface} from './profile/info/models/info.interface';
import {ChangePasswordResponseInterface} from './privacy/change-password/models/change-password-response.interface';
import {ChangeEmailInterface} from './profile/change-email/models/change-email.interface';
import {SenderIdResponseInterface} from './profile/sender-id/models/sender-id-response.interface';
import {SendVerificationCodeResponseInterface} from '../../../auth/login/models/send-verification-code-response.interface';
import {SendVerificationCodeInterface} from '../../../auth/login/models/send-verification-code.interface';
import {ChangeNumberInterface} from './profile/change-number/models/change-number.interface';
import {AddSenderIdResponseInterface} from './profile/sender-id/models/add-sender-id-response.interface';
import {UserInfoResponseInterface} from '../../../auth/login/models/user-info-response.interface';
import {DashboardInfoResponseInterface} from '../dashboard/models/dashboard-info-response.interface';
import {VerifyMobileInterface} from '../../../shared/component/verify-mobile/models/verify-mobile.interface';
import {VerifyMobileResponseInterface} from '../../../auth/login/models/verify-mobile-response.interface';


@Injectable({
  providedIn: 'root'
})
export class UserAccountService {

  @Output() firstNameChanged: EventEmitter<null> = new EventEmitter<null>();

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

  removeAvatar() {
    const url = `user/profile/image`;
    return this.apiService.delete(url, null, true);
  }

  verifyEmail(payload): Observable<any> {
    const url = `User/sendVerificationUrl`;
    return this.apiService.post<ChangeEmailInterface>(url, payload, true);
  }


  sendVerificationCode(payload): Observable<ChangeNumberInterface> {
    const url = `user/SendVerificationCode`;
    return this.apiService.post<SendVerificationCodeInterface>(url, payload, true);
  }

  verifyMobile(payload): Observable<VerifyMobileResponseInterface> {
    const url = `user/verifyMobile`;
    return this.apiService.post<VerifyMobileInterface>(url, payload, true);
  }

  getSenderIds(pageNumber: number, pageSize: number, phrase: string, fromDate: number, toDate: number): Observable<SenderIdResponseInterface> {
    const url = `senderName?pageNumber=${pageNumber}&pageSize=${pageSize}&searchValue=${phrase}&fromDate=${fromDate}&toDate=${toDate}`;
    return this.apiService.get(url, true);
  }

  addSenderName(senderName: string): Observable<AddSenderIdResponseInterface> {
    const url = 'senderName';
    return this.apiService.post(url, `"${senderName}"`, true);
  }

  removeSenderName(senderNameId: number): Observable<any> {
    const url = `senderName/${senderNameId}`;
    return this.apiService.delete(url, null, true);
  }

  getUserInfo():Observable<UserInfoResponseInterface>{
    const url = `user`;
    return this.apiService.get(url,true);
  }
}
