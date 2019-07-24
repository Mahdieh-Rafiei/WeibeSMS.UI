import {Component, OnInit} from '@angular/core';
import {ContactService} from '../single-add-contact/contact.service';
import {GroupService} from '../../group.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-import-contact-from-other-lists',
  templateUrl: './import-contact-from-other-lists.component.html',
  styleUrls: ['./import-contact-from-other-lists.component.scss']
})
export class ImportContactFromOtherListsComponent implements OnInit {

  groupId: number;

  constructor(private contactService: ContactService,
              private groupService: GroupService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.contactService.addMode = 'list';
    const strGroupId = this.activatedRoute.snapshot.paramMap.get('groupId');
    if (strGroupId) {
      this.groupId = parseInt(strGroupId);
    }
  }
}
