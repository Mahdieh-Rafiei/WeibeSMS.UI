import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ConfigService} from '../shared/config.service';

@Component({
  selector: 'app-pages',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MainComponent implements OnInit {

  constructor(public configService: ConfigService) {
  }

  ngOnInit() {
  }

}
