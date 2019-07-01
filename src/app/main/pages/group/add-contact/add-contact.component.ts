import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ContactService} from './single-add-contact/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute,
              private contactService : ContactService) {
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('groupId');
  }
}
