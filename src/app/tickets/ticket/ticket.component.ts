import { Component, OnInit } from '@angular/core';
import {TicketService} from '../ticket.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NotificationService} from '../../shared/notification.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  ticket:any;
  id:number;
  replyText:string='';
  isClosed:boolean=false;

  constructor(private ticketService:TicketService,
              private activatedRoute:ActivatedRoute,
              private notificationService:NotificationService,
              private router:Router) { }

  ngOnInit() {
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.ticketService.getTicket(this.id)
      .subscribe(res=>{
        console.log(res.data);
        this.ticket = res.data;
        this.isClosed = res.data.status == 6;
      });
  }

  sendReply(){
    if (this.replyText.length == 0){
      this.notificationService.error('Reply text cant be null!','');
      return;
    }

    this.ticketService.sendReply(this.id,this.replyText)
      .subscribe(res=>{
        console.log(res.data);
        this.notificationService.success('Reply Message Add Successfully','');
      });
  }

  closeTicket(){
    this.ticketService.closeTicket(this.id)
       .subscribe(res=>{
         console.log(res);
         this.notificationService.success('Ticket closed successfully','');
         this.router.navigateByUrl(`../Ticket-list`);
       });
  }
}
