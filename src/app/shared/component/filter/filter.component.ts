import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  perPages = [10, 20, 50];
  filterForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.createFrom();
  }

  createFrom() {
    this.filterForm = this.fb.group({
      perPage: ['']
    });
  }

  getDate(event) {
    console.log(event);
  }
}
