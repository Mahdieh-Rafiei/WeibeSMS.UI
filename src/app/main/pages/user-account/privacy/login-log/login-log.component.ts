import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LoginLogInterface} from './models/login-log.interface';
import {PrivacyService} from '../privacy.service';
import {TableConfigInterface} from '../../../../../shared/component/table/models/table-config.interface';
import {RowColumnConfigInterface} from '../../../../../shared/component/table/models/row-column-config.interface';
import {ItemsLoginLogInterface} from './models/items-login-log.interface';
import {PagingModel} from '../../../../../shared/component/table/models/paging-model';

@Component({
  selector: 'app-login-log',
  templateUrl: './login-log.component.html',
  styleUrls: ['./login-log.component.scss']
})
export class LoginLogComponent implements OnInit {
  loginLogs: ItemsLoginLogInterface[];
  phrase = '';

  tableConfig:TableConfigInterface={
    rowColumnsConfig:[],
    pagingModel:new PagingModel(),
    headerNames:['Id','Device','Location','Date time']
  };

  constructor(private route: ActivatedRoute,
              private ps: PrivacyService) {
    this.route.data
      .subscribe((data: { loginLog: LoginLogInterface }) => {
        this.loginLogs = data.loginLog.data.items;
        this.tableConfig.pagingModel.totalItemsCount = data.loginLog.data.totalItemsCount;
      });
  }

  ngOnInit() {
    this.generateRowColumns();
  }

  getAllLogs() {
    this.ps.loginLog(this.tableConfig.pagingModel.pageNumber, this.tableConfig.pagingModel.pageSize, this.phrase)
      .subscribe((res: LoginLogInterface) => {
        this.tableConfig.pagingModel.totalItemsCount = res.data.totalItemsCount;
        this.loginLogs = res.data.items;
      });
  }

  getData(event) {
    this.phrase = event;
    this.getAllLogs();
  }

  generateRowColumns() {
    this.tableConfig.rowColumnsConfig.push({propertyName: 'device'});
    this.tableConfig.rowColumnsConfig.push({propertyName: 'location'});
    this.tableConfig.rowColumnsConfig.push({propertyName: 'creationDateTime', isDateTime: true});
  }
}
