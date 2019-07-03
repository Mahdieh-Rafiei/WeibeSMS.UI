import {Component, OnInit} from '@angular/core';
import {Label} from 'ng2-charts';
import {DashboardService} from './dashboard-service';
import {ChartDataSets} from 'chart.js';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  barChartLabels: Label[] = [];
  barChartData: ChartDataSets[] = [];

  constructor(private dashboardService: DashboardService) {
  }


  ngOnInit() {
    //TODO: remove localstorage and cache service

    localStorage.removeItem('k-l');
    localStorage.removeItem('k-f');
    localStorage.removeItem('k-u');

    for (let i = 1; i < 31; i++) {
      this.barChartLabels.push(i.toString());
    }


    this.dashboardService.getSmsSentMonthlyReport()
      .subscribe(res => {
        console.log(res.data);
        debugger;
        this.barChartData.push({
            data: [], label: 'simple'
          },
          {data: [], label: 'event'});
        let simpleData = [];
        let eventData = [];

        for (let i = 0; res.data.length > i; i++) {
          const x = res.data[i];
          simpleData.push(x.simpleSentCount);
          eventData.push(x.eventSentCount);
        }

        this.barChartData[0].data = simpleData;
        this.barChartData[1].data = eventData;

        console.log(this.barChartData);
        console.log(this.barChartLabels);
      });
    // = [
    //   { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    //   { data: [28, 48, 40, 19, 86, 27, 500], label: 'Series B' }
    // ];
  }
}
