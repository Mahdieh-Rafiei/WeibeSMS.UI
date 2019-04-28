import { Component, OnInit } from '@angular/core';
import {RegisterService} from '../register/register.service';
import {Router} from '@angular/router';
import {AuthenticationService} from './authentication.service';
import {NotificationService} from '../shared/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  isLoginMode:boolean=true;
  verificationCodeSent:boolean=false;
  mobile:string;
  verificationCode:string;
  username:string='';
  password:string='';
  registrationKey:string;

  constructor(private authService:AuthenticationService,
              private registerService:RegisterService,
              private notificationService:NotificationService,
              private router :Router) { }

  ngOnInit() {
  }

  login(){
    if (this.username.length == 0){
      this.notificationService.error('username is null');
      return;
    }

    if (this.password.length == 0){
      this.notificationService.error('password is null');
      return;
    }

    this.authService.loginViaUsernamePassword(this.username,this.password);
  }

  sendVerificationCode(){
    this.registerService.sendVerificationCode(this.mobile).subscribe((res)=>
    {
      console.log(res.Data);
      this.verificationCodeSent = true;
      this.registrationKey = res.Data.RegistrationKey;
    });
  }

  verify(){
    this.registerService.verifyMobile(this.registrationKey,this.mobile.toString(),this.verificationCode).subscribe((res) =>
    {
      console.log(res.Data);
      localStorage.setItem('token',res.Data.Token);
      this.authService.setToken(res.Data.Token);
      this.router.navigateByUrl('/register');
    })
  }
}
