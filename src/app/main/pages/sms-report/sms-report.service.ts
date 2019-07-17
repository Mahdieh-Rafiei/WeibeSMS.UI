import {Injectable} from '@angular/core';
import {ApiService} from '../../../shared/api.service';
import {Observable} from 'rxjs';
import {GetSmsReportsExcelResponse} from './models/get-sms-reports-excel-response';
import {GetAllSmsReportsResponse} from './models/get-all-sms-reports-response';
import {GetSmsDetailReportResponse} from './models/get-sms-detail-report-response';
import {SmsReport} from './models/sms-report';

@Injectable({
  providedIn: 'root'
})

export class SmsReportService {

  selectedSms: SmsReport;

  constructor(private apiService: ApiService) {
  }

  getAllReports(pageSize: number, pageNumber: number, searchValue: string,
                sendType: number, sendStatus: number, fromDate: number,
                toDate: number): Observable<GetAllSmsReportsResponse> {

    let url = `SendMessage?pageNumber=${pageNumber}&pageSize=${pageSize}
    &searchValue=${searchValue}&fromDate=${fromDate}&toDate=${toDate}`;

    if (sendType && sendType != 0) {
      url += `&sendType=${sendType}`;
    }

    if (sendStatus && sendStatus != 0) {
      url += `&sendStatus=${sendStatus}`;
    }

    return this.apiService.get(url, true);
  }

  getSmsReportsExcel(ids: Map<boolean, number[]>): Observable<GetSmsReportsExcelResponse> {
    const url = 'SendMessage/Excel';
    return this.apiService.post(url, ids, true);
  }

  getSmsDetailReport(id: number, pageSize: number, pageNumber: number, searchValue: string,
                     isBulk: boolean): Observable<GetSmsDetailReportResponse> {

    const url = `SendMessage/${id}?pageNumber=${pageNumber}&pageSize=${pageSize}
    &searchValue=${searchValue}&isBulk=${isBulk}`;

    return this.apiService.get(url, true);
  }

  getSmsDetaiReportsExcel(masterId: number, isBulk: boolean, ids: number[]): Observable<GetSmsReportsExcelResponse> {
    const url = `SendMessage/Excel/${masterId}/${isBulk}`;
    return this.apiService.post(url, ids, true);
  }

  removeSmsReport(): Observable<any> {
    const url = `SendMessage/${this.selectedSms.id}?isBulk=${this.selectedSms.isBulk}`;
    return this.apiService.delete(url, null, true);
  }
}
