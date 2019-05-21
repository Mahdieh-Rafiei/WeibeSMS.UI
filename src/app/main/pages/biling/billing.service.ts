import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ApiService} from '../../../shared/api.service';
import {BillingAddressInterface} from './billing-address/models/billing-address.interface';
import {BillindAddressResponseInterface} from './billing-address/models/billind-address-response.interface';

@Injectable({
  providedIn: 'root'
})

export class BillingService {

  constructor(private apiService: ApiService) {
  }

  getAddress(): Observable<BillindAddressResponseInterface> {
    const url = `UserBilling`;
    return this.apiService.get(url, true);
  }
  modifyAddress(payload): Observable<any> {
    const url = `UserBilling`;
    return this.apiService.put<BillingAddressInterface>(url, payload, true);
  }
}
