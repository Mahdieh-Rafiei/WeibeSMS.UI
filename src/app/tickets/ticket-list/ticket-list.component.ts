import {Component, OnInit} from '@angular/core';
import {TicketService} from '../ticket.service';
import {TicketListResponseModel} from './models/ticket-list-response.model';
import {ItemsTicketListInterface} from './models/items-ticket-list.interface';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {

  tickets: ItemsTicketListInterface[];
  pageNumber: number;
  pageSize: number;

  constructor(private ticketService: TicketService) {
  }

  ngOnInit() {
    this.getAllTickets(this.pageNumber, this.pageSize);
  }

  getAllTickets(pageNumber, pageSize) {
    this.ticketService.getAllTickets(pageNumber, pageSize)
      .subscribe((res: TicketListResponseModel) => {
        this.tickets = res.data.items;
      });
  }
}
