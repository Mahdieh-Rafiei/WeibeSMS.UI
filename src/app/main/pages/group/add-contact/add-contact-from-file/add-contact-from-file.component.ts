import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FileSystemFileEntry, UploadEvent} from 'ngx-file-drop';
import {ContactService} from '../single-add-contact/contact.service';
import {GroupService} from '../../group.service';
import {NotificationService} from '../../../../../shared/notification.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AddContactFormGroupResponseInterface} from './models/add-contact-form-group-response.interface';
import {MatDialog} from '@angular/material';
import {ConfirmationAddContactFromFileComponent} from './confirmation-add-contact-from-file/confirmation-add-contact-from-file.component';

@Component({
    selector: 'app-add-contact-from-file',
    templateUrl: './add-contact-from-file.component.html',
    styleUrls: ['./add-contact-from-file.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class AddContactFromFileComponent implements OnInit {

    result: any;
    groupId: number;

    constructor(private contactService: ContactService,
                private groupService: GroupService,
                private notificationService: NotificationService,
                private activatedRoute: ActivatedRoute,
                private router: Router,
                private dialog: MatDialog) {
    }

    ngOnInit() {
        this.groupId = parseInt(this.activatedRoute.parent.snapshot.paramMap.get('groupId'));
    }

    downloadSample() {
        window.open('/assets/contact.xlsx');
    }

    dropped(e) {
        const droppedFile = e.files[0];
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;

        fileEntry.file((file: File) => {
            let extension = file.name.split('.').pop();
            if (extension != 'xls' && extension != 'xlsx') {
                this.notificationService.error("File format doesn't support", '');
                return;
            }
            ;
            const formData = new FormData();
            formData.append('logo', file, droppedFile.relativePath);
            formData.append('replaceDuplicateContact', true.toString());
            formData.append('immediate', false.toString());

            this.contactService.addContactFromFile(this.groupId, formData)
                .subscribe((res: AddContactFormGroupResponseInterface) => {
                    this.result = res.data;
                    this.openDialog('400px', 'auto', '', {data: res.data, formData, groupId: this.groupId});
                });
        });
    }

    close() {
        this.router.navigateByUrl(`group/${this.groupId}`);
    }

    openDialog(width, height, panelClass, data): void {
        const dialogRef = this.dialog.open(ConfirmationAddContactFromFileComponent, {
            width,
            height,
            panelClass,
            data
        });

        dialogRef.afterClosed()
            .subscribe(result => {
                if (result) {
                    this.notificationService.success('Contacts added successfully', '');
                    this.router.navigateByUrl(`group/${this.groupId}`);
                }
            });
    }
}
