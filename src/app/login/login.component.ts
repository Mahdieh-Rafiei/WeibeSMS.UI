import { Component, OnInit } from '@angular/core';
import {RegisterService} from '../register/register.service';
import {Router} from '@angular/router';
import {AuthenticationService} from './authentication.service';
import {NotificationService} from '../shared/notification.service';
import _ from 'node_modules/lodash/lodash.js';
import {UtilityService} from '../shared/utility.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  isLoginMode:boolean=true;
  verificationCodeSent:boolean=false;
  mobile:string='';
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
      this.notificationService.error('username cant be null!','');
      return;
    }

    if (this.password.length == 0){
      this.notificationService.error('password cant be null!','');
      return;
    }
    this.authService.loginViaUsernamePassword(this.username,this.password);
  }

  onMobileKeyDown(e){
    let numbers = [8,37,39,46,96,97,98,99,100,101,102,103,104,105];

    let isForbidden = _.indexOf(numbers,e.keyCode) < 0;

    if (isForbidden)
      e.preventDefault();
  }

  sendVerificationCode(){
    this.registerService.sendVerificationCode(this.mobile.toString()).subscribe((res)=>
    {
      this.notificationService.success('Verification code sent successfully','');
      console.log(res.Data);
      this.verificationCodeSent = true;
      this.registrationKey = res.Data.RegistrationKey;
    });
  }

  verify(){
    this.registerService.verifyMobile(this.registrationKey,this.mobile.toString(),this.verificationCode).subscribe((res) =>
    {
      console.log(res.Data);
      this.authService.setTempToken(res.Data.Token);
      this.router.navigateByUrl('/register');
    })
  }
}
