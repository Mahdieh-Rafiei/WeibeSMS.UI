import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {UserAccountService} from '../../user-account.service';
import {mergeMap} from 'rxjs/operators';
import {EMPTY, Observable, of} from 'rxjs';
import {LoginLogInterface} from './models/login-log.interface';
import {PrivacyService} from '../privacy.service';

@Injectable({
  providedIn: 'root'
})

export class LoginLogResolverService implements Resolve<LoginLogInterface> {
  constructor(private ps: PrivacyService) {
  }

  resolve(rout: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<LoginLogInterface> {
    return this.ps.loginLog(1, 10, '',0,2147483647).pipe(
      mergeMap(loginLog => {
        if (loginLog) {
          return of(loginLog);
        } else {
          return EMPTY;
        }
      })
    );
  }
}

