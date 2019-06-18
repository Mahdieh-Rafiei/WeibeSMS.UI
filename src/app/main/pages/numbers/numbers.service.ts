import {ApiService} from '../../../shared/api.service';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {LineResponseInterface} from './lines/models/line.response.interface';
import {AddUserLineResponseInterface} from './lines/models/add-user-line-response.interface';
import {AddUserLineInterface} from './lines/models/add-user-line.interface';
import {UserLineResponseInterface} from './user-lines/models/user-line-response.interface';
import {ModifyUserLineInterface} from './user-lines/models/modify-user-line.interface';
import {ModifyUserLineResponseInterface} from './user-lines/models/modify-user-line-response.interface';

@Injectable({
  providedIn: 'root'
})
export class NumbersService {

  constructor(private apiService: ApiService) {
  }

  public mode:string='yourNumbers';

  getLines(countryId:number): Observable<LineResponseInterface> {
    const url = `line?countryId=${countryId}`;
    return this.apiService.get(url, true);
  }

  buyLine(data:AddUserLineInterface):Observable<AddUserLineResponseInterface> {
    const url = `user/line`;
    return this.apiService.post(url,data,true);
  }

  getUserLines(pageNumber:number,pageSize:number,isActive:boolean, phrase: string):Observable<UserLineResponseInterface> {
    const url = `user/line?pageNumber=${pageNumber}&pageSize=${pageSize}&isActive=${isActive}&searchValue=${phrase}`;
    return this.apiService.get(url,true);
  }

  modifyUserLine(id:number,data:ModifyUserLineInterface) : Observable<ModifyUserLineResponseInterface>{
    const url = `user/line/${id}`;
    return this.apiService.put(url,data,true);
  }

  extendUserLine(id:number){
    const url = `user/line/${id}`;
    return this.apiService.post(url,null,true);
  }

  // getGroup(id: string, pageSize: number, pageNumber: number, phrase: string): Observable<GroupResponseInterface> {
  //   const url = `ContactGroup/${id}?pageSize=${pageSize}&pageNumber=${pageNumber}`;
  //   return this.apiService.get(url, true);
  // }
  //
  // addGroup(data): Observable<AddGroupNameResponseInterface> {
  //   const url = `ContactGroup`;
  //   return this.apiService.post<AddGroupNameInterface>(url, data, true);
  // }
  //
  // modifyGroup(id: number, data): Observable<ModifyGroupNameResponseInterface> {
  //   const url = `ContactGroup/${id}`;
  //   return this.apiService.put<ModifyGroupNameInterface>(url, data, true);
  // }
  //
  // removeGroup(id: number) {
  //   const url = `ContactGroup/${id}`;
  //   return this.apiService.delete<RemoveGroupNameResponseInterface>(url, null, true);
  // }
}
