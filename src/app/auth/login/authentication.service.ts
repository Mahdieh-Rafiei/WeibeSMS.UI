import {Injectable} from '@angular/core';
import {ApiService} from '../../shared/api.service';
import {Router} from '@angular/router';
import {ConfigService} from '../../shared/config.service';
import {LoginInterface} from './models/login.interface';
import {LoginResponseInterface} from './models/login-response.interface';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  constructor(private apiService: ApiService,
              private router: Router,
              private configService: ConfigService) {
  }

  isAuthenticated(): boolean {
    return (localStorage.getItem(this.configService.tokenKeyName) !== null);
  }

  setToken(token: string) {
    localStorage.setItem(this.configService.tokenKeyName, `Bearer ${token}`);
  }

  loginViaUsernamePassword(data): Observable<LoginResponseInterface> {
    const url = `user/login`;
    return this.apiService.post<LoginInterface>(url, data, false);
  }

  logOut() {
    localStorage.removeItem(this.configService.tokenKeyName);
    this.configService.authenticationChanged.emit(false);
    this.router.navigateByUrl('/login');
  }

  deleteAccount() {
    const url = `user/delete`;
    return this.apiService.delete(url, null,true);
  }
}
