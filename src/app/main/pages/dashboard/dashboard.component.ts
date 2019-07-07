import {Component, OnInit} from '@angular/core';
import {Label} from 'ng2-charts';
import {DashboardService} from './dashboard-service';
import {ChartDataSets} from 'chart.js';
import {SharedService} from '../../../shared/service/shared.service';
import {DashboardInfoInterface} from './models/dashboard-info.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  barChartLabels: Label[] = [];
  barChartData: ChartDataSets[] = [];
  today = Date();
  dashboardInfoInterface: DashboardInfoInterface;

  constructor(private dashboardService: DashboardService,
              private sharedService: SharedService) {
  }


  ngOnInit() {
    //TODO: remove localstorage and cache service

    localStorage.removeItem('k-l');
    localStorage.removeItem('k-f');
    localStorage.removeItem('k-u');


    this.dashboardService.getDashboardInfo()
      .subscribe(res => {

        console.log(res.data);
        this.dashboardInfoInterface = res.data;
        this.dashboardInfoInterface.smsSentWeeklyReportViews.forEach(res => {
          this.barChartLabels.push(res.dayName);
        });

        this.barChartData.push({
            data: [], label: 'Succeeded'
          },
          {data: [], label: 'Failed'});
        let failedSmsCount = [];
        let succeededSmsCount = [];

        for (let i = 0; res.data.smsSentWeeklyReportViews.length > i; i++) {
          const x = res.data.smsSentWeeklyReportViews[i];
          failedSmsCount.push(x.failedSmsCount);
          succeededSmsCount.push(x.succeededSmsCount);
        }

        this.barChartData[0].data = succeededSmsCount;
        this.barChartData[1].data = failedSmsCount;
      });
  }
}
