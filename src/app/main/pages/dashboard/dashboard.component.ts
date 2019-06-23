import {Component, OnInit} from '@angular/core';
// import {Chart} from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // toppings = new FormControl();
  // toppingList: string[] = ['search by first name', 'search by mobile', 'search by email', 'search by last name'];
  chart = [];

  constructor() {
  }

  ngOnInit() {
    //TODO: remove localstorage and cache service

    localStorage.removeItem('k-l');
    localStorage.removeItem('k-f');
    localStorage.removeItem('k-u');


    // this.chart = new Chart('canvas', {
    //   type: 'line',
    //   data: {
    //     labels: ['1', '1', '2', '3', '4', '5', '6', '7'],
    //     datasets: [{
    //       label: 'تعداد ارسال',
    //       data: [0, 15, 0, 15, 0, 15, 0, 15],
    //       backgroundColor: [
    //         'transparent'
    //       ],
    //       borderColor: [
    //         '#82ba31',
    //       ],
    //       borderWidth: 1
    //     },
    //       {
    //         label: 'ایمیل های خوانده شده',
    //         data: [0, 10, 5, 3, 12, 15, 0, 6],
    //         backgroundColor: [
    //           'transparent',
    //         ],
    //         borderColor: [
    //           '#a0ae00',
    //         ],
    //         borderWidth: 1
    //       },
    //       {
    //         label: 'تعداد کلیک ها :',
    //         data: [0, 8, 1, 0, 12, 0, 1, 0],
    //         backgroundColor: [
    //           'transparent',
    //         ],
    //         borderColor: [
    //           '#00b0c2',
    //         ],
    //         borderWidth: 1
    //       }
    //     ]
    //   },
    //
    //   options:
    //     {
    //
    //       scales: {
    //         yAxes: [{
    //           ticks: {
    //             stacked: true
    //           }
    //         }]
    //       },
    //       tooltips: {
    //         mode: 'index',
    //         intersect: true
    //       }
    //     },
    // });
  }
}
