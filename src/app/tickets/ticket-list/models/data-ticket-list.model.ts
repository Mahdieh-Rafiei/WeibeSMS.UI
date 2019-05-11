import {ItemsTicketListInterface} from './items-ticket-list.interface';

export interface DataTicketListModel {
  items: ItemsTicketListInterface[];
  pageNumber: number;
  pageSize: number;
  totalItemsCount: number;
  totalPagesCount: number;
}
