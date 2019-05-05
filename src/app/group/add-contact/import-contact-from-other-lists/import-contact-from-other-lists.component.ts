import { Component, OnInit } from '@angular/core';
import {ContactService} from '../../contact/contact.service';
import {NotificationService} from '../../../shared/notification.service';
import {GroupService} from '../../group.service';

@Component({
  selector: 'app-import-contact-from-other-lists',
  templateUrl: './import-contact-from-other-lists.component.html',
  styleUrls: ['./import-contact-from-other-lists.component.css']
})
export class ImportContactFromOtherListsComponent implements OnInit {

  isCollapsed = false;
  groups:any[];


  constructor(private contactService:ContactService,
              private groupService:GroupService,
              private notificationService:NotificationService) { }

  ngOnInit() {
  }


}
