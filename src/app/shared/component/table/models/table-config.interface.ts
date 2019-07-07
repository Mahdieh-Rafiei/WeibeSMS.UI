import {RowColumnConfigInterface} from './row-column-config.interface';
import {PagingModel} from './paging-model';
import {HeaderConfigInterface} from "./header-config.interface";

export interface TableConfigInterface {
  rowColumnsConfig: RowColumnConfigInterface[];
  headersConfig: HeaderConfigInterface[];
  pagingModel?: PagingModel;

  hasActions?: boolean;
  hasShowButton?: boolean;
  hasRemoveButton?: boolean;
  hasAddOrUpdateButton?: boolean;
  hasPrintColumn?: boolean;
  hasManageColumn?: boolean;
}
