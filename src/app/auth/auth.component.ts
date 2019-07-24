import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {errorAnimation} from '../shared/component/animation/error-animation';
import {ConfigService} from '../shared/config.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  animations: [
    errorAnimation()
  ],
  encapsulation: ViewEncapsulation.None
})


export class AuthComponent implements OnInit {

  constructor(private configService: ConfigService) {
  }

  ngOnInit() {
  }
}
