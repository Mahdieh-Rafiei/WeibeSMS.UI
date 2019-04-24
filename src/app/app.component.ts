import {Component, Injectable, Input, OnInit} from '@angular/core';
import {LoginService} from './login/login.service';
import {debug} from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent implements OnInit{

  constructor(private loginService:LoginService){  }

  ngOnInit(){
    this.loginService.authenticationChanged.subscribe(res=>{
      this.isAuthenticated = res;
    });
  }

  title = 'WhiteSmsML';
  isAuthenticated:boolean=false;
}
