import {Component, OnInit} from '@angular/core';
import {SmsReportService} from '../sms-report.service';
import {TableConfigInterface} from '../../../../shared/component/table/models/table-config.interface';
import {PagingModel} from '../../../../shared/component/table/models/paging-model';
import {SmsDetailReport} from '../models/sms-detail-report';
import {Router} from '@angular/router';
import {FilterDataModel} from '../../../../shared/component/filter/filter-data-model';
import {MatDialog} from '@angular/material';
import {DialogComponent} from '../../../../shared/component/dialog/dialog.component';
import {NotificationService} from '../../../../shared/notification.service';

@Component({
  selector: 'app-sms-report',
  templateUrl: './show-sms-report.component.html',
  styleUrls: ['./show-sms-report.component.scss']
})
export class ShowSmsReportComponent implements OnInit {

  tableConfig: TableConfigInterface = {
    headersConfig: [{
      hideInResponsive: false,
      title: 'Id'
    }, {
      title: 'Recipient number',
      hideInResponsive: false
    }, {
      hideInResponsive: false,
      title: 'Recipient first name',
    }, {
      title: 'Recipient sure name',
      hideInResponsive: false
    }, {
      hideInResponsive: false,
      title: 'Status'
    }],
    pagingModel: new PagingModel(),
    rowColumnsConfig: []
  };

  items: SmsDetailReport[];
  phrase = '';

  filterDataModel = new FilterDataModel();

  constructor(private smsReportService: SmsReportService,
              private router: Router,
              private dialog: MatDialog,
              private notificationService: NotificationService) {

  }

  ngOnInit() {
    if (this.smsReportService.selectedSms) {
      this.getSmsDetail();
      this.generateRowColumns();
    } else {
      this.router.navigateByUrl('sms-report/list');
    }
  }

  getData(event) {
    this.phrase = event;
    this.getSmsDetail();
  }

  getFilterData(e: FilterDataModel) {
    this.tableConfig.pagingModel.pageSize = e.pageSize;
    this.getSmsDetail();
  }

  getSmsDetail() {
    this.smsReportService.getSmsDetailReport(this.smsReportService.selectedSms.id,
      this.tableConfig.pagingModel.pageSize, this.tableConfig.pagingModel.pageNumber,
      this.phrase, this.smsReportService.selectedSms.isBulk)
      .subscribe(res => {
        this.items = res.data.items;
        this.tableConfig.pagingModel.totalItemsCount = res.data.totalItemsCount;
      });
  }

  generateRowColumns() {
    this.tableConfig.rowColumnsConfig.push({
      propertyName: 'mobile',
      manipulationMethod: (value) => {
        return `+${value}`;
      }
    });

    this.tableConfig.rowColumnsConfig.push({
      propertyName: 'firstName'
    });

    this.tableConfig.rowColumnsConfig.push({
      propertyName: 'lastName'
    });

    this.tableConfig.rowColumnsConfig.push({
      propertyName: 'lastName',
      manipulationMethod: value => {
        return 'Sent';
      }
    });
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

  removeSmsReport() {
    this.openDeleteDialog('480px', 'auto', '', {
      modalType: 'deleteSmsReport',
      modalHeader: 'Delete Report',
      modalText: 'Are you sure to remove this report?'
    });
  }


  openDeleteDialog(width, height, panelClass, data): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width,
      height,
      panelClass,
      data
    });

    dialogRef.afterClosed()
      .subscribe(result => {
        if (result) {
          if (result.remove.modalType === 'deleteSmsReport') {
            this.smsReportService.removeSmsReport()
              .subscribe(res => {
                console.log(res);
                this.notificationService.success('Report removed successfully', '');
                this.router.navigateByUrl('sms-report/list');
              });
          }
        }
      });
  }
}
