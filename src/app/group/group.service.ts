import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiService} from '../shared/api.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private apiService :ApiService) { }

  getAll(pageSize:number,pageNumber:number) : Observable<any>{
    return this.apiService.get('ContactGroup',true);
  }

  getGroup(id:string) :Observable<any>{
    return this.apiService.get(`ContactGroup/${id}`,true);
  }

  addGroup(groupName:string) : Observable<any>{
    let payload={
      'GroupName':groupName
    };

    return this.apiService.post('ContactGroup',payload,true);
  }

  modifyGroup(id:number,groupName:string){
    let payload={
      'GroupName':groupName
    };

    return this.apiService.put(`ContactGroup/${id}`,payload,true)
  }

  removeGroup(id:number){
    return this.apiService.delete(`ContactGroup/${id}`,true)
  }
}
