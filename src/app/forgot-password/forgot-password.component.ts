import { Component, OnInit } from '@angular/core';
import {ForgotPasswordService} from './forgot-password.service';
import {Router} from '@angular/router';
import {AuthenticationService} from '../login/authentication.service';
import {ConfigService} from '../shared/config.service';


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
              private authService:AuthenticationService,
              private configService:ConfigService){ }

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

  onTxtCodeKeyUp(){
    if (this.verificationCode.length <5)
      return;

    this.verify();
  }

  verify(){
    this.forgotPasswordService.verify(this.mobile,this.verificationCode,this.key)
      .subscribe(res=> {
        console.log(res);
        this.step = 3;
        this.authService.setToken(res.Data.Token);
      });
  }

  changePassword(){
    debugger;
    this.forgotPasswordService.changePassword(this.password)
      .subscribe(res => {
        console.log(res);
        this.configService.authenticationChanged.emit(true);
        this.router.navigateByUrl('');
      });
  }
}
