import {Component, EventEmitter, Injectable, OnInit, Output} from '@angular/core';
import {ConfigService} from '../shared/config.service';
import {AuthenticationService} from '../login/authentication.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
@Injectable()
export class TopNavComponent implements OnInit {

  isSidebarShown:boolean=true;
  constructor(private configService:ConfigService,
              private authService:AuthenticationService) { }

  ngOnInit() {
  }

  changeSidebarState(){
    this.isSidebarShown = !this.isSidebarShown;
    this.configService.sidebarStateChanged.emit(this.isSidebarShown);
  }

  logOut(){
    this.authService.logOut();
  }
}
