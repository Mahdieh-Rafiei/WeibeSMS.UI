import {RowColumnConfigInterface} from './row-column-config.interface';

export interface TableConfigInterface {
  rowColumnsConfig:RowColumnConfigInterface[];
  hasActions:boolean;
  hasShowButton:boolean;
  hasRemoveButton:boolean;
  hasAddOrUpdateButton:boolean;
}
