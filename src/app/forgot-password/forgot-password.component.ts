import { Component, OnInit } from '@angular/core';
import {ForgotPasswordService} from './forgot-password.service';
import {Route, Router} from '@angular/router';
import {LoginService} from '../login/login.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})

export class ForgotPasswordComponent implements OnInit {

  step:number=1;
  mobile:string;
  verificationCode:string;
  key:string;
  password:string;
  confirmPassword:string;

  constructor(private forgotPasswordService:ForgotPasswordService,
              private router:Router,
              private loginService:LoginService){ }

  ngOnInit() {
  }

  sendVerificationCode(){
    this.forgotPasswordService.sendVerificationCode(this.mobile)
      .subscribe(res=>{
        console.log(res);
        this.step = 2;
        this.key = res.Data.RegistrationKey
      })
  }

  verify(){
    this.forgotPasswordService.verify(this.mobile,this.verificationCode,this.key)
      .subscribe(res=> {
        console.log(res);
        this.step = 3;
        localStorage.setItem('token',res.Data.Token);
      });
  }

  onVerifyCodeKeyUp(){
    if(this.verificationCode.length == 5){
      this.verify();
    }
  }

  changePassword(){
    this.forgotPasswordService.changePassword(this.password)
      .subscribe(res => {
        console.log(res);
        this.loginService.authenticationChanged.emit(true);
        this.router.navigateByUrl('');
      });
  }
}
