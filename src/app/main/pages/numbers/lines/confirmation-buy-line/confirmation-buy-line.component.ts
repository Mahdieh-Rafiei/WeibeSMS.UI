import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {NumbersService} from '../../numbers.service';
import {AddUserLineInterface} from '../models/add-user-line.interface';

@Component({
  selector: 'app-confirmation-buy-line',
  templateUrl: './confirmation-buy-line.component.html',
  styleUrls: ['./confirmation-buy-line.component.css']
})
export class ConfirmationBuyLineComponent implements OnInit {


  userLineData: AddUserLineInterface;
  lineNumber:string;
  linePrice:number;

  constructor(public dialogRef: MatDialogRef<ConfirmationBuyLineComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private numbersService: NumbersService) {

    dialogRef.disableClose = true;
    this.userLineData = data.userLineData;
    this.lineNumber = data.lineNumber;
    this.linePrice = data.linePrice;
  }

  ngOnInit() {
  }

  closeDialog() {
    this.dialogRef.close(null);
  }

  onSubmit() {
    this.numbersService.buyLine(this.userLineData)
      .subscribe(res => {
        this.numbersService.mode = 'yourNumbers';
        this.dialogRef.close(true);
      });
  }
}

