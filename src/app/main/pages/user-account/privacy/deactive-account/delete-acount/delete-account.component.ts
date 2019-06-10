import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DeleteAccountInterface} from './models/delete-account.interface';
import {PrivacyService} from '../../privacy.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.scss']
})
export class DeleteAccountComponent implements OnInit {

  modalType: string;
  optionIndex: number;

  deleteAccountForm: FormGroup;
  deActiveAccount: DeleteAccountInterface;

  constructor(public dialogRef: MatDialogRef<DeleteAccountComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private fb: FormBuilder,
              private ps: PrivacyService) {
    dialogRef.disableClose = true;
    this.modalType = data.type;
    this.optionIndex = data.index;
    this.deActiveAccount = data.data;

  }

  ngOnInit() {
    this.createFrom();
  }

  createFrom() {
    this.deleteAccountForm = this.fb.group({
      password: [null, Validators.required]
    });
  }

  onSubmit() {
    if (this.deleteAccountForm.valid) {
      const payload = this.deleteAccountForm.value;
      payload['reason'] = +this.deActiveAccount.reason;
      payload['description'] = this.deActiveAccount.description;

      this.ps.deleteAccount(payload)
        .subscribe(res => {
          this.dialogRef.close({deleteAccount: {res}});
        });
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
