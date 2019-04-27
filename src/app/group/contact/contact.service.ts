import { Injectable } from '@angular/core';
import {ApiService} from '../../shared/api.service';
import {Observable} from 'rxjs';
import {assertNumber} from '@angular/core/src/render3/assert';
import {reflectTypeEntityToDeclaration} from '@angular/compiler-cli/src/ngtsc/metadata';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private apiService:ApiService) { }

  getAllContacts(groupId:number) : Observable<any>{
    return this.apiService.get('Contact',true);
  }

  getContact(contactId:number) : Observable<any>{
    return this.apiService.get(`Contact/${contactId}`,true);
  }

  AddContact(groupId:number,firstName:string,lastName:string,mobile:string,gender:number,email:string){
    let payload={
      'Gender':gender,
      'FirstName':firstName,
      'LastName':lastName,
      'Mobile':mobile,
      'ContactGroupId': groupId,
      'Email':email
    };

    return this.apiService.post(`Contact`,payload,true);
  }

  modifyContact(groupId:number,contactId:number,number,firstName:string,lastName:string,mobile:string,email:string,gender:number):Observable<any>{
    let payload={
      'Gender':gender,
      'FirstName':firstName,
      'LastName':lastName,
      'Mobile':mobile,
      'ContactGroupId': groupId,
      'Email':email
    };

    return this.apiService.put(`Contact/${contactId}`,payload,true);
  }

  removeContact(contactId:number):Observable<any>{
    return this.apiService.delete(`Contact/${contactId}`,true);
  }
}
