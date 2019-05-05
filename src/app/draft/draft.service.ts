import { Injectable } from '@angular/core';
import {ApiService} from '../shared/api.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DraftService {

  constructor(private apiService:ApiService) { }

  getAllDrafts(pageNumber:number,pageSize:number) :Observable<any>{
    debugger;
    return this.apiService.get(`userDraftMessage?pageNumber=${1}&pageSize=${10}`,true);
  }

  getDraft(id:number):Observable<any>{
   return this.apiService.get(`UserDraftMessage/${id}`,true);
  }

  addDraft(title:string,messageText:string) : Observable<any>{
    let payload = {
      Title:title,
      MessageText:messageText
    };

   return this.apiService.post(`UserDraftMessage`,payload,true);
  }

  modifyDraft(id:number,title:string,messageText:string) :Observable<any>{
    let payload ={
      Title: title,
      MessageText:messageText
    };

    return this.apiService.put(`UserDraftMessage/${id}`,payload,true);
  }

  removeDraft(id:number) :Observable<any>{
    return this.apiService.delete(`UserDraftMessage/${id}`,null,true);
  }
}
