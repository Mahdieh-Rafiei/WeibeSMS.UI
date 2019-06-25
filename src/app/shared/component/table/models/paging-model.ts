export class PagingModel {
  pageNumber: number;
  pageSize: number;
  totalItemsCount: number;

  constructor() {
    this.pageNumber = 1;
    this.totalItemsCount = 0;
    this.pageSize = 10;
  }
}
