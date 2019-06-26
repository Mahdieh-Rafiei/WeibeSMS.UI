import {Component, OnInit} from '@angular/core';
import {NumbersService} from '../numbers.service';
import {ItemsUserLineInterface} from './models/items-user-line.interface';
import {GetUserLineModelInterface} from './models/get-user-line-model.interface';
import {NotificationService} from '../../../../shared/notification.service';
import {MatDialog} from '@angular/material';
import {EditUserLinesComponent} from './edit-user-lines/edit-user-lines.component';
import {TableConfigInterface} from "../../../../shared/component/table/models/table-config.interface";
import {PagingModel} from "../../../../shared/component/table/models/paging-model";

@Component({
    selector: 'app-buy-numbers-list',
    templateUrl: './user-lines.component.html',
    styleUrls: ['./user-lines.scss']
})

export class UserLinesComponent implements OnInit {
    data: any;

    userLines: ItemsUserLineInterface[] = [];
    phrase = '';

    filterData = {};

    tableConfig: TableConfigInterface = {
        hasManageColumn: true,
        rowColumnsConfig: [],
        pagingModel: new PagingModel(),
        headerNames: ['Id', 'Country', 'Number', 'Next billing date', 'Cost','Manage']
    };

    getUserLineModel: GetUserLineModelInterface={
      isActive:null
    };

    currentIndex: number;

    constructor(private numberService: NumbersService,
                private notificationService: NotificationService,
                private dialog: MatDialog) {
    }

    ngOnInit() {
        this.numberService.mode = 'yourNumbers';
        this.getUserLines();
        this.generateRowColumns();
    }

    getUserLines() {
        this.numberService.getUserLines(this.tableConfig.pagingModel.pageNumber, this.tableConfig.pagingModel.pageSize, this.getUserLineModel.isActive, this.phrase)
            .subscribe(res => {
                this.userLines = res.data.items;
                this.tableConfig.pagingModel.totalItemsCount = res.data.totalItemsCount;
            });
    }


    modifyUserLine(data: ItemsUserLineInterface, index) {
        this.currentIndex = index;
        this.openDialog('400px', 'auto', '', {data, index});
    }


    openDialog(width, height, panelClass, data): void {
        const dialogRef = this.dialog.open(EditUserLinesComponent, {
            width,
            height,
            panelClass,
            data
        });

        dialogRef.afterClosed()
            .subscribe(result => {
                if (result && result.status == 2) {
                    this.userLines.splice(this.currentIndex, 1);
                    this.userLines.push(result.data);
                    this.notificationService.success('Line extended successfully', '');
                } else if (result && result.status == 1) {
                    this.notificationService.success('Payment management modified successfully', '');
                }
            });
    }

    getData(event) {
        this.phrase = event;
        this.getUserLines();
    }

    generateRowColumns() {
        this.tableConfig.rowColumnsConfig.push({propertyName: 'countryName'});
        this.tableConfig.rowColumnsConfig.push({propertyName: "number", sign: '+'});
        this.tableConfig.rowColumnsConfig.push({propertyName: "creationDateTime", isDateTime:true});
        this.tableConfig.rowColumnsConfig.push({propertyName: "cost",sign: '€'})
    }

}
