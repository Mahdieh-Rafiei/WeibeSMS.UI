import { Component, OnInit } from '@angular/core';
import {ConfigService} from "../../../shared/config.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private configService: ConfigService,) { }

  ngOnInit() {
  }

}
