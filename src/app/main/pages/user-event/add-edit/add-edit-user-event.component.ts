import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserEventService} from '../user-event.service';
import {AddUserEventResponseInterface} from './models/add-user-event-response.interface';
import {EditUserEventResponseInterface} from './models/edit-user-event-response.interface';
import {EditUserEventInterface} from './models/edit-user-event.interface';
import {DataUserEventInterface} from '../models/data-user-event.interface';
import {errorAnimation} from "../../../../shared/component/animation/error-animation";

@Component({
    selector: 'app-dialog',
    templateUrl: './add-edit-user-event.component.html',
    styleUrls: ['./add-edit-user-event.component.scss'],
    animations: [
        errorAnimation()
    ],
})
export class AddEditUserEventComponent implements OnInit {
    userEventData: DataUserEventInterface;
    userEventForm: FormGroup;
    index: number;

    constructor(public dialogRef: MatDialogRef<AddEditUserEventComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any,
                private ues: UserEventService,
                private fb: FormBuilder) {
        dialogRef.disableClose = true;
        this.userEventData = data.data;
        this.index = data.index;
    }

    ngOnInit() {
        this.createForm();
        if (this.userEventData) {
            this.fillGroupName(this.userEventForm);
        }
    }

    createForm() {
        this.userEventForm = this.fb.group({
            name: [null, Validators.required]
        });
    }

    fillGroupName(formGroupName) {
        formGroupName.patchValue({
            name: this.userEventData.name
        });
    }

    onSubmit() {
        if (this.userEventForm.valid) {
            if (!this.userEventData) {
                const payload: AddEditUserEventComponent = this.userEventForm.value;
                this.ues.addUserEvent(payload)
                    .subscribe((res: AddUserEventResponseInterface) => {
                        this.dialogRef.close({addUserEvent: {id: res.data, name: this.userEventForm.value.name}});
                    });
            } else {
                const payload: EditUserEventInterface = this.userEventForm.value;
                this.ues.modifyUserEvent(this.userEventData.id, payload)
                    .subscribe((res: EditUserEventResponseInterface) => {
                        this.dialogRef.close({
                            editUserEvent: {
                                id: this.userEventData.id,
                                name: this.userEventForm.value.name,
                                index: this.index
                            }
                        });
                    });
            }
        }
    }

    closeDialog() {
        this.dialogRef.close();
    }
}
