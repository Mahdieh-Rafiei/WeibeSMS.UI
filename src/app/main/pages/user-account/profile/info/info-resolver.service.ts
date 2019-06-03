import {Injectable} from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of, EMPTY} from 'rxjs';
import {mergeMap} from 'rxjs/operators';

import {InfoGetInterface} from './models/info-get.interface';
import {UserAccountService} from '../../user-account.service';

@Injectable({
  providedIn: 'root',
})
export class InfoResolverService implements Resolve<InfoGetInterface> {
  constructor(private uas: UserAccountService) {
  }

  resolve(rout: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<InfoGetInterface> {
    return this.uas.getProfile().pipe(
      mergeMap(info => {
        if (info) {
          return of(info);
        } else {
          return EMPTY;
        }
      })
    );
  }
}

