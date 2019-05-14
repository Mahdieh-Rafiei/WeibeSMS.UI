import {Injectable} from '@angular/core';
import {ApiService} from '../../../shared/api.service';
import {Observable} from 'rxjs';
import {DraftInterface} from './draft/models/draft.interface';
import {AddDraftInterface} from './draft/models/add-draft.interface';
import {AddDraftResponseInterface} from './draft/models/add-draft-response.interface';
import {GetDraftInterface} from './draft/models/get-draft.interface';
import {EditDraftResponseInterface} from './draft/models/edit-draft-response.interface';
import {RemoveDraftInterface} from './draft/models/remove-draft.interface';

@Injectable({
  providedIn: 'root'
})
export class DraftService {

  constructor(private apiService: ApiService) {
  }

  getAllDrafts(pageNumber: number, pageSize: number, phrase: string): Observable<DraftInterface> {
    const url = `userDraftMessage?pageNumber=${pageNumber}&pageSize=${pageSize}`;
    return this.apiService.get(url, true);
  }

  getDraft(id: number): Observable<GetDraftInterface> {
    const url = `UserDraftMessage/${id}`;
    return this.apiService.get(url, true);
  }

  addDraft(payload): Observable<AddDraftResponseInterface> {
    const url = `UserDraftMessage`;
    return this.apiService.post<AddDraftInterface>(url, payload, true);
  }

  modifyDraft(id: number, payload): Observable<EditDraftResponseInterface> {
    const url = `UserDraftMessage/${id}`;
    return this.apiService.put(url, payload, true);
  }

  removeDraft(id: number): Observable<RemoveDraftInterface> {
    const url = `UserDraftMessage/${id}`;
    return this.apiService.delete(url, null, true);
  }
}
