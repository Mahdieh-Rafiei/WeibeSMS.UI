import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FilterDataModel} from './filter-data-model';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class FilterComponent implements OnInit {

    pageSizes = [10, 20, 50];
    paymentStatuses = [
        {value: 0, title: 'All'},
        {value: true, title: 'Succeeded'},
        {value: false, title: 'Failed'}
    ];

    dummy: FormGroup = new FormGroup({});

    @Input() filterDataModel: FilterDataModel;
    @Output() filterValue: EventEmitter<any> = new EventEmitter<any>();

    constructor() {
    }

    ngOnInit() {
    }

    getDate(event) {
        this.filterDataModel.fromDate = event.dateFrom ? event.dateFrom.getTime() / 1000 : 0;
        this.filterDataModel.toDate = event.dateTo ? event.dateTo.getTime() / 1000 : 2147483647;
    }

    submit() {
        this.filterValue.emit(this.filterDataModel);
    }

    setPageSize(e) {
        this.filterDataModel.pageSize = e.target.value;
    }

    ticketStatusSelectedChanged(e) {
        this.filterDataModel.ticketStatusSelected = e.target.value;
    }

    transactionTypeSelectedChanged(e) {
        this.filterDataModel.transactionTypeSelected = e.target.value;
    }

    countrySelectedChanged(e) {
        this.filterDataModel.countrySelected = e.target.value;
    }

    paymentTypeSelectedChanged(e) {
        this.filterDataModel.paymentTypeSelected = e.target.value;
    }

    paymentStatusSelectedChanged(e) {
        this.filterDataModel.paidPayments = e.target.value;
    }

    notificationStatusSelectedChanged(e) {
        this.filterDataModel.notificationStatusSelected = e.target.value;
    }
}
