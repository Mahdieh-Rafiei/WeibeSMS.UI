import {Component, OnInit} from '@angular/core';
import {BillingService} from '../billing.service';
import {PaymentInterface} from './models/payment.interface';
import {TableConfigInterface} from '../../../../shared/component/table/models/table-config.interface';
import {PagingModel} from '../../../../shared/component/table/models/paging-model';
import {FilterDataModel} from '../../../../shared/component/filter/filter-data-model';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  phrase = '';

  tableConfig: TableConfigInterface = {
    pagingModel: new PagingModel(),
    headerNames: ['Id', 'Description', 'Payment types', 'Status', 'Amount', 'Vat', 'Total', 'Date time'],
    rowColumnsConfig: [],
  };

  filterDataModel = new FilterDataModel();

  payments: PaymentInterface[];

  constructor(private billingService: BillingService) {
  }

  ngOnInit() {
    this.filterDataModel.fromToDate = true;
    this.filterDataModel.paymentTypes = [
      {value: 0, title: 'All'},
      {value: 1, title: 'Credit'},
      {value: 2, title: 'Other'}
    ];
    this.billingService.mode = 'payment';
    this.getPayments();
    this.generateRowColumns();
  }

  getPayments() {
    this.billingService.getPaymentLogs(
      this.tableConfig.pagingModel.pageNumber,
      this.tableConfig.pagingModel.pageSize,
      this.filterDataModel.fromDate,
      this.filterDataModel.toDate,
      this.filterDataModel.paymentTypeSelected,
      this.filterDataModel.paidPayments,
      this.phrase)
      .subscribe(res => {
        this.payments = res.data.items;
        this.tableConfig.pagingModel.totalItemsCount = res.data.totalItemsCount;
        this.payments.forEach(p => {
          p.type = p.type == '1' ? 'Credit' : 'Others';
        });
      });
  }

  export(e) {

    const ids: number[] = [];
    if (e.target.value == 1) {
      this.payments.forEach(p => {
        ids.push(p.id);
      });
    }
    this.billingService.getPaymentLogsExcel(ids)
      .subscribe(res => {
        window.open(res.data, '_blank');
      });
  }

  getData(event) {
    this.phrase = event;
    this.getPayments();
  }

  getFilterData(e: FilterDataModel) {
    this.tableConfig.pagingModel.pageSize = e.pageSize;
    this.getPayments();
  }

  generateRowColumns() {
    this.tableConfig.rowColumnsConfig.push({propertyName: 'description'});
    this.tableConfig.rowColumnsConfig.push({propertyName: 'type'});
    this.tableConfig.rowColumnsConfig.push({
      buttonConfig: {
        classSelector: (item: PaymentInterface) => {
          return item.isPaid === true ? 'green-btn' : 'yellow-btn';
        },
        innerHTMLSelector: (item: PaymentInterface) => {
          return item.isPaid ? 'Succeeded' : 'Failed';
        },
        action: null
      }
    });

    this.tableConfig.rowColumnsConfig.push({propertyName: 'amount', sign: '€'});
    this.tableConfig.rowColumnsConfig.push({propertyName: 'vat', sign: '%'});
    this.tableConfig.rowColumnsConfig.push({propertyName: 'total', sign: '€'});
    this.tableConfig.rowColumnsConfig.push({propertyName: 'creationDateTime', isDateTime: true});
  }
}
