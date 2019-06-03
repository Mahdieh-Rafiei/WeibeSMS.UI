import {ItemsLoginLogInterface} from './items-login-log.interface';

export interface DataLoginLogInterface {
  items: ItemsLoginLogInterface;
  pageNumber: number;
  pageSize: number;
  totalItemsCount: number;
  totalPagesCount: number;
}
