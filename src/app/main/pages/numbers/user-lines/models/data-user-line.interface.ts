import {ItemsUserLineInterface} from './items-user-line.interface';

export interface DataUserLineInterface {
  pageNumber:number;
  pageSize:number;
  totalPagesCount:number;
  totalItemsCount:number;
  items:ItemsUserLineInterface[]
}
