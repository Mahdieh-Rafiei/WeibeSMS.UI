import {Injectable} from '@angular/core';
import {ApiService} from '../shared/api.service';
import {Observable} from 'rxjs';
import {NotificationResponseInterface} from './models/notification-response.interface';

@Injectable({
  providedIn: 'root'
})
export class UserNotificationService {

  constructor(private apiService: ApiService) {
  }

  getAllUserNotifications(pageNumber: number, pageSize: number, onlyUnread: boolean): Observable<NotificationResponseInterface> {
    const url = `Notification?pageNumber=${pageNumber}&pageSize=${pageSize}&onlyUnread=${onlyUnread}`;
    return this.apiService.get(url, true);
  }

  getUserNotification(id: number): Observable<any> {
    return this.apiService.get(`Notification/${id}`, true);
  }
}
