import {Injectable} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastr: ToastrService) {
  }

  config = {
    closeButton: true,
    progressBar: true,
    timeout: 10000
  };

  warning(message: string, title?: string) {
    this.toastr.warning(message, title ? title : 'Warning', this.config);
  }

  success(message: string, title: string) {
    this.toastr.success(message, title ? title : 'Success', this.config);
  }

  error(message: string, title: string) {
    this.toastr.error(message, title ? title : 'Error', this.config);
  }

  info(message: string, title: string) {
    this.toastr.info(message, title ? title : 'Info', this.config);
  }
}
