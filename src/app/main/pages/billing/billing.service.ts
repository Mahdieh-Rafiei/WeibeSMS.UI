import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ApiService} from '../../../shared/api.service';
import {BillingAddressInterface} from './billing-address/models/billing-address.interface';
import {BillindAddressResponseInterface} from './billing-address/models/billind-address-response.interface';
import {CreditTransactionResponseInterface} from './transaction-log/models/credit-transaction-response.interface';
import {InvoiceResponseInterface} from './invoice-list/models/invoice-response.interface';

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

  getTransactionLogs(pageNumber: number, pageSize: number, description: string, fromDate: number,
                     toDate: number, type: number): Observable<CreditTransactionResponseInterface> {

    const url = `CreditTransaction?pageSize=${pageSize}&pageNumber=${pageNumber}`;
    return this.apiService.get(url, true);
  }

  getInvoices(pageNumber:number,pageSize:number,fromDate:number,toDate:number) : Observable<InvoiceResponseInterface>{
    // const url = `Invoice?pageNumber=${pageNumber}&pageSize=${pageSize}&fromDate=${fromDate}&toDate=${toDate}`;
    const url = `Invoice?pageNumber=${pageNumber}&pageSize=${pageSize}`;
    return this.apiService.get(url,true);
  }

  getPaymentLogs(){

  }
}
