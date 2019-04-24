import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }

  loginViaUsernamePassword(username:string,password:string):Observable<any>{
    return this.httpClient.post('https://localhost:43369/api/login',{});
  }

  signOut(){
    localStorage.removeItem('token');
  }
}
