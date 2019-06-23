import {Component, OnInit} from '@angular/core';
import {BillingService} from '../billing.service';
import {InvoiceInterface} from './models/invoice.interface';
import {GetInvocesModelInterface} from './models/get-invoces-model.interface';
import {FilterDataInterface} from '../../../../shared/component/filter/filter-data.interface';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent implements OnInit {
  phrase = '';

  pageNumber=1;
  invoices: InvoiceInterface[];
  totalItems: number;

  filterData : FilterDataInterface  = {
    fromToDate: true,
    fromDate:0,
    pageSize:10,
    toDate:2147483647
  };

  constructor(private billingService: BillingService) {
  }

  ngOnInit() {
    this.getInvoices();
  }

  getInvoices() {
    this.billingService.getInvoices(this.pageNumber, this.filterData.pageSize,
      this.phrase,
      this.filterData.fromDate,
      this.filterData.toDate
    )
      .subscribe(res => {
        this.invoices = res.data.items;
        this.totalItems = res.data.totalItemsCount;
      });
  }

  doPaging(e) {
    this.pageNumber = e;
    this.getInvoices();
  }

  getData(event) {
    this.phrase = event;
    this.getInvoices();
  }

  getFilterData(event){
    this.getInvoices();
  }
}
