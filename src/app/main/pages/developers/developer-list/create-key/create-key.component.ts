import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DevelopersService} from '../../developers.service';
import {AddKeyInterface} from './models/add-key.interface';

@Component({
  selector: 'app-dialog',
  templateUrl: './create-key.component.html',
  styleUrls: ['./create-key.component.scss']
})
export class CreateKeyComponent implements OnInit {

  modalType: string;
  optionIndex: number;
  title = '';

  constructor(public dialogRef: MatDialogRef<CreateKeyComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private ds: DevelopersService) {
    this.modalType = data.type;
    this.optionIndex = data.index;

  }

  ngOnInit() {
  }

  onSubmit() {
    const payload: AddKeyInterface = {title: this.title};
    this.ds.addKey(payload)
      .subscribe(res => {
        const data = {id: res.data.id, key: res.data.key, title: this.title};
        this.dialogRef.close({createKey: {data}});
      });
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
