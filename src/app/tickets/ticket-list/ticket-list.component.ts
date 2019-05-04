import { Component, OnInit } from '@angular/core';
import {TicketService} from '../ticket.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {

  tickets:any[];
  pageNumber:number;
  pageSize:number;

  constructor(private ticketService:TicketService) { }

  ngOnInit() {
    this.ticketService.getAllTickets(this.pageNumber,this.pageSize)
      .subscribe(res=>{
        this.tickets = res.Data.Items;
        console.log(res.Data);
      });
  }
}
