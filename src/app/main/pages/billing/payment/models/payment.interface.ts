export interface PaymentInterface {
  id:number;
  description:string;
  type:number,
  isPaid:boolean;
  amount:number;
  vat:number;
  total:number;
  creationDateTime:number;
}
