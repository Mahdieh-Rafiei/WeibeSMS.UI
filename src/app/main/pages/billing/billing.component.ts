import { Component, OnInit } from '@angular/core';
import {BillingService} from './billing.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {

  constructor(private billingService: BillingService) { }

  ngOnInit() {
  }

}
