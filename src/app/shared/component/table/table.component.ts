import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TableConfigInterface} from './models/table-config.interface';
import {RowColumnConfigInterface} from './models/row-column-config.interface';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

    @Input() tableConfig: TableConfigInterface;
    @Input() collection: any[];
    @Output() pagingModelChanged: EventEmitter<any> = new EventEmitter<any>();
    @Output() itemRemoved: EventEmitter<any> = new EventEmitter<any>();
    @Output() editItemClicked: EventEmitter<any> = new EventEmitter<any>();
    @Output() itemSelected: EventEmitter<any> = new EventEmitter<any>();
    @Output() manageButtonClicked: EventEmitter<any> = new EventEmitter<any>();


    constructor() {
    }


    ngOnInit() {
    }

    doPaging(e) {
        this.tableConfig.pagingModel.pageNumber = e;
        this.pagingModelChanged.emit();
    }

    removeItem(index: number, item: any) {
        this.itemRemoved.emit({index, item});
    }

    showItem(item: any) {
        this.itemSelected.emit({item});
    }

    editItem(index: number, item: any) {
        this.editItemClicked.emit({index, item});
    }

    manageItem(index: number, item: any) {
        this.manageButtonClicked.emit({item, index});
    }


}
