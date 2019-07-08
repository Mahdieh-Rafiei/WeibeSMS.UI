import {SmsSentWeeklyReportView} from './sms-sent-weekly-report-view';

export interface DashboardInfoInterface {
  smsSentWeeklyReportViews:SmsSentWeeklyReportView[];
  succeededSmsCountToday:number;
  failedSmsCountToday:number;
  succeededSmsCountYesterday:number;
  failedSmsCountYesterday:number;
  succeededSmsCountLast7Days:number;
  failedSmsCountLast7Days:number;
  succeededSmsCountThisMonth:number;
  failedCountThisMonth:number;
}
