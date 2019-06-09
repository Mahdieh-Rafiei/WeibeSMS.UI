import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserEventService} from '../user-event.service';
import {AddUserEventResponseInterface} from './models/add-user-event-response.interface';
import {EditUserEventResponseInterface} from './models/edit-user-event-response.interface';
import {EditUserEventInterface} from './models/edit-user-event.interface';
import {DataUserEventInterface} from '../models/data-user-event.interface';

@Component({
  selector: 'app-dialog',
  templateUrl: './add-edit-user-event.component.html',
  styleUrls: ['./add-edit-user-event.component.scss']
})
export class AddEditUserEventComponent implements OnInit {
  userEventData: DataUserEventInterface;
  userEventForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<AddEditUserEventComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private ues: UserEventService,
              private fb: FormBuilder) {
    dialogRef.disableClose = true;
    this.userEventData = data.data;
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
            this.dialogRef.close({addEditUserEvent: {id: res.data, name: this.userEventForm.value.name}});
          });
      } else {
        const payload: EditUserEventInterface = this.userEventForm.value;
        this.ues.modifyUserEvent(this.userEventData.id, payload)
          .subscribe((res: EditUserEventResponseInterface) => {
            this.dialogRef.close({addEditUserEvent: {id: this.userEventData.id, name: this.userEventForm.value.name}});
          });
      }
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
