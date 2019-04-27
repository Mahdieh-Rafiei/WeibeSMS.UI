import { Component, OnInit } from '@angular/core';
import {LoginService} from './login.service';
import {RegisterService} from '../register/register.service';
import {Router} from '@angular/router';
import {assertNumber} from '@angular/core/src/render3/assert';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  gettedCode:string;
  gettedKey:string;

  isLoginMode:boolean=true;
  verificationCodeSent:boolean=false;
  mobile:number;
  verificationCode:number;
  username:string='';
  password:string='';
  constructor(private loginService:LoginService,
              private registerService:RegisterService,
              private router :Router) { }

  ngOnInit() {
  }

  login(){
    this.loginService.loginViaUsernamePassword(this.username,this.password);
  }

  sendVerificationCode(){
    this.registerService.sendVerificationCode(this.mobile).subscribe((res)=>
    {
      console.log(res.Data);
      this.verificationCodeSent = true;
      this.gettedCode = res.Data.Code;
      this.gettedKey = res.Data.RegistrationKey;
    });
  }

  verify(){
    this.registerService.verifyMobile(this.gettedKey,this.mobile.toString(),this.gettedCode).subscribe((res) =>
    {
      console.log(res.Data);
      localStorage.setItem('token',res.Data.Token);
      this.router.navigateByUrl('/register');
    })
  }
}
