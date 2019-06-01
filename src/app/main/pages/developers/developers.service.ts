import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ApiService} from '../../../shared/api.service';
import {DeveloperListInterface} from './developer-list/models/developer-list.interface';
import {DeveloperInterface} from './developer/models/developer.interface';
import {AddIpInterface} from './developer/models/add-ip.interface';
import {AddIpResponseInterface} from './developer/models/add-ip-response.interface';
import {AddKeyResponseInterface} from './developer-list/create-key/models/add-key-response.interface';
import {AddKeyInterface} from './developer-list/create-key/models/add-key.interface';
import {RemoveKeyInterface} from './developer/models/remove-key.interface';
import {RemoveIpinterface} from './developer/models/remove-ipinterface';
import {ChangeStatusInterface} from './developer/models/change-status.interface';

@Injectable({
  providedIn: 'root'
})

export class DevelopersService {

  constructor(private apiService: ApiService) {
  }


  getAllKeys(): Observable<DeveloperListInterface> {
    const url = `UserApiKey`;
    return this.apiService.get(url, true);
  }

  addKey(payload): Observable<AddKeyResponseInterface> {
    const url = `UserApiKey`;
    return this.apiService.post<AddKeyInterface>(url, payload, true);
  }

  getKey(id): Observable<DeveloperInterface> {
    const url = `UserApiKey/${id}`;
    return this.apiService.get(url, true);
  }

  addIp(id, payload): Observable<AddIpResponseInterface> {
    const url = `UserApiKey/${id}/validips`;
    return this.apiService.post<AddIpInterface>(url, payload, true);
  }

  removeKey(id): Observable<RemoveKeyInterface> {
    const url = `UserApiKey/${id}`;
    return this.apiService.delete(url, null, true);
  }

  removeIp(keyId, ipId): Observable<RemoveIpinterface> {
    const url = `UserApiKey/${keyId}/validips/${ipId}`;
    return this.apiService.delete(url, null, true);
  }

  modifyKey(id, payload): Observable<ChangeStatusInterface> {
    const url = `UserApiKey/${id}`;
    return this.apiService.put(url, payload, true);
  }
}
