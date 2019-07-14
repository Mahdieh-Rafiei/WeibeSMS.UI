import {SummaryCountryInterface} from '../../../main/pages/numbers/user-lines/models/summary-country.interface';

export class FilterDataModel {
  fromDate: number;
  toDate: number;
  fromToDate: boolean;
  pageSize: number;
  ticketStatuses?: any[];
  ticketStatusSelected?: number;
  transactionTypes?: any[];
  transactionTypeSelected?: number;
  countries?: any[];
  countrySelected?: number;
  paymentTypes?: any[];
  paymentTypeSelected?: number;
  paidPayments?: any;
  notificationStatuses?: any[];
  notificationStatusSelected?: any;
  sendStatuses?: any[];
  sendStatusSelected?: any;
  sendTypes?: any[];
  sendTypeSelected?: any;

  constructor() {
    this.fromDate = 0;
    this.toDate = 2147483647;
    this.pageSize = 10;
  }
}
