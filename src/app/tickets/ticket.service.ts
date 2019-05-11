import {Injectable} from '@angular/core';
import {ApiService} from '../shared/api.service';
import {Observable} from 'rxjs';
import {TicketListResponseModel} from './ticket-list/models/ticket-list-response.model';
import {TicketResponseInterface} from './ticket/models/ticket-response.interface';
import {AddTicketInterface} from './add-ticket/models/add-ticket.interface';
import {AddTicketResponseInterface} from './add-ticket/models/add-ticket-response.interface';
import {ReplyTicketInterface} from './ticket/models/reply-ticket.interface';
import {ReplyTicketResponseInterface} from './ticket/models/reply-ticket-response.interface';
import {CloseTicketInterface} from './ticket/models/close-ticket.interface';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private apiService: ApiService) {
  }

  getAllTickets(pageNumber: number, pageSize: number): Observable<TicketListResponseModel> {
    const url = `Ticket`;
    return this.apiService.get(url, true);
  }

  getTicket(id: number): Observable<TicketResponseInterface> {
    const url = `Ticket/${id}`;
    return this.apiService.get(url, true);
  }

  addTicket(payload): Observable<AddTicketResponseInterface> {
    const url = `Ticket`;
    return this.apiService.post<AddTicketInterface>(url, payload, true);
  }

  sendReply(id: number, payload): Observable<ReplyTicketResponseInterface> {
    const url = `Ticket/${id}`;
    return this.apiService.post<ReplyTicketInterface>(url, payload, true);
  }

  closeTicket(id: number): Observable<CloseTicketInterface> {
    const url = `Ticket/${id}`;
    return this.apiService.put(url, null, true);
  }
}
