import {Component, OnInit} from '@angular/core';
import {TicketService} from '../ticket.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NotificationService} from '../../../../shared/notification.service';
import {TicketResponseInterface} from './models/ticket-response.interface';
import {ReplyTicketResponseInterface} from './models/reply-ticket-response.interface';
import {CloseTicketInterface} from './models/close-ticket.interface';

@Component({
  selector: 'app-ticket',
  templateUrl: './single-ticket.component.html',
  styleUrls: ['./single-ticket.component.scss']
})
export class SingleTicketComponent implements OnInit {

  ticket: any;
  id: number;
  replyText: string = '';
  isClosed: boolean = false;
  isReplyMode: boolean = false;
  replys: any[] = [];
  messageRequired: boolean = false;

  constructor(private ticketService: TicketService,
              private activatedRoute: ActivatedRoute,
              private notificationService: NotificationService,
              private router: Router) {
  }

  ngOnInit() {
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.getTicket(this.id);
  }

  getTicket(id) {
    this.ticketService.getTicket(id)
      .subscribe((res: TicketResponseInterface) => {
        this.ticket = res.data;
        this.isClosed = res.data.status === 6;
      });
  }

  sendReply() {
    if (!this.isReplyMode) return;


    if (this.replyText.length === 0) {
      this.messageRequired = true;
      return;
    }
    const payload = {
      Message: this.replyText
    };
    this.ticketService.sendReply(this.id, payload)
      .subscribe((res: ReplyTicketResponseInterface) => {
        this.ticket.ticketReply.push({
          id: res.data,
          isAdmin: false,
          message: this.replyText,
          creationDateTime: Date()
        });
        this.notificationService.success('Reply Message Add Successfully', '');
        this.isReplyMode = false;
        this.isClosed = false;
      });
  }

  closeTicket() {
    this.ticketService.closeTicket(this.id)
      .subscribe((res: CloseTicketInterface) => {
        this.notificationService.success('Ticket closed successfully', '');
        this.isClosed = true;
        this.router.navigateByUrl('ticket/list');
      });
  }
}
