import {Component, OnInit} from '@angular/core';
import {NumbersService} from '../numbers.service';
import {DataLineInterface} from './models/data-line.interface';
import {DataCountryInterface} from '../../../../shared/models/data-country.interface';
import {SharedService} from '../../../../shared/service/shared.service';
import {AddUserLineInterface} from './models/add-user-line.interface';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {ConfirmationBuyLineComponent} from './confirmation-buy-line/confirmation-buy-line.component';
import {NotificationService} from '../../../../shared/notification.service';
import {SummaryCountryInterface} from '../user-lines/models/summary-country.interface';

@Component({
  selector: 'app-buy-numbers-show',
  templateUrl: './lines.component.html',
  styleUrls: ['./lines.component.scss']
})
export class LinesComponent implements OnInit {


  hasAutoExtension: boolean;
  lines: DataLineInterface[];
  selectedCountryId: number;
  selectedLine: DataLineInterface;
  countries: SummaryCountryInterface[];

  constructor(private numberService: NumbersService,
              private sharedService: SharedService,
              private router: Router,
              private notificationService: NotificationService,
              private dialog: MatDialog) {
  }

  ngOnInit() {
    this.numberService.mode = 'buyNumbers';
    this.numberService.getCountriesThatHasLine(true).subscribe(res => {
      this.countries = res.data;
      this.selectedCountryId=this.countries[0].id;
      this.getLines();
    });
  }

  getLines() {
    this.numberService.getLines(this.selectedCountryId)
      .subscribe(res => {
        this.lines = res.data;
        this.selectedLine = null;
      });
  }

  countryChanged(e) {
    this.selectedCountryId = e.target.value;
    this.getLines();
  }

  buy(mode: string) {

    if (mode === 'credit') {
      return;
    }

    let addUserLine: AddUserLineInterface = {lineId: this.selectedLine.id, hasAutoExtension: this.hasAutoExtension};
    this.openDialog('400px', 'auto', '', {
      userLineData: addUserLine,
      lineNumber: this.selectedLine.number,
      linePrice: this.selectedLine.cost
    });
  }

  openDialog(width, height, panelClass, data): void {
    const dialogRef = this.dialog.open(ConfirmationBuyLineComponent, {
      width,
      height,
      panelClass,
      data
    });

    dialogRef.afterClosed()
      .subscribe(result => {
        if (result) {
          this.numberService.mode = 'yourNumbers';
          this.notificationService.success('Line bought successfully!', '');
          this.router.navigateByUrl(`lines/my-lines`);
        }
      });
  }
}
