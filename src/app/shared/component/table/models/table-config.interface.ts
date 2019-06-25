import {RowColumnConfigInterface} from './row-column-config.interface';
import {PagingModel} from './paging-model';

export interface TableConfigInterface {
  rowColumnsConfig:RowColumnConfigInterface[];
  headerNames:string[];
  pagingModel:PagingModel;

  hasActions?:boolean;
  hasShowButton?:boolean;
  hasRemoveButton?:boolean;
  hasAddOrUpdateButton?:boolean;
  hasPrintColumn?:boolean;
  hasManageColumn?:boolean;
}
