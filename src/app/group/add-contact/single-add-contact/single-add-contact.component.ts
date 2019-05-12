import {Component, Input, OnInit} from '@angular/core';
import {ContactService} from '../../contact/contact.service';
import {UserEventService} from '../../../user-event/user-event.service';
import {NotificationService} from '../../../shared/notification.service';
import {ActivatedRoute, Router} from '@angular/router';
import {GroupService} from '../../group.service';
import {UserEventResponseInterface} from '../../../user-event/models/user-event-response.interface';
import {AddContactInterface} from './models/add-contact.interface';

@Component({
  selector: 'app-single-add-contact',
  templateUrl: './single-add-contact.component.html',
  styleUrls: ['./single-add-contact.component.css']
})
export class SingleAddContactComponent implements OnInit {

  groupId: number;
  userEvents: any[] = [];
  mobile: string = '';
  firstName: string = '';
  lastName: string = '';
  gender: number = 3;
  email: string = '';

  constructor(private contactService: ContactService,
              private userEventService: UserEventService,
              private notificationService: NotificationService,
              private activatedRoute: ActivatedRoute,
              private groupService: GroupService,
              private router: Router
  ) {
  }

  ngOnInit() {
    this.groupId = parseInt(this.activatedRoute.parent.snapshot.paramMap.get('groupId'));
    this.getUserEvents();
  }

  getUserEvents() {
    this.userEventService.getUserEvents()
      .subscribe((res: UserEventResponseInterface) => {
        console.log(res.data);
        this.userEvents = res.data;
      });
  }

  addContact() {
    if (this.mobile.length === 0) {
      this.notificationService.error(`Phone number cant be null!`, ``);
      return;
    }

    const payload: AddContactInterface = {
      Gender: this.gender,
      FirstName: this.firstName,
      LastName: this.lastName,
      Mobile: this.mobile,
      ContactGroupId: this.groupId,
      Email: this.email
    };

    this.contactService.addContact(payload)
      .subscribe(res => {
        this.notificationService.success('Contact added successfully', '');
        this.router.navigateByUrl(`group/${this.groupId}`);
      });
  }
}
