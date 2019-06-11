import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';

import {ToastrService} from 'ngx-toastr';
import {SharedService} from '../../service/shared.service';
import {HttpClient, HttpEventType, HttpHeaders} from '@angular/common/http';
import {FormBuilder, FormGroup} from '@angular/forms';
import {any} from 'codelyzer/util/function';
import {UploadInterface} from './models/upload.interface';
import {ApiService} from '../../api.service';
import {DataService} from '../../service/data.service';

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
  @Input() deleteAvatar: boolean;


  @Output() image: EventEmitter<any> = new EventEmitter();
  @Output() loading: EventEmitter<any> = new EventEmitter();
  @Output() removeAvatar: EventEmitter<boolean> = new EventEmitter();

  hasAvatar: boolean = false;

  constructor(private router: Router,
              private http: HttpClient,
              private fb: FormBuilder,
              private shs: SharedService,
              private ds: DataService,
              private as: ApiService) {
  }

  ngOnInit() {
    this.storeImageSrc = this.imageSrc;
    this.getPicture();
    this.ds.data$.subscribe(res => {
      if (res) {
        this.imageSrc = this.storeImageSrc;
        this.hasAvatar = false;
      }
    });
  }

  getPicture() {
    if (this.imageUrl) {
      this.showDelete = true;
      this.imageSrc = this.imageUrl;
      this.hasAvatar = true;
    }
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

    if (files.length === 0) {
      return;
    }

    const fileToUpload = <File> files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload);
    formData.append('type', '1');

    this.as.postFile(this.apiUrl, formData)
      .subscribe(res => {
        if (res && res.data) {
          this.imageSrc = res.data;
          this.hasAvatar = true;
        }
      });
  }

  onClickImage() {
    this.responseImage = null;
  }

  remove() {
    this.removeAvatar.emit(true);
  }
}

