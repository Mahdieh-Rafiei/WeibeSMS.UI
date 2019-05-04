import { Injectable } from '@angular/core';
import {ApiService} from '../shared/api.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserEventService {

  constructor(private apiService:ApiService) { }

  getUserEvents() :Observable<any>{
    return this.apiService.get(`UserEvent`,true);
  }

  addUserEvent(name) : Observable<any> {
    let payload={
      Name:name
    };

    return this.apiService.post(`UserEvent`,payload,true);
  }

  modifyUserEvent(id:number,name:string) :Observable<any>{
    let payload = {
      Name:name
    };

    return this.apiService.put(`UserEvent/${id}`,payload,true);
  }

  removeUserEvent(id:number):Observable<any>{
    debugger;
    return this.apiService.delete(`UserEvent/${id}`,true);
  }
}
