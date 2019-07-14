import {SmsDetailReport} from './sms-detail-report';

export interface DataSmsDetailReport {
  items: SmsDetailReport[];
  pageNumber: number;
  pageSize: number;
  totalItemsCount: number;
  totalPagesCount: number;
}
