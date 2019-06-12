import {Component, Inject, OnInit} from '@angular/core';
import {DataAddContactFormGroupInterface} from '../models/data-add-contact-form-group.interface';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ContactService} from '../../../contact/contact.service';
import {AddContactFormGroupResponseInterface} from '../models/add-contact-form-group-response.interface';

@Component({
  selector: 'app-confirmation-add-contact-from-file',
  templateUrl: './confirmation-add-contact-from-file.component.html',
  styleUrls: ['./confirmation-add-contact-from-file.component.scss']
})
export class ConfirmationAddContactFromFileComponent implements OnInit {

  contactData: DataAddContactFormGroupInterface;
  formData:FormData;
  groupId: number;

  constructor(public dialogRef: MatDialogRef<ConfirmationAddContactFromFileComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private contactService: ContactService) {

    dialogRef.disableClose = true;
    this.contactData = data.data;
    this.formData = data.formData;
    this.groupId = data.groupId;
  }

  ngOnInit() {
  }

  closeDialog() {
    this.dialogRef.close(null);
  }

  onSubmit() {
    this.formData.delete('immediate');
    this.formData.append('immediate', true.toString());
    this.contactService.addContactFromFile(this.groupId,this.formData)
      .subscribe((res: AddContactFormGroupResponseInterface) => {
        this.dialogRef.close(true);
      });
  }
}
