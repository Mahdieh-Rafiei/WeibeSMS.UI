import {Component, Injectable, OnInit} from '@angular/core';

import {ConfigService} from './shared/config.service';
import {Router} from '@angular/router';
import {AuthenticationService} from './login/authentication.service';
import {normalizeDebugBindingName} from '@angular/core/src/util/ng_reflect';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent implements OnInit{

  constructor(private authService:AuthenticationService
              ,private configService:ConfigService
              ,private router:Router
  ){  }

  title = 'WeibeSMS';
  isAuthenticated:boolean;
  isSidebarShown:boolean=true;

  ngOnInit(){
    this.configService.authenticationChanged.subscribe(res=>{
      this.isAuthenticated = res;
    });

    this.isAuthenticated = this.authService.isAuthenticated();
    this.configService.sidebarStateChanged.subscribe(res => this.isSidebarShown = res);

    if (!this.authService.isAuthenticated()){
      this.router.navigateByUrl('/login');
    }
  }
}
