import {Injectable} from '@angular/core';
import {ApiService} from '../../../shared/api.service';
import {Observable} from 'rxjs';
import {UserEventResponseInterface} from './models/user-event-response.interface';
import {AddUserEventInterface} from './add-edit/models/add-user-event.interface';
import {EditUserEventResponseInterface} from './add-edit/models/edit-user-event-response.interface';
import {AddUserEventResponseInterface} from './add-edit/models/add-user-event-response.interface';
import {RemoveUserEventInterface} from './models/remove-user-event.interface';
import {RemoveUserEventResponseInterface} from './models/remove-user-event-response.interface';

@Injectable({
  providedIn: 'root'
})
export class UserEventService {

  constructor(private apiService: ApiService) {
  }

  getUserEvents(pageNumber: number, pageSize: number, phrase: string): Observable<UserEventResponseInterface> {
    const url = `EventUser?pageSize=${pageSize}&pageNumber=${pageNumber}&searchValue=${phrase}`;
    return this.apiService.get(url, true);
  }

  addUserEvent(payload): Observable<AddUserEventResponseInterface> {
    const url = `EventUser`;
    return this.apiService.post<AddUserEventInterface>(url, payload, true);
  }

  modifyUserEvent(id: number, payload): Observable<EditUserEventResponseInterface> {
    const url = `EventUser/${id}`;
    return this.apiService.put(url, payload, true);
  }

  removeUserEvent(id: number, payload): Observable<RemoveUserEventResponseInterface> {
    const url = `EventUser/${id}`;
    return this.apiService.delete<RemoveUserEventInterface>(url, payload, true);
  }
}
