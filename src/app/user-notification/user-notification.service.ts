import { Injectable } from '@angular/core';
import {ApiService} from '../shared/api.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserNotificationService {

  constructor(private apiService:ApiService) { }

  getAllUserNotifications(pageNumber:number,pageSize:number,onlyUnread:boolean) : Observable<any>{
    return this.apiService.get(`Notification?pageNumber=${pageNumber}&pageSize=${pageSize}&onlyUnread=${onlyUnread}`,true);
  }

  getUserNotification(id:number) :Observable<any>{
    return this.apiService.get(`Notification/${id}`,true);
  }
}
