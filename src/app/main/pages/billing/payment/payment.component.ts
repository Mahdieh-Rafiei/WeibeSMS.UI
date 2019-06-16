import {Component, OnInit} from '@angular/core';
import {BillingService} from '../billing.service';
import {PaymentInterface} from './models/payment.interface';
import {GetPaymentsModel} from './models/get-payments-model';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  totalItems: number;
  getPaymentsModel: GetPaymentsModel = {
    description: '',
    fromDate: null,
    isPaid: null,
    pageNumber: 1,
    pageSize: 10,
    toDate: null,
    type: null
  };

  payments: PaymentInterface[];

  constructor(private billingService: BillingService) {
  }

  ngOnInit() {
    this.getPayments();
  }

  getPayments() {
    this.billingService.getPaymentLogs(this.getPaymentsModel.pageNumber,
      this.getPaymentsModel.pageSize, this.getPaymentsModel.description,
      this.getPaymentsModel.fromDate, this.getPaymentsModel.toDate,
      this.getPaymentsModel.type,
      this.getPaymentsModel.isPaid)
      .subscribe(res => {
        this.payments = res.data.items;
        this.totalItems = res.data.totalItemsCount;
      });
  }

  doPaging(e) {
    this.getPaymentsModel.pageNumber = e;
    this.getPayments();
  }
}
