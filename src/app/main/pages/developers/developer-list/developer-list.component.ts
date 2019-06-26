import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NotificationService} from '../../../../shared/notification.service';
import {CreateKeyComponent} from './create-key/create-key.component';
import {MatDialog} from '@angular/material';
import {DataDeveloperListInterface} from './models/data-developer-list.interface';
import {ConfigService} from '../../../../shared/config.service';
import {TableConfigInterface} from '../../../../shared/component/table/models/table-config.interface';
import {PagingModel} from '../../../../shared/component/table/models/paging-model';

@Component({
  selector: 'app-developer-list',
  templateUrl: './developer-list.component.html',
  styleUrls: ['./developer-list.component.scss']
})
export class DeveloperListComponent implements OnInit {
  keys: DataDeveloperListInterface[] = [];

  tableConfig:TableConfigInterface={
    rowColumnsConfig:[],
    headerNames:['Id','Title','Authentication key','','Modify time','Status'],
    hasShowButton:true,
    hasActions:true
  };

  constructor(private route: ActivatedRoute,
              private ns: NotificationService,
              private router: Router,
              private dialog: MatDialog,
              private configService:ConfigService) {
    this.route.data
      .subscribe((data: { developersList }) => {
        this.keys = data.developersList.data;
      });
  }

  ngOnInit() {
    this.generateRowColumns();
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
    if (this.keys.length < 10) {
      this.openDialog('480px', 'auto', '',
        {});
    } else {
      this.ns.warning('You can add Maximum 10 authentication keys!', '');
    }
  }

  redirectToDocumentation() {
    window.open(this.configService.documentationUrl);
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
          this.keys.unshift({
            id: result.createKey.data.id,
            key: result.createKey.data.key,
            title: result.createKey.data.title,
            isActive: true,
            lastModifiedDateTime: +new Date()
          });
          this.ns.success('create key successfully!', '');
          this.router.navigate(['/developer/modify', result.createKey.data.id]);
        }
      });
  }

  generateRowColumns(){
    this.tableConfig.rowColumnsConfig.push({
      propertyName:'title'
    });

    this.tableConfig.rowColumnsConfig.push({
      propertyName:'key',
      manipulationMethod:(item)=>{
        return item.substring(0,4) + '**********' + item.substring(item.length -4);
      }
    });
  }

  showDetail(item:DataDeveloperListInterface){
    this.router.navigateByUrl(`/developer/modify/${item.id}`);
  }
}
