import {DraftInterface} from './draft.interface';

export interface DataDraftInterface {
  items: DraftInterface[];
  pageNumber: number;
  pageSize: number;
  totalItemsCount: number;
  totalPagesCount: number;
}
