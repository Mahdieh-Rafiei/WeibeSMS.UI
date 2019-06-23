import {UserEventInterface} from './user-event.interface';

export interface DataUserEventInterface {
  items: UserEventInterface[];
  pageNumber: number;
  pageSize: number;
  totalItemsCount: number;
  totalPagesCount: number;
}
