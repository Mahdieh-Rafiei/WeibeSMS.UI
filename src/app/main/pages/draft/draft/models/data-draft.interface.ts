import {ItemsDraftInterface} from './items-draft.interface';

export interface DataDraftInterface {
  items: ItemsDraftInterface[];
  pageNumber: number;
  pageSize: number;
  totalItemsCount: number;
  totalPagesCount: number;
}
