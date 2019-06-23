import {Component, OnInit} from '@angular/core';
import {GroupService} from '../group.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactService} from '../add-contact/single-add-contact/contact.service';
import {GroupResponseInterface} from '../models/group-response.interface';
import {RemoveContactFormGroupInterface} from '../models/remove-contact-form-group.interface';
import {GroupListInterface} from "../group-list/models/group-list.interface";
import {RemoveGroupNameResponseInterface} from "../group-list/models/remove-group-name-response.interface";
import {DialogComponent} from "../../../../shared/component/dialog/dialog.component";
import {MatDialog} from "@angular/material";
import {NotificationService} from "../../../../shared/notification.service";
import {DataGroupInterface} from "../models/data-group.interface";

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
                private contactService: ContactService,
                private dialog: MatDialog,
                private ns: NotificationService,
                private notificationService: NotificationService) {
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

    removeFromGroup(index, contact) {
        this.openDeleteDialog('480px', 'auto', '', {
            modalType: 'deleteContact',
            modalHeader: 'Delete contact',
            modalText: 'are you sure to remove this contact?',
            id: contact.id,
            index
        });
    }

    openDeleteDialog(width, height, panelClass, data): void {
        const dialogRef = this.dialog.open(DialogComponent, {
            width,
            height,
            panelClass,
            data
        });

        dialogRef.afterClosed()
            .subscribe(result => {
                if (result && result.remove) {
                    if (result.remove.modalType === 'deleteContact') {
                        // this.groupService.removeContactFromGroup(this.groupId,)
                        this.groupService.removeContactFromGroup(this.groupId,result.remove.data.id)
                            .subscribe((res: RemoveContactFormGroupInterface) => {
                                this.contacts.splice(result.remove.data.index, 1);
                                this.notificationService.success('Contact removed successfully', '');
                            });
                    }
                }
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
