import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ItemsUserLineInterface} from '../models/items-user-line.interface';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {NumbersService} from '../../numbers.service';
import {ModifyUserLineInterface} from '../models/modify-user-line.interface';
import {ModifyUserLineResponseInterface} from '../models/modify-user-line-response.interface';
import {ExtendUserLineResponseInterface} from '../models/extend-user-line-response.interface';

@Component({
  selector: 'app-edit-user-lines',
  templateUrl: './edit-user-lines.component.html',
  styleUrls: ['./edit-user-lines.component.css']
})
export class EditUserLinesComponent implements OnInit {

  userLineData: ItemsUserLineInterface;
  index: number;

  constructor(public dialogRef: MatDialogRef<EditUserLinesComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private numbersService: NumbersService) {

    dialogRef.disableClose = true;
    this.userLineData = data.data;
    this.index = data.index;
  }

  ngOnInit() {
  }

  //TODO: add form validating if need...

  // createForm() {
  //   this.userLineForm = this.fb.group({
  //     hasAutoExtension: [null, Validators.required]
  //   });
  // }


  closeDialog() {
    this.dialogRef.close();
  }

  onSubmit() {
    const payload: ModifyUserLineInterface = {hasAutoExtension: this.userLineData.hasAutoExtension};
    this.numbersService.modifyUserLine(this.userLineData.id, payload)
      .subscribe((res: ModifyUserLineResponseInterface) => {
        this.dialogRef.close(null);
      });
  }

  extendUserLine() {
    this.numbersService.extendUserLine(this.userLineData.id)
      .subscribe((res: ExtendUserLineResponseInterface) => {

        let creationDateTime = new Date();
        let expirationDateTime = new Date();
        expirationDateTime.setMonth(expirationDateTime.getMonth() + 1);
        let addedUserLine: ItemsUserLineInterface = {
          id: res.data,
          number: this.userLineData.number,
          isSuspended: false,
          hasAutoExtension: this.userLineData.hasAutoExtension,
          countryName: this.userLineData.countryName,
          cost: this.userLineData.cost,
          creationDateTime: creationDateTime.getTime() / 1000,
          expirationDateTime:  expirationDateTime.getTime() / 1000,
        };

        this.dialogRef.close(addedUserLine);
      });
  }
}
