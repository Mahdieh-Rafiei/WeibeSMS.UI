import {EventEmitter, Injectable, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {ApiService} from '../shared/api.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  @Output() authenticationChanged: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private apiService:ApiService,
              private router:Router) { }

  isAuthenticated():boolean{
    return (localStorage.getItem('token') !== null);
  }

  loginViaUsernamePassword(username:string,password:string){
    this.apiService.post(`user/login`,{
      'username': username,
      'password':password
    },false).subscribe(res => {
      console.log(res.Data);
      localStorage.setItem('token',res.Data.Token);
      this.authenticationChanged.emit(true);
      this.router.navigateByUrl('');
    });
  }

  logOut(){
    localStorage.removeItem('token');
    this.authenticationChanged.emit(false);
    this.router.navigateByUrl('/login');
  }
}
