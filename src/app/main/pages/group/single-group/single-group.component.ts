import {Component, OnInit} from '@angular/core';
import {GroupService} from '../group.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactService} from '../add-contact/single-add-contact/contact.service';
import {GroupResponseInterface} from '../models/group-response.interface';
import {RemoveContactFormGroupInterface} from '../models/remove-contact-form-group.interface';

@Component({
    selector: 'app-sub-group',
    templateUrl: './single-group.component.html',
    styleUrls: ['./single-group.component.scss']
})
export class SingleGroupComponent implements OnInit {

    group: any;
    groupId: string;
    contacts: any[];
    pageNumber: number = 1;
    pageSize: number = 10;
    totalItemsCount: number;
    phrase = '';

    constructor(private groupService: GroupService,
                private activatedRoute: ActivatedRoute,
                private contactService: ContactService) {
    }

    ngOnInit() {
        this.groupId = this.activatedRoute.snapshot.paramMap.get('groupId');
        this.getGroup();
    }

    getGroup() {
        this.groupService.getGroup(this.groupId, this.pageSize, this.pageNumber, this.phrase)
            .subscribe((res: GroupResponseInterface) => {
                this.group = res.data;
                this.contacts = res.data.contacts.items;
                this.totalItemsCount = res.data.contacts.totalItemsCount;
            });
    }

    removeFromGroup(contact, index) {
        this.contactService.removeContactFromGroup(this.group.id, contact.id)
            .subscribe((res: RemoveContactFormGroupInterface) => {
                console.log(res);
                this.contacts.splice(index, 1);
            });
    }

    getDataWithSearch() {
        this.pageNumber = 1;
        this.getGroup();
    }

    doPaging(e) {
        this.pageNumber = e;
        this.getGroup();
    }

    getData(event) {
        this.phrase = event;
        this.getGroup();
    }
}
