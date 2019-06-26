import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserAccountService} from '../../user-account.service';
import {SharedService} from '../../../../../shared/service/shared.service';
import {errorAnimation} from '../../../../../shared/component/animation/error-animation';
import {NotificationService} from '../../../../../shared/notification.service';
import {TableConfigInterface} from "../../../../../shared/component/table/models/table-config.interface";
import {SenderIdInterface} from "./models/sender-id.interface";

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
        headerNames: ['Order', 'Sender name', 'Create date', 'Status'],
        rowColumnsConfig: []
    };

    constructor(private fb: FormBuilder,
                private shs: SharedService,
                private userAccountService: UserAccountService,
                private notificationService: NotificationService) {
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
            this.toDate,)
            .subscribe(res => {
                this.data = res.data;
                this.senderNames = this.data;
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
                    const addedItem: SenderIdInterface = {
                        creationDateTime: new Date().getTime() / 1000,
                        id: res.data,
                        isValid: false,
                        title: this.newSenderName.title
                    };
                    this.notificationService.success('Sender Id added successfully', '');
                    this.senderNames.push(addedItem);
                });
        }
    }

    removeSenderName(senderName: SenderIdInterface, index: number) {
        this.userAccountService.removeSenderName(senderName.id)
            .subscribe(res => {
                this.senderNames.splice(index, 1);
                this.notificationService.success('Sender Id removed successfully', '');
            });
    }


    generateRowColumns() {
        this.tableConfig.rowColumnsConfig.push({propertyName: 'title'});
        this.tableConfig.rowColumnsConfig.push({propertyName: 'creationDateTime', isDateTime: true});
        this.tableConfig.rowColumnsConfig.push({
            buttonConfig: {
                classSelector: (value: SenderIdInterface) => {
                    return value.isValid ? 'green-btn' : 'yellow-btn';
                },
                action: null,
                innerHTMLSelector: (value: SenderIdInterface) => {
                    return value.isValid ? 'Accepted' : 'Pending'
                }
            }
        });
    }
}
