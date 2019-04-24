import {EventEmitter, Injectable, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {ApiService} from '../shared/api.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  @Output() authenticationChanged: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private apiService:ApiService) { }

  loginViaUsernamePassword(username:string,password:string){
    this.apiService.post(`user/login`,{
      'username': '9125867859',
      'password':'dc19db'
    }).subscribe(res => {
      console.log(res.Token);
      localStorage.setItem('token',res.Token);
      this.authenticationChanged.emit(true);
    });
  }

  signOut(){
    localStorage.removeItem('token');
    this.authenticationChanged.emit(false);
  }
}
