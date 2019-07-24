import {GroupListPagedData} from './group-list-paged-data';
import {ResponseModel} from '../../../../../shared/models/response-model';

export class GroupListResponse implements ResponseModel {
  data: GroupListPagedData;
  message: string;
}
