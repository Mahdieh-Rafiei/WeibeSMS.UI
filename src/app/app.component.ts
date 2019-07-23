import {Component, HostListener, Injectable, OnInit} from '@angular/core';

import {ConfigService} from './shared/config.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {AuthenticationService} from './auth/login/authentication.service';

import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

@Injectable()
export class AppComponent implements OnInit {

  constructor(private authService: AuthenticationService,
              public configService: ConfigService,
              private router: Router,
              private titleService: Title,
              private route: ActivatedRoute) {
  }

  title = 'WeibeSMS';
  isAuthenticated: boolean;

  public innerWidth: any;

  ngOnInit() {

    this.configService.authenticationChanged.subscribe(res => {
      this.isAuthenticated = res;
    });

    this.onResize(null);
    this.innerWidth = window.innerWidth;

    this.isAuthenticated = this.authService.isAuthenticated();
    // this.configService.sidebarStateChanged.subscribe(res => this.configService.sidebarMode = res);

    if (!this.authService.isAuthenticated()) {
      this.router.navigateByUrl('/auth/login');
    }

  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 768) {
      this.configService.sidebarMode = 'hidden';
    } else if (this.innerWidth >= 768 && this.innerWidth <= 991) {
      this.configService.sidebarMode = 'slim';
    }
    else {
      this.configService.sidebarMode = 'default';
    }
  }
}
