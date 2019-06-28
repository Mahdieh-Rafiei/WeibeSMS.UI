import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';
import { FilterDataModel} from './filter-data-model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  pageSizes = [10, 20, 50];

  dummy: FormGroup = new FormGroup({});

  @Input() filterDataModel: FilterDataModel;
  @Output() filterValue: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  getDate(event) {
    if (event.dateFrom) {
      this.filterDataModel.fromDate = event.dateFrom.getTime() / 1000;
    }
    if (event.dateTo) {
      this.filterDataModel.toDate = event.dateTo.getTime() / 1000;
    }
  }

  submit() {
    this.filterValue.emit(this.filterDataModel);
  }

  setPageSize(e) {
    this.filterDataModel.pageSize = e.target.value;
  }

  ticketStatusSelectedChanged(e){
    this.filterDataModel.ticketStatusSelected = e.target.value;
  }

  transactionTypeSelectedChanged(e){
    this.filterDataModel.transactionTypeSelected = e.target.value;
  }
}
