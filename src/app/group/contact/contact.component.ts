import { Component, OnInit } from '@angular/core';
import {ContactService} from './contact.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  id:string;
  contact:any;

  constructor(private contactService:ContactService,
              private activatedRoute:ActivatedRoute) { }


  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.contact = this.contactService.getContact(this.id)
      .subscribe(res => this.contact = res.Data);
  }

  // modifyContact(){
  //   this.contactService.modifyContact()
  // }
}
