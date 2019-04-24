import {Component, Injectable, Input, OnInit} from '@angular/core';
import {LoginService} from './login/login.service';
import {debug} from 'util';
import {TopNavComponent} from './top-nav/top-nav.component';
import {ConfigService} from './shared/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent implements OnInit{

  constructor(private loginService:LoginService,private topNavComponent:TopNavComponent
              ,private configService:ConfigService
  ){  }

  title = 'WhiteSmsML';
  isAuthenticated:boolean=false;
  isSidebarShown:boolean=true;

  ngOnInit(){
    this.loginService.authenticationChanged.subscribe(res=>{
      this.isAuthenticated = res;
    });

    this.configService.sidebarStateChanged.subscribe(res => this.isSidebarShown = res);
  }

}
