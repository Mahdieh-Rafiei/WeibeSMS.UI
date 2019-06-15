import {Component, OnInit} from '@angular/core';
import {BillingService} from '../billing.service';
import {InvoiceInterface} from './models/invoice.interface';
import {GetInvocesModelInterface} from './models/get-invoces-model.interface';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent implements OnInit {

  getInvoiceModel: GetInvocesModelInterface = {
    fromDate: null,
    pageNumber: 1,
    pageSize: 10,
    toDate: null
  };

  invoices: InvoiceInterface[];
  totalItems: number;

  constructor(private billingService: BillingService) {
  }

  ngOnInit() {
    this.getInvoices();
  }

  getInvoices() {
    this.billingService.getInvoices(this.getInvoiceModel.pageNumber,
      this.getInvoiceModel.pageSize,
      this.getInvoiceModel.fromDate,
      this.getInvoiceModel.toDate)
      .subscribe(res => {
        this.invoices = res.data.items;
        this.totalItems = res.data.totalItemsCount;
      });
  }

  doPaging(e) {
    this.getInvoiceModel.pageNumber = e;
    this.getInvoices();
  }
}
