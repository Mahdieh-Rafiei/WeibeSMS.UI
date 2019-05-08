import { Injectable } from '@angular/core';
import {ApiService} from '../shared/api.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiService:ApiService) { }

  changePassword(oldPassword:string,newPassword:string):Observable<any>{
    debugger;
    let payload = {
      OldPassword:oldPassword,
      NewPassword:newPassword
    };

    return this.apiService.post(`User/ChangePassword`,payload,true);
  }

  profile(){

  }
}
