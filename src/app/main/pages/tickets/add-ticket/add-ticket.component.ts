import {Component, OnInit} from '@angular/core';
import {TicketService} from '../ticket.service';
import {NotificationService} from '../../../../shared/notification.service';
import {Router} from '@angular/router';
import {AddTicketInterface} from './models/add-ticket.interface';
import {AddTicketResponseInterface} from './models/add-ticket-response.interface';
import {errorAnimation} from '../../../../shared/component/animation/error-animation';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.scss'],
  animations: [
    errorAnimation()
  ]
})
export class AddTicketComponent implements OnInit {

  message: string = '';
  title: string = '';
  departmentId: number = 1;
  priorityId: number = 1;
  titleRequired: boolean = false;
  messageRequired: boolean = false;

  constructor(private ticketService: TicketService,
              private notificationService: NotificationService,
              private router: Router) {
  }

  addNewTicket() {
    if (this.message.length === 0) {
      this.messageRequired = true;
      // this.notificationService.error('Ticket text cant be null!', '');
    }
    if (this.title.length === 0) {
      this.titleRequired = true;
      // this.notificationService.error('Title cant be null!', '');
    }
    const payload: AddTicketInterface = {
      Title: this.title,
      Message: this.message,
      DepartmentId: this.departmentId,
      Priority: this.priorityId
    };
    if (this.title.length > 0 && this.message.length > 0) {
      this.ticketService.addTicket(payload)
        .subscribe((res: AddTicketResponseInterface) => {
          this.notificationService.success('Ticket added successfully', '');
          this.router.navigateByUrl('/ticket/list');
        });
    }
  }

  ngOnInit() {
  }
}
