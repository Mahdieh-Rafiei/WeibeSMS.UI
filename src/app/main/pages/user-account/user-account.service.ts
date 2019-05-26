import {Injectable} from '@angular/core';
import {ApiService} from '../../../shared/api.service';
import {Observable} from 'rxjs';
import {ProfileGetInterface} from './profile/models/profile-get.interface';
import {ProfileInterface} from './profile/models/profile.interface';
import {ChangePasswordResponseInterface} from './privacy/change-password/models/change-password-response.interface';

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

  getProfile(): Observable<ProfileGetInterface> {
    const url = `User/profile`;
    return this.apiService.get(url, true);
  }

  modifyProfile(payload): Observable<any> {
    const url = `User`;
    return this.apiService.put<ProfileInterface>(url, payload, true);
  }
}
