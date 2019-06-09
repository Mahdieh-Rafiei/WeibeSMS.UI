import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NotificationService} from '../../../../shared/notification.service';
import {CreateKeyComponent} from './create-key/create-key.component';
import {MatDialog} from '@angular/material';
import {DataDeveloperListInterface} from './models/data-developer-list.interface';

@Component({
    selector: 'app-developer-list',
    templateUrl: './developer-list.component.html',
    styleUrls: ['./developer-list.component.scss']
})
export class DeveloperListComponent implements OnInit {
    keys: DataDeveloperListInterface[] = [];
    showAuthKey = [];

    constructor(private route: ActivatedRoute,
                private ns: NotificationService,
                private router: Router,
                private dialog: MatDialog) {
        this.route.data
            .subscribe((data: { developersList }) => {
                this.keys = data.developersList.data;
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
        if (this.keys.length < 10) {
            this.openDialog('400px', 'auto', '',
                {});
        } else {
            this.ns.warning('You can add Maximum 10 authentication keys!', '');
        }
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
                    this.router.navigate(['/developer/modify', result.createKey.data.id])
                }
            });
    }
}
