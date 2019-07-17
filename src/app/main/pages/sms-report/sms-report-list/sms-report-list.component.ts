import {Component, OnInit} from '@angular/core';
import {FilterDataModel} from '../../../../shared/component/filter/filter-data-model';
import {SmsReport} from '../models/sms-report';
import {SmsReportService} from '../sms-report.service';
import {TableConfigInterface} from '../../../../shared/component/table/models/table-config.interface';
import {PagingModel} from '../../../../shared/component/table/models/paging-model';
import {Router} from '@angular/router';
import {SendTypeTranslatorPipe} from '../send-type-translator.pipe';
import {SendStatusTranslatorPipe} from '../send-status-translator.pipe';

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
              private router: Router,
              private sendTypeTranslatorPipe: SendTypeTranslatorPipe,
              private sendStatusTranslatorPipe: SendStatusTranslatorPipe) {
  }

  ngOnInit() {
    this.getAllReports();
    this.generateRowColumns();

    this.filterDataMode.sendStatuses = [{
      value: 0, title: 'All'
    }, {
      value: 1, title: 'Queued'
    }, {
      value: 2, title: 'Rejected',
    }, {
      value: 3, title: 'Sent',
    }, {
      value: 4, title: 'Failed',
    }];

    this.filterDataMode.sendTypes = [{
      value: 0, title: 'All'
    }, {
      value: 1, title: 'Simple'
    }, {
      value: 2, title: 'Event',
    }, {
      value: 3, title: 'Scheduled',
    }, {
      value: 4, title: 'Api',
    }];
  }

  export(e) {
    const ids: Map<boolean, number[]> = new Map<boolean, number[]>();
    if (e.target.value === 1) {
      const isBulkIds = this.items.filter(i => i.isBulk).map(i => i.id);
      const isNotBulkIds = this.items.filter(i => !i.isBulk).map(i => i.id);

      ids.set(true, isBulkIds);
    }
    this.smsReportService.getSmsReportsExcel(ids)
      .subscribe(res => {
        window.open(res.data, '_blank');
      });
  }

  getAllReports() {
    this.smsReportService.getAllReports(this.tableConfig.pagingModel.pageSize,
      this.tableConfig.pagingModel.pageNumber, this.phrase, this.filterDataMode.sendTypeSelected,
      this.filterDataMode.sendStatusSelected,
      this.filterDataMode.fromDate, this.filterDataMode.toDate)
      .subscribe(res => {
        this.items = res.data.items;
        console.log(this.items);
      });
  }

  getData(event) {
    this.phrase = event;
    this.getAllReports();
  }

  getFilterData(e: FilterDataModel) {
    this.tableConfig.pagingModel.pageSize = e.pageSize;
    this.getAllReports();
  }

  generateRowColumns() {
    this.tableConfig.rowColumnsConfig.push({
      propertyName: 'messageText',
      hasSummaryDisplay: true
    });

    this.tableConfig.rowColumnsConfig.push({
      propertyName: 'sendType',
      manipulationMethod: value => {
        return this.sendTypeTranslatorPipe.transform(value);
      }
    });

    this.tableConfig.rowColumnsConfig.push({
      propertyName: 'senderLine'
    });

    this.tableConfig.rowColumnsConfig.push({
      propertyName: 'recipients'
    });

    this.tableConfig.rowColumnsConfig.push({
      propertyName: 'sendStatus',
      manipulationMethod: value => {
        return this.sendStatusTranslatorPipe.transform(value);
      }
    });

    this.tableConfig.rowColumnsConfig.push({
      propertyName: 'sendDateTime',
      isDateTime: true
    });
  }

  showDetails(e) {
    this.smsReportService.selectedSms = e.item;
    this.router.navigateByUrl(`sms-report/show/${e.item.id}`);
  }
}
