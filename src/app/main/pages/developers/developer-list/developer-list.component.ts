import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DeveloperListInterface} from './models/developer-list.interface';
import {NotificationService} from '../../../../shared/notification.service';
import {CreateKeyComponent} from './create-key/create-key.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-developer-list',
  templateUrl: './developer-list.component.html',
  styleUrls: ['./developer-list.component.scss']
})
export class DeveloperListComponent implements OnInit {
  keys: DeveloperListInterface;
  showAuthKey: boolean = false;

  constructor(private route: ActivatedRoute,
              private ns: NotificationService,
              private dialog: MatDialog) {
    this.route.data
      .subscribe((data: { developersList: DeveloperListInterface }) => {
        this.keys = data.developersList;
      });
  }

  ngOnInit() {
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


  createKey() {
    this.openDialog('400px', 'auto', '',
      {});
  }


  openDialog(width, height, panelClass, data): void {
    const dialogRef = this.dialog.open(CreateKeyComponent, {
      width,
      height,
      panelClass,
      data
    });

    dialogRef.afterClosed()
      .subscribe(result => {
        if (result && result.createKey) {
          this.ns.success('create key successfully!', '');
        }
      });
  }


}
