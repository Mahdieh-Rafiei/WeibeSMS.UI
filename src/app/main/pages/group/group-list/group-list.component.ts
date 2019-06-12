import {Component, OnInit} from '@angular/core';
import {GroupService} from '../group.service';
import {Router} from '@angular/router';
import {UtilityService} from '../../../../shared/utility.service';
import {NotificationService} from '../../../../shared/notification.service';
import {GroupListInterface} from './models/group-list.interface';
import {RemoveGroupNameResponseInterface} from './models/remove-group-name-response.interface';
import {MatDialog} from '@angular/material';
import {AddEditGroupComponent} from './add-edit/add-edit-group.component';
import {ItemsGroupListInterface} from './models/items-group-list.interface';
import {errorAnimation} from "../../../../shared/component/animation/error-animation";

@Component({
    selector: 'app-group-list',
    templateUrl: './group-list.component.html',
    styleUrls: ['./group-list.component.scss'],
    animations: [
        errorAnimation()
    ],
})

export class GroupListComponent implements OnInit {

    pageNumber: number = 1;
    pageSize: number = 10;
    data: any;
    groups: ItemsGroupListInterface[] = [];
    currentGroup: any;
    totalItemsCount: number;
    phrase = '';

    groupName: string = '';

    constructor(private groupService: GroupService,
                private router: Router,
                private utilityService: UtilityService,
                private dialog: MatDialog,
                private ns: NotificationService,
                private notificationService: NotificationService) {
    }

    ngOnInit() {
        this.getAllGroupList();
    }

    getAllGroupList() {
        this.groupService.getAllGroupList(this.pageSize, this.pageNumber, this.phrase)
            .subscribe((res: GroupListInterface) => {
                this.data = res.data;
                this.groups = this.data.items;
                this.totalItemsCount = this.data.totalItemsCount;
            });
    }

    removeGroup(index, group) {

        this.currentGroup = group;

        if (this.currentGroup == null) return;

        this.groupService.removeGroup(this.currentGroup.id)
            .subscribe((res: RemoveGroupNameResponseInterface) => {
                this.groups.splice(index, 1);
                this.notificationService.success('Group removed successfully', '');
            });
    }

    getDataWithSearch() {
        this.pageNumber = 1;
        this.getAllGroupList();
    }

    doPaging(e) {
        this.pageNumber = e;
        this.getAllGroupList();
    }

    addEditGroup(data: ItemsGroupListInterface, index) {
        this.openDialog('480px', 'auto', '', {data, index});
    }


    openDialog(width, height, panelClass, data): void {
        const dialogRef = this.dialog.open(AddEditGroupComponent, {
            width,
            height,
            panelClass,
            data
        });

        dialogRef.afterClosed()
            .subscribe(result => {
                if (result && result.addGroup) {
                    const id = result.addGroup.id;
                    this.notificationService.success('New group added successfully', '');
                    this.router.navigateByUrl(`group/${id}/add-contact/single-contact`);
                } else if (result && result.editGroup) {
                    this.groups[result.editGroup.index].groupName = result.editGroup.groupName;
                    this.notificationService.success('Group modified successfully', '');
                }
            });
    }
}

