import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserAccountService} from '../../user-account.service';
import {SenderIdResponseInterface} from './models/sender-id-response.interface';
import {SharedService} from '../../../../../shared/service/shared.service';
import {errorAnimation} from '../../../../../shared/component/animation/error-animation';
import {DataSenderIdInterface} from './models/data-sender-id.interface';
import {NotificationService} from '../../../../../shared/notification.service';

@Component({
  selector: 'app-sender-id',
  templateUrl: './sender-id.component.html',
  styleUrls: ['./sender-id.component.scss'],
  animations: [
    errorAnimation()
  ],
})
export class SenderIdComponent implements OnInit {
  senderIdForm: FormGroup;
  newSenderName: DataSenderIdInterface =
    {
      id: 0,
      creationDateTime: 0,
      isValid: false,
      title: ''
    };
  senderIdUnique = false;
  senderNames: DataSenderIdInterface[];

  constructor(private fb: FormBuilder,
              private shs: SharedService,
              private userAccountService: UserAccountService,
              private notificationService: NotificationService) {
  }

  ngOnInit() {
    this.getSenderIds();
    this.createForm();
  }

  getSenderIds() {
    this.userAccountService.getSenderIds()
      .subscribe((res: SenderIdResponseInterface) => {
        this.senderNames = res.data;
        console.log(res.data);
      });
  }

  createForm() {
    this.senderIdForm = this.fb.group({
      name: [null, Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z]{1,11}$')])],
    });
  }


  checkUnique(key: number, value: string) {
    if (value.length > 0) {
      const payload = {key, value};
      this.shs.checkUnique(payload)
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
          const addedItem: DataSenderIdInterface = {
            creationDateTime : new Date().getTime() / 1000,
            id : res.data,
            isValid : false,
            title: this.newSenderName.title
          };
          this.notificationService.success('Sender Id added successfully', '');
          this.senderNames.push(addedItem);
        });
    }
  }

  removeSenderName(senderName: DataSenderIdInterface, index: number) {
    this.userAccountService.removeSenderName(senderName.id)
      .subscribe(res => {
        this.senderNames.splice(index, 1);
        this.notificationService.success('Sender Id removed successfully', '');
      });
  }
}
