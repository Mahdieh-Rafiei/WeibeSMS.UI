import {Component, Injectable, Input, OnInit} from '@angular/core';
import {LoginService} from './login/login.service';
import {debug} from 'util';
import {TopNavComponent} from './top-nav/top-nav.component';
import {ConfigService} from './shared/config.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent implements OnInit{

  constructor(private loginService:LoginService
              ,private configService:ConfigService
              ,private router:Router
  ){  }

  title = 'WhiteSmsML';
  isAuthenticated:boolean;
  isSidebarShown:boolean=true;

  ngOnInit(){
    this.loginService.authenticationChanged.subscribe(res=>{
      this.isAuthenticated = res;
    });

    this.isAuthenticated = this.loginService.isAuthenticated();
    this.configService.sidebarStateChanged.subscribe(res => this.isSidebarShown = res);

    if (!this.loginService.isAuthenticated()){
      this.router.navigateByUrl('/login');
    }
  }

}
