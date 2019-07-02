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

    // getAllUserNotifications(pageNumber: number, pageSize: number,fromDate: number, toDate: number,phrase: string, onlyUnread: boolean): Observable<NotificationResponseInterface> {
    getAllUserNotifications(pageNumber: number, pageSize: number, fromDate: number, toDate: number, notificationStatus: any, phrase: string): Observable<NotificationResponseInterface> {
        // const url = `Notification?pageNumber=${pageNumber}&pageSize=${pageSize}&fromDate=${fromDate}&toDate=${toDate}&searchValue=${phrase}&onlyUnread=${onlyUnread}`;
        let url = `Notification?pageNumber=${pageNumber}&pageSize=${pageSize}&fromDate=${fromDate}&toDate=${toDate}&searchValue=${phrase}`;
        // if (notificationStatuses && notificationStatuses != 0) {
        //     url += `&notificationStatuses=${notificationStatuses}`;
        // }
        return this.apiService.get(url, true);
    }

    getUserNotification(id: number): Observable<GetUserNotificationInterface> {
        const url = `Notification/${id}`;
        return this.apiService.get(url, true);
    }
}
