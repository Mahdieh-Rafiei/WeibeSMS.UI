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

  sidebarMode:string='';

  constructor(private configService:ConfigService,
              private authService:AuthenticationService) { }

  ngOnInit() {

    if (window.innerWidth < 768 ){
      this.sidebarMode = 'hidden';
    } else if (window.innerWidth >= 768 && window.innerWidth < 991){
      this.sidebarMode = 'slim';
    }else {
      this.sidebarMode = 'default';
    }
    // this.configService.sidebarStateChanged.emit(this.sidebarMode);
  }


  changeSidebarState(){

    if (window.innerWidth < 768) {
      this.sidebarMode = this.sidebarMode == 'default' ? 'hidden' : 'default';
    }else {
      this.sidebarMode = this.sidebarMode == 'default' ? 'slim' : 'default';
    }

    this.configService.sidebarStateChanged.emit(this.sidebarMode);
  }

  logOut(){
    this.authService.logOut();
  }
}
