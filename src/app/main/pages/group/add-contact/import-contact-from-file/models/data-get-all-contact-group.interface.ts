import {ItemsGetAllContactGroupInterface} from './items-get-all-contact-group.interface';

export interface DataGetAllContactGroupInterface {
  items: ItemsGetAllContactGroupInterface[];
  pageNumber: number;
  pageSize: number;
  totalItemsCount: number;
  totalPagesCount: number;
}
