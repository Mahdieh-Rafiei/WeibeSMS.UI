import {InvoiceInterface} from './invoice.interface';

export interface DataInvoiceInterface {
  pageNumber:number;
  pageSize:number;
  totalPagesCount:number;
  totalItemsCount:number;
  items:InvoiceInterface[]
}
