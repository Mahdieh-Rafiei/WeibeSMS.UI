import {Injectable} from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of, EMPTY} from 'rxjs';
import {mergeMap} from 'rxjs/operators';
import {DefinitionService} from './definition.service';
import {DefinitionInterface} from './models/definition.interface';

@Injectable({
  providedIn: 'root',
})
export class DefinitionResolverService implements Resolve<DefinitionInterface> {
  constructor(private ds: DefinitionService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<DefinitionInterface> {

    return this.ds.getAllDefinitionScheduleEvent().pipe(
      mergeMap(definition => {
        if (definition) {
          return of(definition);
        } else {
          return EMPTY;
        }
      })
    );
  }
}
