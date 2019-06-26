import {Component, OnInit} from '@angular/core';
import {BillingService} from '../billing.service';
import {PaymentInterface} from './models/payment.interface';
import {GetPaymentsModel} from './models/get-payments-model';
import {TableConfigInterface} from '../../../../shared/component/table/models/table-config.interface';
import {PagingModel} from '../../../../shared/component/table/models/paging-model';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  tableConfig: TableConfigInterface = {
    pagingModel: new PagingModel(),
    headerNames: ['Id', 'Description', 'Payment types', 'Status', 'Amount', 'Vat', 'Total', 'Date time'],
    rowColumnsConfig: [],
  };


  getPaymentsModel: GetPaymentsModel = {
    description: '',
    fromDate: null,
    isPaid: null,
    toDate: null,
    type: null,
    phrase: ''
  };

  payments: PaymentInterface[];

  constructor(private billingService: BillingService) {
  }

  ngOnInit() {
    this.getPayments();
    this.generateRowColumns();
  }

  getPayments() {
    this.billingService.getPaymentLogs(this.tableConfig.pagingModel.pageNumber,
      this.tableConfig.pagingModel.pageSize, this.getPaymentsModel.description,
      this.getPaymentsModel.fromDate, this.getPaymentsModel.toDate,
      this.getPaymentsModel.type,
      this.getPaymentsModel.isPaid,
      this.getPaymentsModel.phrase)
      .subscribe(res => {
        this.payments = res.data.items;
        this.tableConfig.pagingModel.totalItemsCount = res.data.totalItemsCount;
        this.payments.forEach(p => {
          p.type = p.type == '1' ? 'Credit' : 'Others';
        });
      });
  }

  export(e) {
    debugger;
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
    this.getPaymentsModel.phrase = event;
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
          return item.isPaid.toString();
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
