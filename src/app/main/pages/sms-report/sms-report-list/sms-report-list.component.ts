import {Component, OnInit} from '@angular/core';
import {FilterDataModel} from '../../../../shared/component/filter/filter-data-model';
import {SmsReport} from '../models/sms-report';
import {SmsReportService} from '../sms-report.service';
import {TableConfigInterface} from '../../../../shared/component/table/models/table-config.interface';
import {PagingModel} from '../../../../shared/component/table/models/paging-model';
import {Router} from '@angular/router';
import {style} from '@angular/animations';

@Component({
  selector: 'app-sms-report-list',
  templateUrl: './sms-report-list.component.html',
  styleUrls: ['./sms-report-list.component.scss']
})
export class SmsReportListComponent implements OnInit {

  phrase = '';
  items: SmsReport[];
  filterDataMode = new FilterDataModel();
  tableConfig: TableConfigInterface = {
    headersConfig: [{
      hideInResponsive: false,
      title: 'Id'
    }, {
      title: 'Message',
      hideInResponsive: false
    }, {
      hideInResponsive: false,
      title: 'Type',
    }, {
      title: 'Sender number',
      hideInResponsive: false
    }, {
      hideInResponsive: false,
      title: 'Recipient'
    }, {
      title: 'Status',
      hideInResponsive: false
    }, {
      hideInResponsive: false,
      title: 'Date time'
    }
    ],
    pagingModel: new PagingModel(),
    rowColumnsConfig: [],
    hasShowButton: true,
    hasActions: true
  };

  constructor(private smsReportService: SmsReportService,
              private router: Router) {
  }

  ngOnInit() {

    this.getAllReports();
    this.generateRowColumns();
  }

  export(e) {
    const ids: number[] = [];
    if (e.target.value === 1) {
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
    this.smsReportService.getAllReports(this.tableConfig.pagingModel.pageSize,
      this.tableConfig.pagingModel.pageNumber, this.phrase, 0, 0,
      this.filterDataMode.fromDate, this.filterDataMode.toDate)
      .subscribe(res => {
        this.items = res.data.items;
      });
  }

  getData(event) {
    this.phrase = event;
    this.getAllReports();
  }

  generateRowColumns() {
    this.tableConfig.rowColumnsConfig.push({
      propertyName: 'messageText',
      hasSummaryDisplay:true
    });


    // this.tableConfig.rowColumnsConfig.push({
    //   propertyName: 'recipients'
    // });
    //
    // this.tableConfig.rowColumnsConfig.push({
    //   propertyName: 'senderLine'
    // });
    //
    // this.tableConfig.rowColumnsConfig.push({
    //   propertyName: 'sendType'
    // });
    //
    // this.tableConfig.rowColumnsConfig.push({
    //   propertyName: 'sendStatus'
    // });
    //
    // this.tableConfig.rowColumnsConfig.push({
    //   propertyName: 'sendDateTime'
    // });
  }

  showDetails(e: SmsReport) {
    this.router.navigateByUrl(``);
  }
}
