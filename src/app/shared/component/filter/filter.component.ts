import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {FilterDataInterface} from './filter-data.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  pageSizes = [10, 20, 50];

  dummy:FormGroup = new FormGroup({});

  @Input() filterData: FilterDataInterface;
  @Output() filterValue: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  getDate(event) {
    debugger;
    if (event.dateFrom) {
      this.filterData.fromDate = event.dateFrom.getTime() / 1000;
    }
    if (event.dateTo) {
      this.filterData.toDate = event.dateTo.getTime() / 1000;
    }
  }

  submit() {
    this.filterValue.emit(true);
  }

  setPageSize(e){
    this.filterData.pageSize = e.target.value;
  }
}
