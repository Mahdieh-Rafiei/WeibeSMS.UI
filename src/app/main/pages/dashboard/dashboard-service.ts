import {Injectable} from '@angular/core';
import {ApiService} from '../../../shared/api.service';
import {Observable} from 'rxjs';
import {GetSmsSentMonthlyReportResponseInterface} from './models/get-sms-sent-monthly-report-response.interface';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(private apiService: ApiService) {
  }

  getSmsSentMonthlyReport():Observable<GetSmsSentMonthlyReportResponseInterface>{
    const url = `sendMessage/monthly`;
    return this.apiService.get(url,true);
  }
}
