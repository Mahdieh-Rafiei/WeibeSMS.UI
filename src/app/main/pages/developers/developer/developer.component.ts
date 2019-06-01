import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BillindAddressResponseInterface} from '../../biling/billing-address/models/billind-address-response.interface';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DeveloperInterface} from './models/developer.interface';
import {NotificationService} from '../../../../shared/notification.service';
import {DevelopersService} from '../developers.service';
import {ValidIpsInterface} from './models/valid-ips.interface';
import {AddIpInterface} from './models/add-ip.interface';
import {RemoveKeyInterface} from './models/remove-key.interface';
import {RemoveIpinterface} from './models/remove-ipinterface';
import {ChangeStatusInterface} from './models/change-status.interface';
import {CreateKeyComponent} from '../developer-list/create-key/create-key.component';
import {MatDialog} from '@angular/material';
import {DialogComponent} from '../../../../shared/component/dialog/dialog.component';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss']
})
export class DeveloperComponent implements OnInit {
  id: number;
  keyData: DeveloperInterface;
  developerForm: FormGroup;
  validIps: ValidIpsInterface[];

  constructor(private route: ActivatedRoute,
              private ns: NotificationService,
              private ds: DevelopersService,
              private router: Router,
              private dialog: MatDialog,
              private fb: FormBuilder) {
    this.route.params
      .subscribe(item => this.id = item.id);
    this.route.data
      .subscribe((data: { keyData: any }) => {
        this.keyData = data.keyData;
        this.validIps = data.keyData.data.validIps;
      });
  }

  ngOnInit() {
    console.log(this.keyData);
    this.creteForm();
    this.fillDeveloper(this.developerForm);

  }

  creteForm() {
    this.developerForm = this.fb.group({
      title: [null, Validators.compose([Validators.required, Validators.maxLength(16)])],
      key: [{value: null, disabled: true}],
      isActive: [null],
      ip: [null],
    });
  }

  fillDeveloper(developerForm) {
    developerForm.patchValue({
      title: this.keyData.data.title,
      key: this.keyData.data.key,
      isActive: this.keyData.data.isActive
    });
  }

  copyText(val: string) {
    const selBox = document.createElement('textarea');
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.ns.success('Authentication key coped', '');
  }

  addIp() {
    const payload: AddIpInterface = {ip: this.developerForm.value.ip};
    this.ds.addIp(this.id, payload)
      .subscribe(res => {
        this.validIps.unshift({id: res.data, ip: this.developerForm.value.ip});
      });
  }

  removeApiKey() {
    this.openDialog('auto', 'auto', '', {modalType: 'apiKey', modalText: 'are you sure to remove this api key?'});
  }


  openDialog(width, height, panelClass, data): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width,
      height,
      panelClass,
      data
    });

    dialogRef.afterClosed()
      .subscribe(result => {
        if (result && result.remove) {
          if (result.remove.modalType) {
            this.ds.removeKey(this.id)
              .subscribe((res: RemoveKeyInterface) => {
                this.ns.success('api key removed successfully!', '');
                this.router.navigate(['/developer-list']);
              });
          }
        }
      });
  }

  removeIp(ipId, index) {
    this.ds.removeIp(this.id, ipId)
      .subscribe((res: RemoveIpinterface) => {
        this.validIps.splice(index, 1);
        this.ns.success('ip removed successfully!', '');
      });
  }

  submit() {
    const payload = this.developerForm.value;
    delete payload['ip'];
    this.ds.modifyKey(this.id, payload)
      .subscribe((res: ChangeStatusInterface) => {
        this.ns.success('change Status successfully!', '');
        this.router.navigate(['/developer-list']);
      });
  }
}
