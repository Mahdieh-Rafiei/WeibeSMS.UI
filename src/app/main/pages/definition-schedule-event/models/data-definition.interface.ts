import {ItemsDefintionInterface} from './items-defintion.interface';

export interface DataDefinitionInterface {
  items: ItemsDefintionInterface[];
  pageNumber: number;
  pageSize: number;
  totalItemsCount: number;
  totalPagesCount: number;
}
