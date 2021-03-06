import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserAccountService} from '../../user-account.service';
import {SharedService} from '../../../../../shared/service/shared.service';
import {errorAnimation} from '../../../../../shared/component/animation/error-animation';
import {NotificationService} from '../../../../../shared/notification.service';
import {TableConfigInterface} from '../../../../../shared/component/table/models/table-config.interface';
import {SenderIdInterface} from './models/sender-id.interface';
import {DialogComponent} from '../../../../../shared/component/dialog/dialog.component';
import {SenderIdResponseInterface} from './models/sender-id-response.interface';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-sender-id',
  templateUrl: './sender-id.component.html',
  styleUrls: ['./sender-id.component.scss'],
  animations: [
    errorAnimation()
  ],
})
export class SenderIdComponent implements OnInit {

  data: any;
  fromDate: null;
  toDate: null;
  senderIdForm: FormGroup;
  phrase = '';
  newSenderName: SenderIdInterface =
    {
      id: 0,
      creationDateTime: 0,
      isValid: false,
      title: ''
    };
  senderIdUnique = false;
  senderNames: SenderIdInterface[];

  tableConfig: TableConfigInterface = {
    headersConfig: [
      {hideInResponsive: false, title: 'Order'},
      {hideInResponsive: false, title: 'Sender name'},
      {hideInResponsive: false, title: 'Create date'},
      {hideInResponsive: true, title: 'Status'},
    ],
    rowColumnsConfig: [],
    hasRemoveButton: true,
    hasActions: true,
  };


  constructor(private formBuilder: FormBuilder,
              private sharedService: SharedService,
              private userAccountService: UserAccountService,
              private notificationService: NotificationService,
              private dialog: MatDialog) {
  }

  ngOnInit() {

    this.createForm();
    this.getSenderIds();
    this.generateRowColumns();
  }

  getSenderIds() {
    this.userAccountService.getSenderIds(
      1,
      10,
      this.phrase,
      this.fromDate,
      this.toDate)
      .subscribe(res => {
        this.data = res.data;
        this.senderNames = this.data;
      });
  }

  createForm() {
    this.senderIdForm = this.formBuilder.group({
      name: [null, Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z]{1,11}$')])],
    });
  }


  checkUnique(key: number, value: string) {
    if (value.length > 0) {
      const payload = {key, value};
      this.sharedService.checkUnique(payload)
        .subscribe((res: any) => {
          if (!res.data) {
            this.senderIdUnique = false;
          } else {
            this.senderIdUnique = true;
          }
        });
    }
  }


  submit() {
    if (this.senderNames.length >= 10) {
      this.notificationService.error('You can have at most 10 sender id', '');
      return;
    }
    if (this.senderIdForm.valid && !this.senderIdUnique) {
      const payload = this.senderIdForm.value.name;
      this.newSenderName.title = payload;
      this.userAccountService.addSenderName(payload)
        .subscribe(res => {
          console.log(res);
          const addedItem: SenderIdInterface = {
            creationDateTime: new Date().getTime() / 1000,
            id: res.data,
            isValid: false,
            title: this.newSenderName.title
          };
          this.notificationService.success('Sender Id added successfully', '');
          this.senderNames.push(addedItem);
          this.senderIdForm.patchValue({'name': ''});
        });
    }
  }

  removeSenderName(index, item: SenderIdInterface) {
    this.openDeleteDialog('480px', 'auto', '', {
      modalType: 'deleteSenderId',
      modalHeader: 'Delete Sender Name',
      modalText: 'Are you sure to remove this item?',
      id: item.id,
      index
    });
  }


  openDeleteDialog(width, height, panelClass, data): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width,
      height,
      panelClass,
      data
    });

    dialogRef.afterClosed()
      .subscribe(result => {
        if (result && result.remove) {
          if (result.remove.modalType === 'deleteSenderId') {
            this.userAccountService.removeSenderName(result.remove.data.id)
              .subscribe((res: SenderIdResponseInterface) => {
                this.senderNames.splice(result.remove.data.index, 1);
                this.notificationService.success('Sender Id removed successfully', '');
              });
          }
        }
      });
  }

  generateRowColumns() {
    this.tableConfig.rowColumnsConfig.push({propertyName: 'title', hideInResponsive: false});
    this.tableConfig.rowColumnsConfig.push({propertyName: 'creationDateTime', hideInResponsive: true, isDateTime: true});
    this.tableConfig.rowColumnsConfig.push({
      hideInResponsive: false,
      buttonConfig: {
        classSelector: (value: SenderIdInterface) => {
          return value.isValid ? 'green-btn' : 'yellow-btn';
        },
        action: null,
        innerHTMLSelector: (value: SenderIdInterface) => {
          return value.isValid ? 'Accepted' : 'Pending';
        }
      }
    });
  }
}
