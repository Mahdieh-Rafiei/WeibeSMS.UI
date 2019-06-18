import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // toppings = new FormControl();
  // toppingList: string[] = ['search by first name', 'search by mobile', 'search by email', 'search by last name'];


  constructor() {
  }

  ngOnInit() {
    //TODO: remove localstorage and cache service

    localStorage.removeItem('k-l');
    localStorage.removeItem('k-f');
    localStorage.removeItem('k-u');
  }
}
