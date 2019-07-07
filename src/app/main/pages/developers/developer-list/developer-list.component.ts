import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NotificationService} from '../../../../shared/notification.service';
import {CreateKeyComponent} from './create-key/create-key.component';
import {MatDialog} from '@angular/material';
import {DataDeveloperListInterface} from './models/data-developer-list.interface';
import {ConfigService} from '../../../../shared/config.service';
import {TableConfigInterface} from '../../../../shared/component/table/models/table-config.interface';
import {PagingModel} from '../../../../shared/component/table/models/paging-model';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
    selector: 'app-developer-list',
    templateUrl: './developer-list.component.html',
    styleUrls: ['./developer-list.component.scss']
})
export class DeveloperListComponent implements OnInit {
    keys: DataDeveloperListInterface[] = [];

    tableConfig: TableConfigInterface = {
        rowColumnsConfig: [],
        headersConfig: [
            {hideInResponsive: false, title: 'Id'},
            {hideInResponsive: false, title: 'Title'},
            {hideInResponsive: false, title: 'Authentication key'},
            {hideInResponsive: true, title: ''},
            {hideInResponsive: true, title: 'Modify time'},
            {hideInResponsive: false, title: 'Status'},
        ],
        hasShowButton: true,
        hasActions: true
    };

    constructor(private route: ActivatedRoute,
                private ns: NotificationService,
                private router: Router,
                private dialog: MatDialog,
                private configService: ConfigService) {
        this.route.data
            .subscribe((data: { developersList }) => {
                this.keys = data.developersList.data;
            });
    }

    ngOnInit() {
        this.generateRowColumns();
        this.keys.forEach(k => {
            k.isActive = k.isActive == '1' ? 'Enabled' : 'Disabled'
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
                        isActive: 'Enabled',
                        lastModifiedDateTime: +new Date()
                    });
                    this.ns.success('create key successfully!', '');
                    this.router.navigate(['/developer/modify', result.createKey.data.id]);
                }
            });
    }

    generateRowColumns() {
        this.tableConfig.rowColumnsConfig.push({
            propertyName: 'title', hideInResponsive: false
        });


        this.tableConfig.rowColumnsConfig.push({
            propertyName: 'key', hideInResponsive: false,
            manipulationMethod: (item) => {
                return item.substring(0, 4) + '**********' + item.substring(item.length - 4);
            }
        });

        this.tableConfig.rowColumnsConfig.push({
            hideInResponsive: true,
            buttonConfig: {
                action: (item: DataDeveloperListInterface) => {
                    this.copyText(item.key);
                },
                classSelector: (item => {
                    return 'light-green-btn'
                }),
                innerHTMLSelector: (item => {
                    return `<i class="fa fa-copy"></i>` + ` Copy`;
                })
            }
        });

        this.tableConfig.rowColumnsConfig.push({
            propertyName: 'lastModifiedDateTime', hideInResponsive: true,
            isDate: true
        });

        this.tableConfig.rowColumnsConfig.push({
            propertyName: 'isActive',
            hideInResponsive: false
        });
    }

    showDetail(item) {
        this.router.navigateByUrl('/developer/modify/' + item.id);
    }
}
