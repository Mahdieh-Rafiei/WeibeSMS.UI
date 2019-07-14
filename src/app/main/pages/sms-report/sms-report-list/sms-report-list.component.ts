import {Component, OnInit} from '@angular/core';
import {FilterDataModel} from '../../../../shared/component/filter/filter-data-model';
import {SmsReport} from '../models/sms-report';
import {SmsReportService} from '../sms-report.service';
import {TableConfigInterface} from '../../../../shared/component/table/models/table-config.interface';

@Component({
  selector: 'app-sms-report-list',
  templateUrl: './sms-report-list.component.html',
  styleUrls: ['./sms-report-list.component.scss']
})
export class SmsReportListComponent implements OnInit {

  phrase = '';
  items: SmsReport[];
  filterDataMode = new FilterDataModel();
  // tableConfig : TableConfigInterface = {
  //   headersConfig =
  // };

  constructor(private smsReportService: SmsReportService) {
  }

  ngOnInit() {
  }

  export(e) {
    const ids: number[] = [];
    if (e.target.value == 1) {
      this.items.forEach(p => {
        ids.push(p.id);
      });
    }
    this.smsReportService.getSmsReportsExcel(ids)
      .subscribe(res => {
        window.open(res.data, '_blank');
      });
  }

  getAllReports() {
    this.smsReportService.getAllReports(this.filterDataMode.pageSize,
      this.filterDataMode.p)
  }

  getData(event) {
    this.phrase = event;
    this.getAllReports();
  }
}
