import { Injectable } from '@angular/core';
import {ApiService} from '../shared/api.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DraftService {

  constructor(private apiService:ApiService) { }

  getAllDrafts(pageNumber:number,pageSize:number) :Observable<any>{
    return this.apiService.get(`DraftMessage?pageNumber=${pageNumber}&pageSize=${pageSize}`,true);
  }

  getDraft(id:number){
   return this.apiService.get(`DraftMessage/${id}`,true);
  }

  addDraft(title:string,messageText:string){
    let payload = {
      Title:title,
      MessageText:messageText
    };

   return this.apiService.post(`DraftMessage`,payload,true);
  }

  modifyDraft(id:number,title:string,messageText:string){
    let payload ={
      Title: title,
      MessageText:messageText
    };

    return this.apiService.put(`DraftMessage/${id}`,payload,true);
  }

  removeDraft(id:number){
    return this.apiService.delete(`DraftMessage/${id}`,true);
  }
}
