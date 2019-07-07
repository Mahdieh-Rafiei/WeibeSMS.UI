import {Component, OnInit} from '@angular/core';
import {NumbersService} from '../numbers.service';
import {ItemsUserLineInterface} from './models/items-user-line.interface';
import {GetUserLineModelInterface} from './models/get-user-line-model.interface';
import {NotificationService} from '../../../../shared/notification.service';
import {MatDialog} from '@angular/material';
import {EditUserLinesComponent} from './edit-user-lines/edit-user-lines.component';
import {TableConfigInterface} from '../../../../shared/component/table/models/table-config.interface';
import {PagingModel} from '../../../../shared/component/table/models/paging-model';
import {FilterDataModel} from '../../../../shared/component/filter/filter-data-model';
import {SummaryCountryInterface} from './models/summary-country.interface';

@Component({
  selector: 'app-buy-numbers-list',
  templateUrl: './user-lines.component.html',
  styleUrls: ['./user-lines.component.scss']
})

export class UserLinesComponent implements OnInit {
  data: any;

  userLines: ItemsUserLineInterface[] = [];
  phrase = '';

  filterDataModel = new FilterDataModel();
  countries:SummaryCountryInterface[];

  tableConfig: TableConfigInterface = {
    hasManageColumn: true,
    rowColumnsConfig: [],
    pagingModel: new PagingModel(),
    headerNames: ['Id', 'Country', 'Number', 'Next billing date', 'Cost', 'Manage']
  };

  currentIndex: number;

  constructor(private numberService: NumbersService,
              private notificationService: NotificationService,
              private dialog: MatDialog) {
  }

  ngOnInit() {
    this.filterDataModel.fromToDate = true;
    this.filterDataModel.countries = [{
      id:0,
      name:'All'
    }];
    this.numberService.mode = 'yourNumbers';
    this.numberService.getCountriesThatHasLine(false)
      .subscribe(res => {
        res.data.forEach(d => {
          this.filterDataModel.countries.push({id:d.id,name:d.name});
        });
      });

    this.getUserLines();
    this.generateRowColumns();
  }

  getUserLines() {
    this.numberService.getUserLines(this.tableConfig.pagingModel.pageNumber,
      this.tableConfig.pagingModel.pageSize, null, this.phrase,
      this.filterDataModel.fromDate,this.filterDataModel.toDate,this.filterDataModel.countrySelected)
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

  getFilterData(e: FilterDataModel) {
    this.tableConfig.pagingModel.pageSize = e.pageSize;
    this.getUserLines();
  }

  generateRowColumns() {
    this.tableConfig.rowColumnsConfig.push({propertyName: 'countryName'});
    this.tableConfig.rowColumnsConfig.push({propertyName: 'number', sign: '+'});
    this.tableConfig.rowColumnsConfig.push({propertyName: 'expirationDateTime', isDateTime: true});
    this.tableConfig.rowColumnsConfig.push({propertyName: 'cost', sign: '€'});
  }
}
