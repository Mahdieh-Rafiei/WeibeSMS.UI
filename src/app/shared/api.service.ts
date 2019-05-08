import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs/index';
import {ConfigService} from './config.service';
import { map } from 'rxjs/operators';
import {catchError} from 'rxjs/internal/operators';
import {Router} from '@angular/router';
import {AuthenticationService} from '../login/authentication.service';
import {NotificationService} from './notification.service';
import {debug} from 'util';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  httpOptions: any  = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    observe: 'response'
  };

  constructor(private httpClient: HttpClient,
              private configService: ConfigService,
              private route: Router,
              private notificationService:NotificationService) { }

  get(url: string,needAuth:boolean): Observable<any> {
    let options = {
      'headers': this.httpOptions.headers.append('token',localStorage.getItem(this.configService.tokenKeyName)),
      'observe':this.httpOptions.observe
    };

    return this.httpClient.get( this.configService.baseUrl + url,needAuth ?  options : this.httpOptions).pipe(
      map((res: any) => res.body),
      catchError(err=> this.handleError(err,this.route,this.configService)));
  }

  post(url: string, payload: any,needAuth:boolean): Observable<any> {
    let options = {
      'headers': this.httpOptions.headers.append('token',localStorage.getItem(this.configService.tokenKeyName)),
      'observe':this.httpOptions.observe
    };

    return this.httpClient.post( this.configService.baseUrl + url, payload, needAuth ?  options : this.httpOptions).pipe(
      map((res: any) => res.body),
      catchError(err=> this.handleError(err,this.route,this.configService)));
  }


  put(url: string, payload: any,needAuth:boolean): Observable<any> {
    let options = {
      'headers': this.httpOptions.headers.append('token',localStorage.getItem(this.configService.tokenKeyName)),
      'observe':this.httpOptions.observe
    };

    return this.httpClient.put( this.configService.baseUrl + url, payload, needAuth ?  options : this.httpOptions).pipe(
      map((res: any) => res.body),
      catchError(err=> this.handleError(err,this.route,this.configService)));
  }

  delete(url: string,payload:any,needAuth:boolean): Observable<any> {
    let options = {
      'headers':  this.httpOptions.headers,
      'observe':this.httpOptions.observe,
      'body':null
    };

    if (needAuth){
      options.headers = options.headers.append('token',localStorage.getItem(this.configService.tokenKeyName));
    }

    if (payload){
      options.body = payload
    }

    return this.httpClient.delete( this.configService.baseUrl + url ,options).pipe(
      map((res: any) => res.body),
      catchError(err=> this.handleError(err,this.route,this.configService)));
  }

  handleError(error,router:Router,configService:ConfigService) {
    debugger;
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {

      errorMessage = `Error: ${error.error.Message}`;
    } else {
      // server-side error
      if (error.status === 401 || error.status === 403) {
        localStorage.removeItem('jwt-sms');
        this.route.navigateByUrl('login');
         configService.authenticationChanged.emit(false);
      }
      errorMessage = `Status Code: ${error.status}\nMessage: ${error.message}\n `;
    }

    let errorCode = parseInt(error.error.Message);
    let errorNotificationMessage = configService.errorMessages.get(errorCode);
    this.notificationService.error(errorNotificationMessage,'Error');
    return throwError(errorMessage);
  }
}
