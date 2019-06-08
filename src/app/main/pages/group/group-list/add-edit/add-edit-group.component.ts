import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {AddGroupNameInterface} from '../models/add-group-name.interface';
import {GroupService} from '../../group.service';
import {AddGroupNameResponseInterface} from '../models/add-group-name-response.interface';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ItemsGroupListInterface} from '../models/items-group-list.interface';
import {ModifyGroupNameResponseInterface} from '../models/modify-group-name-response.interface';

@Component({
  selector: 'app-dialog',
  templateUrl: './add-edit-group.component.html',
  styleUrls: ['./add-edit-group.component.scss']
})
export class AddEditGroupComponent implements OnInit {
  GroupNameData: ItemsGroupListInterface;
  groupNameForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<AddEditGroupComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private gs: GroupService,
              private fb: FormBuilder) {
    dialogRef.disableClose = true;
    this.GroupNameData = data.data;
  }

  ngOnInit() {
    this.createForm();
    if (this.GroupNameData) {
      this.fillGroupName(this.groupNameForm);
    }
  }

  createForm() {
    this.groupNameForm = this.fb.group({
      groupName: [null, Validators.required]
    });
  }

  fillGroupName(formGroupName) {
    formGroupName.patchValue({
      groupName: this.GroupNameData.groupName
    });
  }

  onSubmit() {
    if (this.groupNameForm.valid) {
      const payload: AddGroupNameInterface = this.groupNameForm.value;
      if (!this.GroupNameData) {
        this.gs.addGroup(payload)
          .subscribe((res: AddGroupNameResponseInterface) => {
            this.dialogRef.close({addEditGroup: {id: res.data}});
          });
      } else {
        this.gs.modifyGroup(this.GroupNameData.id, payload)
          .subscribe((res: ModifyGroupNameResponseInterface) => {
            this.dialogRef.close({addEditGroup: {id: this.GroupNameData.id}});
          });
      }
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
