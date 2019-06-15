import {Injectable} from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of, EMPTY} from 'rxjs';
import {mergeMap} from 'rxjs/operators';
import {BillingService} from '../billing.service';
import {BillindAddressResponseInterface} from './models/billind-address-response.interface';

@Injectable({
  providedIn: 'root',
})
export class BillingAddressResolverService implements Resolve<BillindAddressResponseInterface> {
  constructor(private bs: BillingService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<BillindAddressResponseInterface> {

    return this.bs.getAddress().pipe(
      mergeMap(billingAddress => {
        if (billingAddress) {
          return of(billingAddress);
        } else {
          return EMPTY;
        }
      })
    );
  }
}
