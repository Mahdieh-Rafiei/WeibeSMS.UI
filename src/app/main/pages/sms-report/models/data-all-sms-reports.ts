import {SmsReport} from './sms-report';

export interface DataAllSmsReports {
  items: SmsReport[];
  pageNumber: number;
  pageSize: number;
  totalPagesCount: number;
  totalItemsCount: number;
}
