import {Injectable} from '@angular/core';
import {ApiService} from '../../../shared/api.service';
import {Observable} from 'rxjs';
import {NotificationResponseInterface} from './list/models/notification-response.interface';
import {GetUserNotificationInterface} from './list/models/get-user-notification.interface';

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

  getUserNotification(id: number): Observable<GetUserNotificationInterface> {
    const url = `Notification/${id}`;
    return this.apiService.get(url, true);
  }
}
