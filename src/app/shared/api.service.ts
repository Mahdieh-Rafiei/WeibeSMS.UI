import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs/index';
import {ConfigService} from './config.service';
import { map } from 'rxjs/operators';
import {catchError} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  httpOptions: any  = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    observe: 'response'
  };

  constructor(private httpClient: HttpClient,
              private configService: ConfigService) { }

  get(url: string,needAuth:boolean): Observable<any> {
    let options = {
      'headers': this.httpOptions.headers.append('token',localStorage.getItem(this.configService.tokenKeyName)),
      'observe':this.httpOptions.observe
    };

    return this.httpClient.get( this.configService.baseUrl + url,needAuth ?  options : this.httpOptions).pipe(
      map((res: any) => res.body),
      catchError(this.handleError));
  }

  post(url: string, payload: any,needAuth:boolean): Observable<any> {
    let options = {
      'headers': this.httpOptions.headers.append('token',localStorage.getItem(this.configService.tokenKeyName)),
      'observe':this.httpOptions.observe
    };

    return this.httpClient.post( this.configService.baseUrl + url, payload, needAuth ?  options : this.httpOptions).pipe(
      map((res: any) => res.body),
      catchError( this.handleError));
  }

  put(url: string, payload: any,needAuth:boolean): Observable<any> {
    let options = {
      'headers': this.httpOptions.headers.append('token',localStorage.getItem(this.configService.tokenKeyName)),
      'observe':this.httpOptions.observe
    };

    return this.httpClient.put( this.configService.baseUrl + url, payload, needAuth ?  options : this.httpOptions).pipe(
      map((res: any) => res.body),
      catchError( this.handleError));
  }

  delete(url: string,needAuth:boolean): Observable<any> {
    let options = {
      'headers': this.httpOptions.headers.append('token',localStorage.getItem(this.configService.tokenKeyName)),
      'observe':this.httpOptions.observe
    };

    return this.httpClient.delete( this.configService.baseUrl + url ,needAuth ?  options : this.httpOptions ).pipe(
      map((res: any) => res.body),
      catchError(this.handleError));
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      if (error.status === 401 || error.status === 403) {
        localStorage.removeItem(this.configService.tokenKeyName);
      }
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
