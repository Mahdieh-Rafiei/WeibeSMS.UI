import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {DataService} from "../../../shared/service/data.service";


@Component({
    selector: 'app-help',
    templateUrl: './help.component.html',
    styleUrls: ['./help.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class HelpComponent implements OnInit {
    @ViewChild('sidenav') sidenav: MatSidenav;

    close() {
        this.sidenav.close();
    }


    constructor(private ds: DataService) {
    }

    ngOnInit() {
        this.ds.showHelp$.subscribe(res => {
            if (res) {
                this.open()
            } else {
                this.close()
            }
        })
    }

    open() {
        this.sidenav.open()
    }

}
