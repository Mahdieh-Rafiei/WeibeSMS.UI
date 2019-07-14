import {Component, OnInit} from '@angular/core';
import {DraftService} from '../draft.service';
import {RemoveDraftInterface} from '../draft/models/remove-draft.interface';
import {DialogComponent} from '../../../../shared/component/dialog/dialog.component';
import {MatDialog} from '@angular/material';
import {NotificationService} from '../../../../shared/notification.service';
import {TableConfigInterface} from '../../../../shared/component/table/models/table-config.interface';
import {PagingModel} from '../../../../shared/component/table/models/paging-model';
import {Router} from '@angular/router';
import {FilterDataModel} from '../../../../shared/component/filter/filter-data-model';
import {DraftInterface} from '../draft/models/draft.interface';
import {GetDraftsResponseInterface} from '../draft/models/get-drafts-response.interface';

@Component({
    selector: 'app-draft-list',
    templateUrl: './draft-list.component.html',
    styleUrls: ['./draft-list.component.scss']
})

export class DraftListComponent implements OnInit {

    drafts: DraftInterface[] = [];
    tableConfig: TableConfigInterface = {
        pagingModel: new PagingModel(),
        hasRemoveButton: true,
        hasAddOrUpdateButton: true,
        hasShowButton: false,
        hasActions: true,
        rowColumnsConfig: [],
        headersConfig: [
            {hideInResponsive: false, title: 'Id'},
            {hideInResponsive: false, title: 'Name'},
            {hideInResponsive: false, title: 'Message'},
            {hideInResponsive: false, title: 'Send action'},
        ]
    };

    filterDataModel = new FilterDataModel();
    phrase = '';

    constructor(private draftService: DraftService,
                private dialog: MatDialog,
                private notificationService: NotificationService,
                private router: Router) {
    }

    ngOnInit() {
        this.getAllDrafts();
        this.generateRowColumns();
    }

    getAllDrafts() {
        this.draftService.getAllDrafts(this.tableConfig.pagingModel.pageNumber,
            this.tableConfig.pagingModel.pageSize, this.phrase)
            .subscribe((res: GetDraftsResponseInterface) => {
                this.drafts = res.data.items;
                this.tableConfig.pagingModel.totalItemsCount = res.data.totalItemsCount;
            });
    }

    removeDraft(index, draft) {
        this.openDeleteDialog('480px', 'auto', '', {
            modalType: 'deleteDraft',
            modalHeader: 'Delete Draft',
            modalText: 'are you sure to remove this draft?',
            id: draft.id,
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
                    if (result.remove.modalType === 'deleteDraft') {
                        this.draftService.removeDraft(result.remove.data.id)
                            .subscribe((res: RemoveDraftInterface) => {
                                this.drafts.splice(result.remove.data.index, 1);
                                this.notificationService.success('Draft removed successfully', '');
                            });
                    }
                }
            });
    }

    getData(event) {
        this.phrase = event;
        this.getAllDrafts();
    }

    getFilterData(e: FilterDataModel) {
        this.tableConfig.pagingModel.pageSize = e.pageSize;
        this.getAllDrafts();
    }

    generateRowColumns() {
        this.tableConfig.rowColumnsConfig.push({propertyName: 'title', hideInResponsive: false});
        this.tableConfig.rowColumnsConfig.push({propertyName: 'messageText', hideInResponsive: false, hasSummaryDisplay: true});
        this.tableConfig.rowColumnsConfig.push({hideInResponsive: false,
            buttonConfig: {
                classSelector: (value) => {
                    return 'light-blue-btn';
                },
                innerHTMLSelector: (value) => {
                    return 'simple';
                },
                action: (value) => {
                    this.router.navigateByUrl('/send-message');
                }
            }
        });
    }

    showDetail(e) {
        this.router.navigateByUrl(`/draft/${e.id}`);
    }
}
