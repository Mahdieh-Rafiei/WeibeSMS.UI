import {Injectable} from '@angular/core';
import {ApiService} from '../../../shared/api.service';
import {Observable} from 'rxjs';
import {AddDraftInterface} from './draft/models/add-draft.interface';
import {AddDraftResponseInterface} from './draft/models/add-draft-response.interface';
import {EditDraftResponseInterface} from './draft/models/edit-draft-response.interface';
import {RemoveDraftInterface} from './draft/models/remove-draft.interface';
import {GetDraftResponseInterface} from './draft/models/get-draft-response.interface';
import {GetDraftsResponseInterface} from './draft/models/get-drafts-response.interface';

@Injectable({
  providedIn: 'root'
})
export class DraftService {

  constructor(private apiService: ApiService) {
  }

  getAllDrafts(pageNumber: number, pageSize: number, phrase: string): Observable<GetDraftsResponseInterface> {
    const url = `DraftMessage?pageNumber=${pageNumber}&pageSize=${pageSize}&searchValue=${phrase}`;
    return this.apiService.get(url, true);
  }

  getDraft(id: number): Observable<GetDraftResponseInterface> {
    const url = `DraftMessage/${id}`;
    return this.apiService.get(url, true);
  }

  addDraft(payload): Observable<AddDraftResponseInterface> {
    const url = `DraftMessage`;
    return this.apiService.post<AddDraftInterface>(url, payload, true);
  }

  modifyDraft(id: number, payload): Observable<EditDraftResponseInterface> {
    const url = `DraftMessage/${id}`;
    return this.apiService.put(url, payload, true);
  }

  removeDraft(id: number): Observable<RemoveDraftInterface> {
    const url = `DraftMessage/${id}`;
    return this.apiService.delete(url, null, true);
  }
}
