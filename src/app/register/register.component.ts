import { Component, OnInit } from '@angular/core';
import {RegisterService} from './register.service';
import {Router} from '@angular/router';
import {AuthenticationService} from '../login/authentication.service';
import {ConfigService} from '../shared/config.service';
import {NotificationService} from '../shared/notification.service';
import {UtilityService} from '../shared/utility.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  firstName:string;
  lastName:string;
  userName:string;
  password:string;
  email:string;
  confirmPassword:string;

  constructor(private registerService:RegisterService,
              private authService:AuthenticationService,
              private router:Router,
              private configService:ConfigService,
              private notificationService:NotificationService,
              private utilityService:UtilityService) { }

  ngOnInit() {
  }

  register(){
    if (this.firstName.length == 0)
      this.notificationService.error('First name is required!','');

    if (this.lastName.length == 0){
      this.notificationService.error('Last name is required!','');
      return;
    }

    if(this.userName.length < 6){
      this.notificationService.error('User name should has at least 6 characters','');
      return;
    }


    if(this.password.length < 8){
      this.notificationService.error('Password should has at least 8 characters','');
      return;
    }

    if(!this.utilityService.hasCapitalLetter(this.password)){
      this.notificationService.error('Password should has at least 1 capital letter!','');
      return;
    }

    if(!this.utilityService.hasLowercaseLetter(this.password)){
      this.notificationService.error('Password should has at least 1 lowercase letter!','');
      return;
    }

    if (!this.utilityService.hasDigit(this.password)){
      this.notificationService.error('Password should has at least 1 digit letter!','');
      return;
    }

    this.registerService.saveInfo(this.firstName,this.lastName,this.email,this.userName,this.password)
      .subscribe(res=>{
        console.log(res);
        this.authService.setToken('');
        this.configService.authenticationChanged.emit(true);
        this.router.navigateByUrl('');
      });
  }

  confirmPasswordOut(){
    if (this.password != this.confirmPassword)
      this.notificationService.warning('Confirm value is not correct!');
  }
}
