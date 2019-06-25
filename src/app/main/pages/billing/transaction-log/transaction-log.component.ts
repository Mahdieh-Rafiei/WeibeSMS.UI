import {Component, OnInit} from '@angular/core';
import {BillingService} from '../billing.service';
import {CreditTransactionInterface} from './models/credit-transaction.interface';
import {GetTransactionLogsModelInterface} from './models/get-transaction-logs-model.interface';
import {toDate} from '@angular/common/src/i18n/format_date';
import {TableConfigInterface} from '../../../../shared/component/table/models/table-config.interface';
import {PagingModel} from '../../../../shared/component/table/models/paging-model';
import {privateEntriesToIndex} from '@angular/compiler-cli/src/metadata/index_writer';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './transaction-log.component.html',
  styleUrls: ['./transaction-log.component.scss']
})
export class TransactionLogComponent implements OnInit {

  transactionLogs: CreditTransactionInterface[];
  tableConfig: TableConfigInterface = {
    pagingModel: new PagingModel(),
    rowColumnsConfig: [],
    headerNames: ['Id' ,'Description', 'Type', 'Use credit', 'Remain credit', 'Date time'],
  };

  getTransactionLogsModel: GetTransactionLogsModelInterface =
    {
      creditTransactionType: null,
      description: '',
      fromDate: null,
      toDate: null,
    };
  phrase = '';

  constructor(private billingService: BillingService) {
  }

  ngOnInit() {
    this.getTransactionLogs();
    this.generateRowColumns();
  }

  getTransactionLogs() {
    this.billingService.getTransactionLogs(this.tableConfig.pagingModel.pageNumber,
      this.tableConfig.pagingModel.pageSize, this.getTransactionLogsModel.description, this.getTransactionLogsModel.fromDate,
      this.getTransactionLogsModel.toDate, this.getTransactionLogsModel.creditTransactionType, this.phrase)
      .subscribe(res => {
        console.log(res);
        this.transactionLogs = res.data.items;
        this.tableConfig.pagingModel.totalItemsCount = res.data.totalItemsCount;
      });
  }

  getData(event) {
    this.phrase = event;
    this.getTransactionLogs();
  }

  export(e) {
    const ids: number[] = [];
    if (e.target.value == 1) {
      this.transactionLogs.forEach(t => {
        ids.push(t.id);
      });
    }
    this.billingService.getTransactionLogsExcel(ids)
      .subscribe(res => {
        window.open(res.data, '_blank');
      });
  }

  generateRowColumns() {
    this.tableConfig.rowColumnsConfig.push({propertyName: 'description'});

    this.tableConfig.rowColumnsConfig.push({
      propertyName: 'simple', classSelector: (value) => {
        return 'light-green-btn';
      }, hasButton: true
    });

    this.tableConfig.rowColumnsConfig.push({
      propertyName: 'credit', sign: '€',hasArrowClass:true
    });

    this.tableConfig.rowColumnsConfig.push({
      propertyName: 'remainCredit', sign: '€',
    });
    this.tableConfig.rowColumnsConfig.push({
      propertyName: 'transactionDateTime', isDateTime: true
    });
  }
}
