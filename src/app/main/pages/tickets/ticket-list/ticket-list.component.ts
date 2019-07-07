import {Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {TicketService} from '../ticket.service';
import {TicketListResponseModel} from './models/ticket-list-response.model';
import {ItemsTicketListInterface} from './models/items-ticket-list.interface';
import {TableConfigInterface} from '../../../../shared/component/table/models/table-config.interface';
import {PagingModel} from '../../../../shared/component/table/models/paging-model';
import {StatusTranslatorPipe} from '../../../../shared/pipe/status-translator.pipe';
import {Router} from '@angular/router';
import {FilterDataModel} from '../../../../shared/component/filter/filter-data-model';

@Component({
    selector: 'app-ticket-list',
    templateUrl: './ticket-list.component.html',
    styleUrls: ['./ticket-list.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class TicketListComponent implements OnInit {

    tickets: ItemsTicketListInterface[];
    tableConfig: TableConfigInterface = {
        hasActions: true,
        hasShowButton: true,
        headersConfig: [
            {hideInResponsive: false, title: 'Id'},
            {hideInResponsive: false, title: 'Title'},
            {hideInResponsive: false, title: 'Date'},
            {hideInResponsive: false, title: 'Status'},
        ],
        rowColumnsConfig: [],
        pagingModel: new PagingModel()
    };

    phrase = '';

    filterDataModel: FilterDataModel = new FilterDataModel();

    constructor(private ticketService: TicketService,
                private statusTranslatorPipe: StatusTranslatorPipe,
                private router: Router) {
    }

    ngOnInit() {
        this.getAllTickets();
        this.generateRowConfigs();

        this.filterDataModel.fromToDate = true;
        this.filterDataModel.ticketStatusSelected = 0;
        this.filterDataModel.ticketStatuses = [
            {
                title: 'All', value: 0
            },
            {
                title: 'Open', value: 1
            }, {
                title: 'AdminAnswered', value: 2
            }, {
                title: 'UserAnswered', value: 3
            }, {
                title: 'OnHold', value: 4
            }, {
                title: 'OnProgress', value: 5
            }, {
                title: 'Closed', value: 6
            },
        ];
    }

    getAllTickets() {
        this.ticketService.getAllTickets(this.tableConfig.pagingModel.pageNumber,
            this.tableConfig.pagingModel.pageSize, this.phrase, this.filterDataModel.ticketStatusSelected,
            this.filterDataModel.fromDate, this.filterDataModel.toDate)
            .subscribe((res: TicketListResponseModel) => {
                this.tickets = res.data.items;
                this.tableConfig.pagingModel.totalItemsCount = res.data.totalItemsCount;
            });
    }

    getData(event) {
        this.phrase = event;
        this.getAllTickets();
    }

    getFilterData(event: FilterDataModel) {
        debugger;
        this.tableConfig.pagingModel.pageSize = event.pageSize ? event.pageSize : 10;
        this.getAllTickets();
    }

    generateRowConfigs() {
        this.tableConfig.rowColumnsConfig.push({
            propertyName: 'title', hideInResponsive:false,
        });

        this.tableConfig.rowColumnsConfig.push({
            propertyName: 'date', hideInResponsive:false,
            isDateTime: true
        });

        this.tableConfig.rowColumnsConfig.push({
            propertyName: 'status', hideInResponsive:false,
            classSelector: (value) => {
                return value == 1 ? 'green-text' : (value == 6 ? 'red-text' : null);
            },
            manipulationMethod: (value) => {
                return this.statusTranslatorPipe.transform(value);
            }
        });
    }

    showDetail(item: ItemsTicketListInterface) {
        this.router.navigateByUrl(`/ticket/modify/${item.id}`);
    }
}
