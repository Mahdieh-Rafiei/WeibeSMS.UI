import {EventEmitter, Injectable, Output} from '@angular/core';
import {ApiService} from '../shared/api.service';
import {Router} from '@angular/router';
import {ConfigService} from '../shared/config.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  constructor(private apiService:ApiService,
              private router:Router,
              private configService:ConfigService) { }

  isAuthenticated():boolean{
    return (localStorage.getItem(this.configService.tokenKeyName) !== null);
  }

  isInRegisterMode():boolean{
    return (localStorage.getItem('tempToken') !== null);
  }

  setToken(token:string){
    localStorage.setItem(this.configService.tokenKeyName,token.length == 0 ? localStorage.getItem('tempToken') : token);
    localStorage.removeItem('tempToken');
  }

  setTempToken(tempToken:string){
    localStorage.setItem('tempToken',tempToken);
  }

  loginViaUsernamePassword(username:string,password:string){
    this.apiService.post(`user/login`,{
      'username': username,
      'password':password
    },false).subscribe(res => {
      console.log(res.Data);
      this.setToken(res.Data.Token);
      this.configService.authenticationChanged.emit(true);
      this.router.navigateByUrl('');
    });
  }

  logOut(){
    localStorage.removeItem(this.configService.tokenKeyName);
    this.configService.authenticationChanged.emit(false);
    this.router.navigateByUrl('/login');
  }
}
