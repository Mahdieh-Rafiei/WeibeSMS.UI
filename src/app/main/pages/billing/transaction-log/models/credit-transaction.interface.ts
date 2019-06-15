export interface CreditTransactionInterface {
  id: number;
  transactionDateTime: number;
  credit: number;
  creditTransactionType: number;
  description: string;
  remainCredit:number;
}
