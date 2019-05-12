import {Component, OnInit} from '@angular/core';
import {ContactService} from './contact.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactId: string;
  contact: any;
  groupId: string;

  constructor(private contactService: ContactService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.contactId = this.activatedRoute.snapshot.paramMap.get('contactId');
    this.groupId = this.activatedRoute.snapshot.paramMap.get('groupId');
    this.getContact();
  }

  getContact() {
    this.contact = this.contactService.getContact(this.contactId)
      .subscribe(res => {
        this.contact = res.data;
      });
  }

  modifyContact() {
    this.contactService.modifyContact(this.contact.contactGroupId, this.contact.id,
      this.contact.firstName, this.contact.lastName, this.contact.email, this.contact.gender)
      .subscribe(res => {
        console.log(res);
        this.router.navigateByUrl(`group/${this.groupId}`);
      });
  }

  deleteContact() {
    this.contactService.removeContact(this.contact.Id)
      .subscribe(res => {
        console.log(res);
        this.router.navigateByUrl(`group/${this.groupId}`);
      });
  }

}
