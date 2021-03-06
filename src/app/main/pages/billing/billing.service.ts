import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ApiService} from '../../../shared/api.service';
import {BillingAddressInterface} from './billing-address/models/billing-address.interface';
import {BillindAddressResponseInterface} from './billing-address/models/billind-address-response.interface';
import {CreditTransactionResponseInterface} from './transaction-log/models/credit-transaction-response.interface';
import {InvoiceResponseInterface} from './invoice-list/models/invoice-response.interface';
import {PaymentResponseInterface} from './payment/models/payment-response.interface';
import {CreditTransactionExcelResponseInterface} from './transaction-log/models/credit-transaction-excel-response.interface';

@Injectable({
  providedIn: 'root'
})

export class BillingService {

  constructor(private apiService: ApiService) {
  }

  mode = 'invoice';

  getAddress(): Observable<BillindAddressResponseInterface> {
    const url = `UserBilling`;
    return this.apiService.get(url, true);
  }

  modifyAddress(payload): Observable<any> {
    const url = `UserBilling`;
    return this.apiService.put<BillingAddressInterface>(url, payload, true);
  }

  getTransactionLogs(pageNumber: number, pageSize: number, fromDate: number,
                     toDate: number, type: number, phrase: string): Observable<CreditTransactionResponseInterface> {

    let url = `CreditTransaction?pageSize=${pageSize}&pageNumber=${pageNumber}&searchValue=${phrase}&fromDate=${fromDate}&toDate=${toDate}`;
    if (type && type != 0) {
      url += `&type=${type}`;
    }
    return this.apiService.get(url, true);
  }

  getInvoices(pageNumber: number, pageSize: number, phrase: string, fromDate: number, toDate: number): Observable<InvoiceResponseInterface> {
    const url = `Invoice?pageNumber=${pageNumber}&pageSize=${pageSize}&searchValue=${phrase}&fromDate=${fromDate}&toDate=${toDate}`;
    return this.apiService.get(url, true);
  }

  getPaymentLogs(pageNumber: number, pageSize, fromDate: number,
                 toDate: number, paymentType: number, isPaid: any, phrase: string): Observable<PaymentResponseInterface> {
    let url = `Payment?pageNumber=${pageNumber}&pageSize=${pageSize}&searchValue=${phrase}
      &fromDate=${fromDate}&toDate=${toDate}`;


    if (paymentType && paymentType != 0){
      url += `&paymentType=${paymentType}`;
    }

    if (isPaid && isPaid != 0){
      url += `&isPaid=${isPaid}`;
    }

    return this.apiService.get(url, true);
  }

  getTransactionLogsExcel(ids: number[]): Observable<CreditTransactionExcelResponseInterface> {
    const url = `CreditTransaction/excel`;
    return this.apiService.post(url, ids, true);
  }

  getPaymentLogsExcel(ids: number[]): Observable<any> {
    const url = `Payment/excel`;
    return this.apiService.post(url, ids, true);
  }
}
