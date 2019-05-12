import {Injectable, Input} from '@angular/core';
import {ApiService} from '../shared/api.service';
import {Observable} from 'rxjs';
import {GroupListInterface} from './group-list/models/group-list.interface';
import {AddGroupNameInterface} from './group-list/models/add-group-name.interface';
import {AddGroupNameResponseInterface} from './group-list/models/add-group-name-response.interface';
import {ModifyGroupNameInterface} from './group-list/models/modify-group-name.interface';
import {ModifyGroupNameResponseInterface} from './group-list/models/modify-group-name-response.interface';
import {RemoveGroupNameResponseInterface} from './group-list/models/remove-group-name-response.interface';
import {GroupResponseInterface} from './models/group-response.interface';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private apiService: ApiService) {
  }

  getAllGroupList(pageSize: number, pageNumber: number, phrase: string): Observable<GroupListInterface> {
    const url = `ContactGroup?pageSize=${pageSize}&pageNumber=${pageNumber}&groupName=${phrase}`;
    return this.apiService.get(url, true);
  }

  getGroup(id: string): Observable<GroupResponseInterface> {
    const url = `ContactGroup/${id}`;
    return this.apiService.get(url, true);
  }

  addGroup(data): Observable<AddGroupNameResponseInterface> {
    const url = `ContactGroup`;
    return this.apiService.post<AddGroupNameInterface>(url, data, true);
  }

  modifyGroup(id: number, data): Observable<ModifyGroupNameResponseInterface> {
    const url = `ContactGroup/${id}`;
    return this.apiService.put<ModifyGroupNameInterface>(url, data, true);
  }

  removeGroup(id: number) {
    const url = `ContactGroup/${id}`;
    return this.apiService.delete<RemoveGroupNameResponseInterface>(url, null, true);
  }
}
