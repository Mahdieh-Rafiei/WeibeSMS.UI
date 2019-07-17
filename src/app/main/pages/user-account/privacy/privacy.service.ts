import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ApiService} from '../../../../shared/api.service';
import {LoginLogInterface} from './login-log/models/login-log.interface';
import {DeleteAccountInterface} from './deactive-account/delete-acount/models/delete-account.interface';

@Injectable({
  providedIn: 'root'
})
export class PrivacyService {

  mode = 'changePassword';

  constructor(private apiService: ApiService) {
  }

  loginLog(pageNumber: number, pageSize: number, phrase: string, fromDate: number,
           toDate: number): Observable<LoginLogInterface> {

    const url = `User/login?pageNumber=${pageNumber}&pageSize=${pageSize}&searchValue=${phrase}
    &fromDate=${fromDate}&toDate=${toDate}`;

    return this.apiService.get(url, true);
  }

  deleteAccount(payload): Observable<any> {
    const url = `User`;
    return this.apiService.delete<DeleteAccountInterface>(url, payload, true);
  }
}
