
import {DataGetUserNotificationInterface} from "./data-get-user-notification.interface";

export interface DataNotificationInterface {
  items: DataGetUserNotificationInterface[];
  pageNumber: number;
  pageSize: number;
  totalItemsCount: number;
  totalPagesCount: number;
}
