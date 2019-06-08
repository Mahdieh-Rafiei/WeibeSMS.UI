import {Component, OnInit} from '@angular/core';
import {TitleValueInterface} from './models/title-value.interface';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CreateKeyComponent} from '../../../developers/developer-list/create-key/create-key.component';
import {NotificationService} from '../../../../../shared/notification.service';
import {MatDialog} from '@angular/material';
import {DeleteAccountComponent} from './delete-acount/delete-account.component';
import {AuthenticationService} from '../../../../../auth/login/authentication.service';

@Component({
  selector: 'app-deactive-account',
  templateUrl: './deactive-account.component.html',
  styleUrls: ['./deactive-account.component.scss']
})
export class DeactiveAccountComponent implements OnInit {
  deActiveForm: FormGroup;
  reasons: TitleValueInterface[] = [
    {title: ':)', value: 1},
    {title: ':(', value: 2}
  ];

  constructor(private fb: FormBuilder,
              private ns: NotificationService,
              private dialog: MatDialog,
              private authService: AuthenticationService) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.deActiveForm = this.fb.group({
      reason: ['', Validators.required],
      description: [null],
    });
  }

  submit() {
    if (this.deActiveForm.valid) {
      this.openDialog('400px', 'auto', '', {data: this.deActiveForm.value});
    }
  }

  openDialog(width, height, panelClass, data): void {
    const dialogRef = this.dialog.open(DeleteAccountComponent, {
      width,
      height,
      panelClass,
      data
    });

    dialogRef.afterClosed()
      .subscribe(result => {
        if (result && result.deleteAccount) {
          this.authService.logOut();
          this.ns.success('create key successfully!', '');
        }
      });
  }

}
