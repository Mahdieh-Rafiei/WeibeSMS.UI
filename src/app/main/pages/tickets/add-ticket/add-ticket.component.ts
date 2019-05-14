import {Component, OnInit} from '@angular/core';
import {TicketService} from '../ticket.service';
import {NotificationService} from '../../../../shared/notification.service';
import {Router} from '@angular/router';
import {AddTicketInterface} from './models/add-ticket.interface';
import {AddTicketResponseInterface} from './models/add-ticket-response.interface';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css']
})
export class AddTicketComponent implements OnInit {

  message: string = '';
  title: string = '';
  departmentId: number = 1;
  priorityId: number = 1;

  constructor(private ticketService: TicketService,
              private notificationService: NotificationService,
              private router: Router) {
  }

  ngOnInit() {
  }

  addNewTicket() {
    if (this.message.length === 0) {
      this.notificationService.error('Ticket text cant be null!', '');
      return;
    }
    if (this.title.length === 0) {
      this.notificationService.error('Title cant be null!', '');
      return;
    }
    const payload: AddTicketInterface = {
      Title: this.title,
      Message: this.message,
      DepartmentId: this.departmentId,
      Priority: this.priorityId
    };
    this.ticketService.addTicket(payload)
      .subscribe((res: AddTicketResponseInterface) => {
        this.notificationService.success('Ticket added successfully', '');
        this.router.navigateByUrl('ticket-list');
      });
  }
}
