import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ApiService} from '../../../../shared/api.service';
import {LoginLogInterface} from './login-log/models/login-log.interface';
import {DeleteAccountInterface} from './deactive-account/delete-acount/models/delete-account.interface';

@Injectable({
  providedIn: 'root'
})
export class PrivacyService {

  constructor(private apiService: ApiService) {
  }


  loginLog(pageNumber: number, pageSize: number, phrase: string): Observable<LoginLogInterface> {
    const url = `User/login?pageNumber=${pageNumber}&pageSize=${pageSize}`;
    return this.apiService.get(url, true);
  }

  deleteAccount(payload): Observable<any> {
    const url = `User`;
    return this.apiService.delete<DeleteAccountInterface>(url, payload, true);
  }
}
