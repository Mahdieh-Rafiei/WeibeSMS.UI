import { Injectable } from '@angular/core';
import {ApiService} from '../shared/api.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ForgotPasswordService {

  constructor(private apiService:ApiService) { }

  sendVerificationCode(mobile:string) : Observable<any >{
    let payload={
      'Mobile':mobile,
      'SendVerificationReason':2
    };

    return this.apiService.post('user/sendVerificationCode',payload,false);
  }

  verify(mobile:string,verificationCode:string,key:string) : Observable<any >{
    debugger;
    let payload = {
      'Key':  key,
      'Mobile':mobile,
      'VerificationCode':verificationCode
    };

    return this.apiService.post('user/verifyMobile',payload,false);
  }

  changePassword(password:string):Observable<any>{
    debugger;
    let payload = {
      'Password':password
    };

    return this.apiService.post('user/changePassword',payload,true);
  }
}
