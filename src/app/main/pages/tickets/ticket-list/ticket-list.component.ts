import {Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {TicketService} from '../ticket.service';
import {TicketListResponseModel} from './models/ticket-list-response.model';
import {ItemsTicketListInterface} from './models/items-ticket-list.interface';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TicketListComponent implements OnInit {

  tickets: ItemsTicketListInterface[];
  pageNumber: number = 1;
  pageSize: number = 10;
  totalItemsCount: number;
  phrase = '';

  constructor(private ticketService: TicketService) {
  }

  ngOnInit() {
    this.getAllTickets();
  }

  getAllTickets() {
    this.ticketService.getAllTickets(this.pageNumber, this.pageSize, this.phrase)
      .subscribe((res: TicketListResponseModel) => {
        this.tickets = res.data.items;
        this.totalItemsCount = res.data.totalItemsCount;
      });
  }

  getDataWithSearch() {
    this.pageNumber = 1;
    this.getAllTickets();
  }

  doPaging(e) {
    this.pageNumber = e;
    this.getAllTickets();
  }

  getData(event) {
    this.phrase = event;
    this.getAllTickets();
  }

}
