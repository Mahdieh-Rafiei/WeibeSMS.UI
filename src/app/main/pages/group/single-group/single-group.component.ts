import {Component, OnInit} from '@angular/core';
import {GroupService} from '../group.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactService} from '../add-contact/single-add-contact/contact.service';
import {GroupResponseInterface} from '../models/group-response.interface';
import {RemoveContactFormGroupInterface} from '../models/remove-contact-form-group.interface';
import {DialogComponent} from '../../../../shared/component/dialog/dialog.component';
import {fadeInContent, MatDialog} from '@angular/material';
import {NotificationService} from '../../../../shared/notification.service';
import {TableConfigInterface} from '../../../../shared/component/table/models/table-config.interface';
import {PagingModel} from '../../../../shared/component/table/models/paging-model';
import {FilterDataModel} from '../../../../shared/component/filter/filter-data-model';

@Component({
    selector: 'app-sub-group',
    templateUrl: './single-group.component.html',
    styleUrls: ['./single-group.component.scss']
})
export class SingleGroupComponent implements OnInit {

    tableConfig: TableConfigInterface = {
        pagingModel: new PagingModel(),
        rowColumnsConfig: [],
        headersConfig: [
            {hideInResponsive: false, title: 'Id'},
            {hideInResponsive: false, title: 'Phone number'},
            {hideInResponsive: false, title: 'Name'},
            {hideInResponsive: false, title: 'Surename'},
            {hideInResponsive: true, title: 'email'},
        ],
        hasActions: true,
        hasRemoveButton: true,
        hasAddOrUpdateButton: true
    };

    filterDataModel = new FilterDataModel();
    group: any;
    groupId: string;
    contacts: any[];
    phrase = '';

    constructor(private groupService: GroupService,
                private activatedRoute: ActivatedRoute,
                private contactService: ContactService,
                private dialog: MatDialog,
                private notificationService: NotificationService,
                private router: Router) {
    }

    ngOnInit() {
        this.groupId = this.activatedRoute.snapshot.paramMap.get('groupId');
        this.generateRowColumns();
        this.getGroup();
    }

    getGroup() {
        this.groupService.getGroup(this.groupId, this.tableConfig.pagingModel.pageSize,
            this.tableConfig.pagingModel.pageNumber, this.phrase)
            .subscribe((res: GroupResponseInterface) => {
                this.group = res.data;
                this.contacts = res.data.contacts.items;
                this.tableConfig.pagingModel.totalItemsCount = res.data.contacts.totalItemsCount;
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
                        this.groupService.removeContactFromGroup(this.groupId, result.remove.data.id)
                            .subscribe((res: RemoveContactFormGroupInterface) => {
                                this.contacts.splice(result.remove.data.index, 1);
                                this.notificationService.success('Contact removed successfully', '');
                            });
                    }
                }
            });
    }

    getData(e) {
        this.phrase = e;
        this.getGroup();
    }

    export(e) {
        const ids: number[] = [];
        if (e.target.value == 1) {
            this.contacts.forEach(t => {
                ids.push(t.id);
            });
        }
        this.groupService.getContactsExcel(this.groupId, ids)
            .subscribe(res => {
                window.open(res.data, '_blank');
            });
    }

    generateRowColumns() {
        this.tableConfig.rowColumnsConfig.push({
            propertyName: 'mobile',
            sign: '+',
            hideInResponsive: false
        });

        this.tableConfig.rowColumnsConfig.push({
            propertyName: 'firstName',
            hideInResponsive: false
        });

        this.tableConfig.rowColumnsConfig.push({
            propertyName: 'lastName',
            hideInResponsive: false
        });

        this.tableConfig.rowColumnsConfig.push({
            propertyName: 'email',
            hideInResponsive: true
        });
    }

    showDetail(item) {
        this.router.navigateByUrl(`/group/${this.groupId}/contact/${item.id}`);
    }

    getFilterData(e: FilterDataModel) {
        this.tableConfig.pagingModel.pageSize = e.pageSize;
        this.getGroup();
    }
}
