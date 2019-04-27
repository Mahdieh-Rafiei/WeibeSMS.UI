import {Component, EventEmitter, Injectable, OnInit, Output} from '@angular/core';
import {ConfigService} from '../shared/config.service';
import {LoginService} from '../login/login.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
@Injectable()
export class TopNavComponent implements OnInit {

  isSidebarShown:boolean=true;
  constructor(private configService:ConfigService,
              private loginService:LoginService) { }

  ngOnInit() {
  }

  changeSidebarState(){
    this.isSidebarShown = !this.isSidebarShown;
    this.configService.sidebarStateChanged.emit(this.isSidebarShown);
  }

  logOut(){
    this.loginService.logOut();
  }
}
