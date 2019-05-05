import { Component, OnInit } from '@angular/core';
import {FileSystemFileEntry, UploadEvent} from 'ngx-file-drop';
import {ContactService} from '../../contact/contact.service';
import {GroupService} from '../../group.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {NotificationService} from '../../../shared/notification.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-contact-from-file',
  templateUrl: './add-contact-from-file.component.html',
  styleUrls: ['./add-contact-from-file.component.css']
})
export class AddContactFromFileComponent implements OnInit {

  result:any;
  resultView:boolean=false;
  constructor(private contactService:ContactService,
              private groupService:GroupService,
              private notificationService:NotificationService,
              private router:Router) {
  }

  ngOnInit() {
  }

  downloadSample() {
    window.open('/assets/contact.xlsx');
  }

  dropped(e) {
    let droppedFile = e.files[0];

    const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;

      fileEntry.file((file: File) => {
        this.contactService.addContactFromFile(this.groupService.selectedGroupId,true,file,droppedFile.relativePath)
          .subscribe(res=>{
            console.log(res);
            this.result = res.data;
            this.resultView=true;
            this.notificationService.success('File processed successfully','');
          });
    });
  }

  close(){
    this.resultView=false;
    this.router.navigateByUrl(`group/${this.groupService.selectedGroupId}`);
  }
}
