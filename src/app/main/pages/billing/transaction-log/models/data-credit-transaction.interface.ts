import {CreditTransactionInterface} from './credit-transaction.interface';

export interface DataCreditTransactionInterface {
  items: CreditTransactionInterface[];
  pageNumber: number;
  pageSize: number;
  totalItemsCount: number;
  totalPagesCount: number;
}
