import {Component, HostListener, Injectable, OnInit} from '@angular/core';

import {ConfigService} from './shared/config.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {AuthenticationService} from './auth/login/authentication.service';

import {Title} from '@angular/platform-browser';
import {SharedService} from './shared/service/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

@Injectable()
export class AppComponent implements OnInit {

  constructor(private authService: AuthenticationService,
              public configService: ConfigService,
              private sharedService : SharedService,
              private router: Router) {
  }

  title = 'WeibeSMS';
  isAuthenticated: boolean;
  showSpinner: boolean;
  public innerWidth: any;

  ngOnInit() {

    this.configService.authenticationChanged.subscribe(res => {
      this.isAuthenticated = res;
    });

    this.sharedService.spinnerStatusChanged.subscribe(res => {
      this.showSpinner = res;
    });

    this.onResize(null);
    this.innerWidth = window.innerWidth;

    this.isAuthenticated = this.authService.isAuthenticated();

    if (!this.authService.isAuthenticated()) {
      this.router.navigateByUrl('/auth/login');
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 768) {
      this.sharedService.sidebarMode = 'hidden';
    } else if (this.innerWidth >= 768 && this.innerWidth <= 991) {
      this.sharedService.sidebarMode = 'slim';
    } else {
      this.sharedService.sidebarMode = 'default';
    }
  }
}
