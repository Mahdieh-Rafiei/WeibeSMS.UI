import {Injectable} from '@angular/core';
import {ApiService} from '../../../shared/api.service';
import {Observable} from 'rxjs';
import {UserEventResponseInterface} from './models/user-event-response.interface';
import {AddUserEventInterface} from './models/add-user-event.interface';
import {EditUserEventResponseInterface} from './models/edit-user-event-response.interface';
import {AddUserEventResponseInterface} from './models/add-user-event-response.interface';
import {RemoveUserEventInterface} from './models/remove-user-event.interface';
import {RemoveUserEventResponseInterface} from './models/remove-user-event-response.interface';

@Injectable({
  providedIn: 'root'
})
export class UserEventService {

  constructor(private apiService: ApiService) {
  }

  getUserEvents(): Observable<UserEventResponseInterface> {
    const url = `UserEvent`;
    return this.apiService.get(url, true);
  }

  addUserEvent(payload): Observable<AddUserEventResponseInterface> {
    const url = `UserEvent`;
    return this.apiService.post<AddUserEventInterface>(url, payload, true);
  }

  modifyUserEvent(id: number, payload): Observable<EditUserEventResponseInterface> {
    const url = `UserEvent/${id}`;
    return this.apiService.put(url, payload, true);
  }

  removeUserEvent(id: number, payload): Observable<RemoveUserEventResponseInterface> {
    const url = `UserEvent/${id}`;
    return this.apiService.delete<RemoveUserEventInterface>(url, payload, true);
  }
}
