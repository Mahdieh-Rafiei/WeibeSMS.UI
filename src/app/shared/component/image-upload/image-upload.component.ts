import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';

import {ToastrService} from 'ngx-toastr';
import {SharedService} from '../../service/shared.service';
import {HttpClient, HttpEventType, HttpHeaders} from '@angular/common/http';
import {FormBuilder, FormGroup} from '@angular/forms';
import {any} from 'codelyzer/util/function';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ImageUploadComponent implements OnInit {
  showSpinner = false;
  avatar: File;
  responseImage;

  picture;

  AvatarSizeValidate = false;
  AvatarTypeValidate = false;
  typeValidate = false;
  showDelete: boolean = false;
  storeImageSrc: string;

  @Input() type;
  @Input() accept;
  @Input() sizeValidate;
  @Input() validateFormats;
  @Input() validateSize;
  @Input() apiUrl: string;
  @Input() imageUrl: string;
  @Input() imageSrc: any;
  @Input() uploadType: string;


  @Output() image: EventEmitter<any> = new EventEmitter();
  @Output() loading: EventEmitter<any> = new EventEmitter();

  uploadForm: FormGroup;

  constructor(private router: Router,
              private http: HttpClient,
              private fb: FormBuilder,
              private toastrService: ToastrService,
              private sharedService: SharedService) {
  }

  ngOnInit() {
    this.storeImageSrc = this.imageSrc;
    this.getPicture();
    this.createForm();
  }

  createForm() {
    this.uploadForm = this.fb.group({
      file: [null]
    });
  }

  getPicture() {
    if (this.imageUrl) {
      this.showDelete = true;
      this.imageSrc = null;
    }
  }

  prepareSave(): any {
    const file = new FormData();
    file.append('', this.uploadForm.get('file').value);
    return file;
  }


  uploadFile(files) {

    // this.AvatarSizeValidate = false;
    // this.AvatarTypeValidate = false;
    // this.typeValidate = false;
    // if (this.accept) {
    //   for (let i = 0; i < this.accept.length; i++) {
    //     if (event.target.files[0].type === this.accept[i]) {
    //       this.typeValidate = true;
    //     }
    //   }
    // }
    // if (event.target.files && event.target.files[0]) {
    //   if (this.typeValidate === false) {
    //     this.AvatarTypeValidate = true;
    //   } else if (event.target.files[0].size < (this.sizeValidate * 1024)) {
    //     this.AvatarSizeValidate = true;
    //   } else {
    //
    //     const reader = new FileReader();
    //     reader.onload = (e: any) => {
    //       this.avatar = <File> event.target.files[0];
    //       this.uploadForm.get('file').setValue(this.avatar);
    //       //
    //       // const fd = new FormData();
    //       // fd.append('', this.avatar);
    //       // fd.append('type', this.uploadType);
    //
    //       const formModel = this.prepareSave();
    //
    //       this.loading.emit(true);
    //       this.sharedService.uploadFile(formModel, this.apiUrl)
    //         .subscribe(
    //           (response: any) => {
    //             this.showSpinner = false;
    //             this.showDelete = true;
    //             this.imageSrc = reader.result;
    //             this.responseImage = response;
    //             this.loading.emit(false);
    //             this.image.emit(response);
    //           });
    //     };
    //     reader.readAsDataURL(event.target.files[0]);
    //     this.AvatarSizeValidate = false;
    //     this.AvatarTypeValidate = false;
    //   }

    debugger;
    if (files.length === 0) {
      return;
    }

    let fileToUpload = <File> files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload);
    formData.append('type', '1');

    this.http.post('https://localhost:44315/app/api/upload', formData,{
      reportProgress : true,
      observe: 'events',
      headers : new HttpHeaders({'Authorization': localStorage.getItem('jwt-sms')})
    })
      .subscribe(res => console.log(res));
  }

  onClickImage() {
    this.responseImage = null;
  }
}

