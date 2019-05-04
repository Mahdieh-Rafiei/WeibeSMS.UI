import { Injectable } from '@angular/core';
import {ApiService} from '../shared/api.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private apiService:ApiService) { }

  getAllTickets(pageNumber:number,pageSize:number) : Observable<any>{
    return this.apiService.get(`Ticket`,true);
  }

  getTicket(id:number){
    return this.apiService.get(`Ticket/${id}`,true);
  }

  addTicket(title:string,message:string,departmentId:number,priority:number){
    let payload={
      Title:title,
      Message:message,
      DepartmentId:departmentId,
      Priority:priority
    };
    return this.apiService.post(`Ticket`,payload,true);
  }

   sendReply(id:number,replyText:string) : Observable<any>{
    let payload={
      Message:replyText
    };

    return this.apiService.post(`Ticket/${id}`,payload,true);
   }

   closeTicket(id:number):Observable<any>{
    return this.apiService.put(`Ticket/${id}`,null,true);
   }
}
