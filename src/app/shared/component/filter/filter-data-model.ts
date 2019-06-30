export class FilterDataModel {
  fromDate: number;
  toDate: number;
  fromToDate: boolean;
  pageSize: number;
  ticketStatuses?: any[];
  ticketStatusSelected?: number;
  transactionTypes?: any[];
  transactionTypeSelected?: number;
  // invoceStatuses?: any[];
  // invoceStatusSelected: number;

  constructor() {
    this.fromDate = 0;
    this.toDate = 2147483647;
    this.pageSize = 10;
  }
}
