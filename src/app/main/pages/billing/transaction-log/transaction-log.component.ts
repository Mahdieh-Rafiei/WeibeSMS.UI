import {Component, OnInit} from '@angular/core';
import {BillingService} from '../billing.service';
import {CreditTransactionInterface} from './models/credit-transaction.interface';
import {TableConfigInterface} from '../../../../shared/component/table/models/table-config.interface';
import {PagingModel} from '../../../../shared/component/table/models/paging-model';
import {FilterDataModel} from '../../../../shared/component/filter/filter-data-model';
import {TransactionTypeTranslatorPipe} from '../transaction-type-translator.pipe';

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
    headerNames: ['Id', 'Description', 'Type', 'Use credit', 'Remain credit', 'Date time'],
  };
  filterDataModel = new FilterDataModel();
  phrase = '';

  constructor(private billingService: BillingService,
              private transactionTypeTranslatorPipe: TransactionTypeTranslatorPipe) {
  }

  ngOnInit() {
    this.filterDataModel.fromToDate = true;
    this.filterDataModel.transactionTypes = [
      {title: 'All', value: null},
      {title: 'BuyCredit', value: 1},
      {title: 'SendSms', value: 2},
      {title: 'BuyLine', value: 3},
      {title: 'ExtendLine', value: 4},
      {title: 'SendOneToOneMessage', value: 5}
    ];
    this.filterDataModel.transactionTypeSelected = null;

    this.billingService.mode = 'transaction';
    this.getTransactionLogs();
    this.generateRowColumns();

  }

  getTransactionLogs() {
    this.billingService.getTransactionLogs(this.tableConfig.pagingModel.pageNumber,
      this.tableConfig.pagingModel.pageSize, this.filterDataModel.fromDate,
      this.filterDataModel.toDate, this.filterDataModel.transactionTypeSelected, this.phrase)
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

  getFilterData(e: FilterDataModel) {
    this.tableConfig.pagingModel.pageSize = e.pageSize;
    this.getTransactionLogs();
  }

  generateRowColumns() {
    this.tableConfig.rowColumnsConfig.push({propertyName: 'description'});

    this.tableConfig.rowColumnsConfig.push({
      propertyName: 'creditTransactionType',
      manipulationMethod: (value) => {
        return this.transactionTypeTranslatorPipe.transform(value);
      }
    });

    this.tableConfig.rowColumnsConfig.push({
      propertyName: 'credit', sign: '€', hasArrowClass: true
    });

    this.tableConfig.rowColumnsConfig.push({
      propertyName: 'remainCredit', sign: '€',
    });
    this.tableConfig.rowColumnsConfig.push({
      propertyName: 'transactionDateTime', isDateTime: true
    });
  }
}
