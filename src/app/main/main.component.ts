import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {NavigationService} from '../shared/component/animation/navigation.service';
import {routerTransition} from '../shared/component/animation/animations';
import {ConfigService} from '../shared/config.service';
import {DataService} from '../shared/service/data.service';


@Component({
  selector: 'app-pages',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    routerTransition(),
  ]
})
export class MainComponent implements OnInit {
    // @ViewChild('sidenav') sidenav: MatSidenav;
    //
    // close() {
    //     this.sidenav.close();
    // }

  constructor(public configService: ConfigService,
              private navigationService: NavigationService,
              private ds: DataService) {
  }
    ngOnInit() {
        // this.ds.showHelp$.subscribe(res => {
        //     if (res) {
        //         this.open();
        //     } else {
        //         this.close();
        //     }
        // });
    }

    // open() {
    //     this.sidenav.open();
    // }
  getRouteAnimation(outlet) {
    return this.navigationService.animationValue;
  }
}
