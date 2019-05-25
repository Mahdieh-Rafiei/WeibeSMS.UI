import {Injectable} from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of, EMPTY} from 'rxjs';
import {mergeMap} from 'rxjs/operators';
import {DevelopersService} from '../developers.service';
import {DeveloperInterface} from './models/developer.interface';

@Injectable({
  providedIn: 'root',
})
export class DeveloperResolverService implements Resolve<DeveloperInterface> {
  id: number;

  constructor(private ds: DevelopersService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<DeveloperInterface> {
    this.id = route.params['id'];

    return this.ds.getKey(this.id).pipe(
      mergeMap(keyData => {
        if (keyData) {
          return of(keyData);
        } else {
          return EMPTY;
        }
      })
    );
  }
}
