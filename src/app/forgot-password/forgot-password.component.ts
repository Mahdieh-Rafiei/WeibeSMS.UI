import { Component, OnInit } from '@angular/core';
import {ForgotPasswordService} from './forgot-password.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})

export class ForgotPasswordComponent implements OnInit {

  step:number=0;
  mobile:string;
  verificationCode:string;
  key:string;
  password:string;
  confirmPassword:string;

  constructor(private forgotPasswordService:ForgotPasswordService) { }

  ngOnInit() {
  }

  sendVerificationCode(){
    this.forgotPasswordService.sendVerificationCode(this.mobile)
      .subscribe(res=>{
        console.log(res);
      })
  }

  verify(){
    this.forgotPasswordService.verify(this.mobile,this.verificationCode,this.key)
      .subscribe(res=> console.log(res));
  }

  changePassword(){
    this.forgotPasswordService.changePassword(this.password)
      .subscribe(res => console.log(res));
  }
}
