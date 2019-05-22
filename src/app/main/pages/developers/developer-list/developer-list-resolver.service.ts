import {Injectable} from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of, EMPTY} from 'rxjs';
import {mergeMap} from 'rxjs/operators';
import {DevelopersService} from '../developers.service';
import {DeveloperListInterface} from './models/developer-list.interface';

@Injectable({
  providedIn: 'root',
})
export class DeveloperListResolverService implements Resolve<DeveloperListInterface> {
  constructor(private ds: DevelopersService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<DeveloperListInterface> {

    return this.ds.getAllKeys().pipe(
      mergeMap(developersList => {
        if (developersList) {
          return of(developersList);
        } else {
          return EMPTY;
        }
      })
    );
  }
}
