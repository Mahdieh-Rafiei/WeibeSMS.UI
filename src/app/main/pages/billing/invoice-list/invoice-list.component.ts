import {Component, OnInit} from '@angular/core';
import {BillingService} from '../billing.service';
import {InvoiceInterface} from './models/invoice.interface';
import {TableConfigInterface} from '../../../../shared/component/table/models/table-config.interface';
import {PagingModel} from '../../../../shared/component/table/models/paging-model';
import {FilterDataModel} from '../../../../shared/component/filter/filter-data-model';

@Component({
    selector: 'app-invoice-list',
    templateUrl: './invoice-list.component.html',
    styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent implements OnInit {
    phrase = '';

    invoices: InvoiceInterface[];
    tableConfig: TableConfigInterface = {
        pagingModel: new PagingModel(),
        rowColumnsConfig: [],
        headersConfig: [
            {hideInResponsive: false, title: 'Id'},
            {hideInResponsive: true, title: 'Amount'},
            {hideInResponsive: true, title: 'Vat'},
            {hideInResponsive: false, title: 'Total price'},
            {hideInResponsive: false, title: 'Created on'},
        ]
    };

    filterDataModel: FilterDataModel = new FilterDataModel();

    constructor(private billingService: BillingService) {
    }

    ngOnInit() {
        this.getInvoices();
        this.generateRowColumns();
        this.filterDataModel.fromToDate = true;
    }

    getInvoices() {
        this.billingService.getInvoices(this.tableConfig.pagingModel.pageNumber,
            this.tableConfig.pagingModel.pageSize, this.phrase,
            this.filterDataModel.fromDate,
            this.filterDataModel.toDate
        )
            .subscribe(res => {
                this.invoices = res.data.items;
                this.tableConfig.pagingModel.totalItemsCount = res.data.totalItemsCount;
            });
    }

    getData(event) {
        this.phrase = event;
        this.getInvoices();
    }

    getFilterData(e: FilterDataModel) {
        this.tableConfig.pagingModel.pageSize = e.pageSize;
        this.getInvoices();
    }

    generateRowColumns() {
        this.tableConfig.rowColumnsConfig.push({propertyName: 'amount', sign: '€', hideInResponsive: true});
        this.tableConfig.rowColumnsConfig.push({propertyName: 'vat', sign: '%', hideInResponsive: true});
        this.tableConfig.rowColumnsConfig.push({propertyName: 'totalAmount', sign: '€', hideInResponsive: false});
        this.tableConfig.rowColumnsConfig.push({propertyName: 'creationDate', isDate: true, hideInResponsive: false});
    }
}
