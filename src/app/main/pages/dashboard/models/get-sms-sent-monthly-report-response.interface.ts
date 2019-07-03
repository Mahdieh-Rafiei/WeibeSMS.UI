import {SmsSentMonthlyReportInterface} from './sms-sent-monthly-report.interface';

export interface GetSmsSentMonthlyReportResponseInterface {
  data: SmsSentMonthlyReportInterface[];
  message: string;
}
