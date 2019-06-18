import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  pageSize = [10, 20, 50];
  filterForm: FormGroup;

  @Input() options;

  @Output() filterValue: EventEmitter<any> = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.createFrom();
    console.log(this.options.fromToDate)
  }

  createFrom() {
    this.filterForm = this.fb.group({
      pageSize: ['']
    });
    for (let i = 0; i < this.options.length; i++) {
      this.filterForm.addControl(this.options[i].option.title, new FormControl(''));

    }
  }

  getDate(event) {
    if (event.dateFrom) {
      this.filterForm.addControl('dateFrom', new FormControl(event.dateFrom.getTime() / 1000));
    }
    if (event.dateTo) {
      this.filterForm.addControl('dateTo', new FormControl(event.dateTo.getTime() / 1000));
    }
  }

  submit() {
    this.filterValue.emit(this.filterForm.value);
  }
}
