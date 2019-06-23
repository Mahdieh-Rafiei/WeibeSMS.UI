export interface GetPaymentsModel {
  pageNumber:number;
  pageSize:number;
  description:string;
  fromDate:number;
  toDate:number;
  type:number;
  isPaid:boolean;
  phrase:string;
}
