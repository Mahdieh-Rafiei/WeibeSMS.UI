import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NavigationService} from '../shared/component/animation/navigation.service';
import {routerTransition} from '../shared/component/animation/animations';
import {ConfigService} from '../shared/config.service';

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

  constructor(public configService: ConfigService,
              private navigationService: NavigationService) {
  }

  ngOnInit() {
  }

  getRouteAnimation(outlet) {
    return this.navigationService.animationValue;
  }
}
