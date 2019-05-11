import {TicketReplyInterface} from './ticket-reply.interface';

export interface DataTicketInterface {
  authorName: string;
  date: Date;
  id: number;
  message: string;
  status: number;
  ticketReply: TicketReplyInterface[];
  title: string;
}
