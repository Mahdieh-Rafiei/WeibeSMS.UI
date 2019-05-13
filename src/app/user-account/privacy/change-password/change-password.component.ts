import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {NotificationService} from '../../../shared/notification.service';
import {UtilityService} from '../../../shared/utility.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  oldPassword:string='';
  newPassword:string='';
  confirmPassword:string='';

  constructor(private userService:UserService,
              private notificationService:NotificationService,
              private utilityService:UtilityService,
              private router:Router) { }

  ngOnInit() {
  }

  changePassword(){

    debugger;
    //TODO : move password validation to utility service
    if (this.oldPassword.length == 0){
      this.notificationService.error('Please enter your current password!','');
      return;
    }

    if (this.newPassword != this.confirmPassword){
      this.notificationService.error('The password confirmation does not match!','');
      return;
    }

    if(this.newPassword.length < 8){
      this.notificationService.error('Password should has at least 8 characters','');
      return;
    }

    if(!this.utilityService.hasCapitalLetter(this.newPassword)){
      this.notificationService.error('Password should has at least 1 capital letter!','');
      return;
    }

    if(!this.utilityService.hasLowercaseLetter(this.newPassword)){
      this.notificationService.error('Password should has at least 1 lowercase letter!','');
      return;
    }

    if (!this.utilityService.hasDigit(this.newPassword)){
      this.notificationService.error('Password should has at least 1 digit letter!','');
      return;
    }

    this.userService.changePassword(this.oldPassword,this.newPassword)
      .subscribe(res=>{
        console.log(res);
        this.notificationService.success('Password changed successfully','');
        this.router.navigateByUrl('');
      });
  }
}
