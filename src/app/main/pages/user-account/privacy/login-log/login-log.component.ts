import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LoginLogInterface} from './models/login-log.interface';
import {PrivacyService} from '../privacy.service';

@Component({
  selector: 'app-login-log',
  templateUrl: './login-log.component.html',
  styleUrls: ['./login-log.component.scss']
})
export class LoginLogComponent implements OnInit {
  loginLogs: LoginLogInterface;
  pageNumber: number = 1;
  pageSize: number = 10;
  totalItemsCount: number;
  phrase = '';

  constructor(private route: ActivatedRoute,
              private ps: PrivacyService) {
    this.route.data
      .subscribe((data: { loginLog: LoginLogInterface }) => {
        this.loginLogs = data.loginLog;
        this.totalItemsCount = data.loginLog.data.totalItemsCount;
      });
  }

  ngOnInit() {
    console.log(this.loginLogs);
  }

  getAllDrafts() {
    this.ps.loginLog(this.pageNumber, this.pageSize, this.phrase)
      .subscribe((res: LoginLogInterface) => {
        this.totalItemsCount = res.data.totalItemsCount;
        this.loginLogs = res;
      });
  }


  doPaging(e) {
    this.pageNumber = e;
    this.getAllDrafts();
  }


}
