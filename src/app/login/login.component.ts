import { Component, OnInit } from '@angular/core';
import {LoginService} from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]
})
export class LoginComponent implements OnInit {

  username:string='';
  password:string='';
  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

  login(){
    this.loginService.loginViaUsernamePassword(this.username,this.password)
  }
}
