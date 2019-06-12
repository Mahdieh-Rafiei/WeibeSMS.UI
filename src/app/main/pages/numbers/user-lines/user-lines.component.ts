import { Component, OnInit } from '@angular/core';
import {NumbersService} from '../numbers.service';
import {ItemsUserLineInterface} from './models/items-user-line.interface';
import {GetUserLineModelInterface} from './models/get-user-line-model.interface';
import {NotificationService} from '../../../../shared/notification.service';
import {MatDialog} from '@angular/material';
import {EditUserLinesComponent} from './edit-user-lines/edit-user-lines.component';

@Component({
  selector: 'app-buy-numbers-list',
  templateUrl: './user-lines.component.html',
  styleUrls: ['./user-lines.scss']
})

export class UserLinesComponent implements OnInit {

  getUserLineModel: GetUserLineModelInterface;
  userLines: ItemsUserLineInterface[];
  totalItemsCount;
  currentIndex:number;

  constructor(private numberService: NumbersService,
              private notificationService: NotificationService,
              private dialog: MatDialog) {
  }

  ngOnInit() {
    this.getUserLineModel = {pageNumber: 1, pageSize: 10, isActive: null};
    this.getUserLines();
  }

  getUserLines() {
    this.numberService.getUserLines(this.getUserLineModel.pageNumber, this.getUserLineModel.pageSize, this.getUserLineModel.isActive)
      .subscribe(res => {
        this.userLines = res.data.items;
        this.totalItemsCount = res.data.totalItemsCount;
        console.log(this.userLines);
      });
  }

  doPaging(e) {
    this.getUserLineModel.pageNumber = e;
    this.getUserLines();
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
        if (result) {
          this.userLines.splice(this.currentIndex,1);
          this.userLines.push(result);
          this.notificationService.success('Line extended successfully', '');
        }else {
          this.notificationService.success('Payment management modified successfully', '');
        }
      });
  }
}
