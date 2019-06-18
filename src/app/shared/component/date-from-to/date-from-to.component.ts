import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-date-from-to',
  templateUrl: './date-from-to.component.html',
  styleUrls: ['./date-from-to.component.scss']
})
export class DateFromToComponent implements OnInit {
  dateFromTo: FormGroup;
  @Output() date: EventEmitter<any> = new EventEmitter<any>();
  minDate = null;
  maxDate = null;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.createFrom();
  }

  createFrom() {
    this.dateFromTo = this.fb.group({
      dateFrom: [null],
      dateTo: [null]
    });
  }

  changeDate(index, type) {
    if (index === 0) {
      this.date.emit(this.dateFromTo.value);
    } else if (index === 1) {
      this.date.emit(this.dateFromTo.value);
    }
    if (type === 'from') {
      this.minDate = this.dateFromTo.value.dateFrom;
    }
    if (type === 'to') {
      this.maxDate = this.dateFromTo.value.dateTo;
    }
  }
}
