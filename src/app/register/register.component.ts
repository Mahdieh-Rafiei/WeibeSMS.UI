import { Component, OnInit } from '@angular/core';
import {RegisterService} from './register.service';
import {Router} from '@angular/router';
import {AuthenticationService} from '../login/authentication.service';

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
              private authService:AuthenticationService,
              private router:Router) { }

  ngOnInit() {
  }

  register(){
    this.registerService.saveInfo(this.firstName,this.lastName,this.email,this.userName,this.password)
      .subscribe(res=>{
        console.log(res);
        this.authService.authenticationChanged.emit(true);
        this.router.navigateByUrl('');
      });
  }
}
