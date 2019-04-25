import { Injectable } from '@angular/core';
import {ApiService} from '../shared/api.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private apiService:ApiService) {
  }

  sendVerificationCode(mobile:number) : Observable<any>{
    return this.apiService.post(`User/SendVerificationCode`,{'mobile':mobile,'sendVerificationReason':1},false);
  }

  verifyMobile(key:string,mobile:string,verificationCode:string) : Observable<any>{
    let payload={
      'Key':key,
      'Mobile':mobile.toString(),
      'VerificationCode':verificationCode.toString()
    };

    return this.apiService.post(`User/VerifyMobile`,payload,false)
  }

  saveInfo(firstName:string,lastName:string,email:string,userName:string,password:string) :Observable<any>{
    let payload={
      'FirstName':firstName,
      'LastName':lastName,
      'username':userName,
      'Password':password,
      'email':email
    };

    return this.apiService.post(`User/SaveInfo`,payload,true);
  }
}
