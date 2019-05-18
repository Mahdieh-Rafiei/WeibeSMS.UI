import {Injectable} from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of, EMPTY} from 'rxjs';
import {mergeMap} from 'rxjs/operators';


import {ProfileService} from './profile.service';
import {ProfileGetInterface} from './models/profile-get.interface';

@Injectable({
  providedIn: 'root',
})
export class ProfileResolverService implements Resolve<ProfileGetInterface> {
  constructor(private ps: ProfileService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProfileGetInterface> {

    return this.ps.getProfile().pipe(
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
