import {PaymentInterface} from './payment.interface';

export interface DataPaymentInterface {
  pageNumber:number;
  pageSize:number;
  totalPagesCount:number;
  totalItemsCount:number;
  items:PaymentInterface[];
}
