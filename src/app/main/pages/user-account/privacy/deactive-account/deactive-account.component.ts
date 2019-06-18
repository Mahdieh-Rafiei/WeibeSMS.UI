import {Component, OnInit} from '@angular/core';
import {TitleValueInterface} from './models/title-value.interface';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CreateKeyComponent} from '../../../developers/developer-list/create-key/create-key.component';
import {NotificationService} from '../../../../../shared/notification.service';
import {MatDialog} from '@angular/material';
import {DeleteAccountComponent} from './delete-acount/delete-account.component';
import {AuthenticationService} from '../../../../../auth/login/authentication.service';
import {errorAnimation} from '../../../../../shared/component/animation/error-animation';

@Component({
  selector: 'app-deactive-account',
  templateUrl: './deactive-account.component.html',
  styleUrls: ['./deactive-account.component.scss'],
  animations: [
    errorAnimation()
  ]
})
export class DeactiveAccountComponent implements OnInit {
  deActiveForm: FormGroup;
  needDescription: boolean = false;
  reasons: TitleValueInterface[] = [
    {title: 'I have a privacy concern', value: 1},
    {title: 'I\'m not getting any value from my membership', value: 2},
    {title: 'I\'m getting too many sms', value: 3},
    {title: 'I\'m moving to a new panel', value: 4},
    {title: 'I\'m not using the system', value: 5},
    {title: 'I\'m not not happy with the amount', value: 6},
    {title: 'I can\'t use panel easily', value: 7},
    {title: 'Other', value: 8},

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

  onReasonChange(e){
    this.needDescription = e.target.value == 8;
    // if (e.target.value != 8) {
    //   this.deActiveForm.controls['description'].disable();
    // }
    // else {
    //   this.deActiveForm.controls['description'].enable();
    // }
  }
}
