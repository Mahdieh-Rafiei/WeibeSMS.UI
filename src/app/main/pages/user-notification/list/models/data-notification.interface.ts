import {ItemsNotificationInterface} from './items-notification.interface';

export interface DataNotificationInterface {
  items: ItemsNotificationInterface[];
  pageNumber: number;
  pageSize: number;
  totalItemsCount: number;
  totalPagesCount: number;
}
