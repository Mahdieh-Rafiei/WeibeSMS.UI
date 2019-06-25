export interface PaymentInterface {
  id:number;
  description:string;
  type:string,
  isPaid:boolean;
  amount:number;
  vat:number;
  total:number;
  creationDateTime:number;
}
