import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ApiService} from '../../../../shared/api.service';
import {ProfileGetInterface} from './models/profile-get.interface';
import {ProfileInterface} from './models/profile.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private apiService: ApiService) {
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
