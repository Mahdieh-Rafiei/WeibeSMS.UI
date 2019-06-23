import {ItemsGroupInterface} from "./ItemsGroupInterface";

export interface ContactsGroupInterface {
  items: ItemsGroupInterface[];
  pageNumber: number;
  pageSize: number;
  totalItemsCount: number;
  totalPagesCount: number;
}
