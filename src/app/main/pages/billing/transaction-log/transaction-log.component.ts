import {Component, OnInit} from '@angular/core';
import {BillingService} from '../billing.service';
import {CreditTransactionInterface} from './models/credit-transaction.interface';
import {GetTransactionLogsModelInterface} from './models/get-transaction-logs-model.interface';
import {toDate} from '@angular/common/src/i18n/format_date';

@Component({
    selector: 'app-create-transaction',
    templateUrl: './transaction-log.component.html',
    styleUrls: ['./transaction-log.component.scss']
})
export class TransactionLogComponent implements OnInit {

    transactionLogs: CreditTransactionInterface[];
    getTransactionLogsModel: GetTransactionLogsModelInterface =
        {
            pageNumber: 1,
            creditTransactionType: null,
            description: '',
            fromDate: null,
            toDate: null,
            pageSize: 10,
        };
    totalItems;
    phrase = '';

    constructor(private billingService: BillingService) {
    }

    ngOnInit() {
        this.getTransactionLogs();
    }

    getTransactionLogs() {
        this.billingService.getTransactionLogs(this.getTransactionLogsModel.pageNumber,
            this.getTransactionLogsModel.pageSize, this.getTransactionLogsModel.description, this.getTransactionLogsModel.fromDate,
            this.getTransactionLogsModel.toDate, this.getTransactionLogsModel.creditTransactionType, this.phrase)
            .subscribe(res => {
                console.log(res);
                this.transactionLogs = res.data.items;
                this.totalItems = res.data.totalItemsCount;
            });
    }

    doPaging(e) {
        this.getTransactionLogsModel.pageNumber = e;
        this.getTransactionLogs();
    }

    getData(event) {
        this.phrase = event;
        this.getTransactionLogs();
    }
}
