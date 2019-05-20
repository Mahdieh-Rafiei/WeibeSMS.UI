import {Injectable} from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of, EMPTY} from 'rxjs';
import {mergeMap} from 'rxjs/operators';
import {BillingService} from '../billing.service';

@Injectable({
  providedIn: 'root',
})
export class BillingAddressResolverService implements Resolve<any> {
  constructor(private bs: BillingService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

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
