import {Component, OnInit} from '@angular/core';
import {ContactService} from './contact.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ModifyContactInterface} from '../add-contact/single-add-contact/models/modify-contact.interface';
import {RemoveContactInterface} from './models/remove-contact.interface';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
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
    const payload: ModifyContactInterface = {
      Gender: this.contact.gender,
      FirstName: this.contact.firstName,
      LastName: this.contact.lastName,
      ContactGroupId: this.contact.id,
      Email: this.contact.email
    };
    this.contactService.modifyContact(this.contact.id, payload)
      .subscribe(res => {
        console.log(res);
        this.router.navigateByUrl(`group/${this.groupId}`);
      });
  }

  deleteContact() {
    this.contactService.removeContact(this.contact.id)
      .subscribe((res: RemoveContactInterface) => {
        console.log(res);
        this.router.navigateByUrl(`group/${this.groupId}`);
      });
  }

}
