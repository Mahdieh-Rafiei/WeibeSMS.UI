import {Injectable} from '@angular/core';
import {ApiService} from '../../../shared/api.service';
import {Observable} from 'rxjs';
import {DashboardInfoResponseInterface} from './models/dashboard-info-response.interface';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(private apiService: ApiService) {
  }

  getDashboardInfo():Observable<DashboardInfoResponseInterface>{
    const url = `user/dashboard`;
    return this.apiService.get(url,true);
  }
}
