import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserAccountService} from '../../user-account.service';
import {SenderIdResponseInterface} from './models/sender-id-response.interface';
import {SharedService} from '../../../../../shared/service/shared.service';
import {errorAnimation} from "../../../../../shared/component/animation/error-animation";

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
    senderIdData: SenderIdResponseInterface;
    senderIdUnique: boolean = false;

    constructor(private fb: FormBuilder,
                private shs: SharedService,
                private uas: UserAccountService) {
        // this.getSenderId();
    }

    ngOnInit() {
        this.createForm();
    }

    getSenderId() {
        this.uas.getSenderId()
            .subscribe((res: SenderIdResponseInterface) => {
                this.senderIdData = res;
                this.fillSenderId(this.senderIdForm);
            });
    }

    createForm() {
        this.senderIdForm = this.fb.group({
            name: [null, Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z]{1,11}$')])],
        });
    }

    fillSenderId(senderIdForm) {
        senderIdForm.patchValue({
            name: this.senderIdData.data.name
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
        if (this.senderIdForm.valid && !this.senderIdUnique) {
            const payload = this.senderIdForm.value.name;
            this.uas.modifySenderId(payload)
                .subscribe(res => console.log(res));
        }
    }
}
