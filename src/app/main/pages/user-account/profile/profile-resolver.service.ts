import {Injectable} from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of, EMPTY} from 'rxjs';
import {mergeMap} from 'rxjs/operators';

import {ProfileGetInterface} from './models/profile-get.interface';
import {UserAccountService} from '../user-account.service';

@Injectable({
  providedIn: 'root',
})
export class ProfileResolverService implements Resolve<ProfileGetInterface> {
  constructor(private uas: UserAccountService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProfileGetInterface> {

    return this.uas.getProfile().pipe(
      mergeMap(profile => {
        if (profile) {
          return of(profile);
        } else {
          return EMPTY;
        }
      })
    );
  }
}
