export interface GetTransactionLogsModelInterface {
  pageNumber: number;
  pageSize: number;
  description: string;
  fromDate: number;
  toDate: number;
  creditTransactionType: number;
}
