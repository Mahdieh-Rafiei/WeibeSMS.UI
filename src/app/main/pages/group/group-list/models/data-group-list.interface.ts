import {ItemsGroupListInterface} from './items-group-list.interface';

export interface DataGroupListInterface {
  items: ItemsGroupListInterface[];
  pageNumber: 1;
  pageSize: 20;
  totalItemsCount: 3;
  totalPagesCount: 1;
}
