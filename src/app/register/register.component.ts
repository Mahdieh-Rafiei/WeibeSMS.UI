import { Component, OnInit } from '@angular/core';
import {RegisterService} from './register.service';
import {LoginService} from '../login/login.service';
import {Router} from '@angular/router';

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

  constructor(private registerService:RegisterService,
              private loginService:LoginService,
              private router:Router) { }

  ngOnInit() {
  }

  register(){
    this.registerService.saveInfo(this.firstName,this.lastName,this.email,this.userName,this.password)
      .subscribe(res=>{
        console.log(res);
        this.loginService.authenticationChanged.emit(true);
        this.router.navigateByUrl('');
      });
  }
}
