import {Injectable} from '@angular/core';
import {ApiService} from '../../../shared/api.service';
import {Observable} from 'rxjs';
import {GetSmsReportsExcelResponse} from './models/get-sms-reports-excel-response';
import {GetAllSmsReportsResponse} from './models/get-all-sms-reports-response';

@Injectable({
  providedIn: 'root'
})

export class SmsReportService {

  constructor(private apiService: ApiService) {
  }

  getAllReports(pageSize: number, pageNumber: number, searchValue: string,
                sendType: number, sendStatus: number, fromDate: number,
                toDate: number) : Observable<GetAllSmsReportsResponse> {

    let url = `SendMessage?pageNumber=${pageNumber}&pageSize=${pageSize}
    &searchValue=${searchValue}&fromDate=${fromDate}&toDate=${toDate}
    &sendType=${sendType}`;

    if (sendStatus && sendStatus != 0) {
      url += `&sendStatus=${sendStatus}`;
    }

    return this.apiService.get(url, true);
  }

  getSmsReportsExcel(ids: number[]): Observable<GetSmsReportsExcelResponse> {
    const url = '';
    return this.apiService.post(url, null, true);
  }
}
