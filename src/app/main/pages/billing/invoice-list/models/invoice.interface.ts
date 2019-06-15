export interface InvoiceInterface {
  id:number;
  creationDate:Date;
  amount:number;
  vat:number;
  totalAmount:number;
  countOfRows:number
}
