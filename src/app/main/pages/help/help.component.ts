import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {routerTransition} from "../../../shared/component/animation/animations";
import {ConfigService} from "../../../shared/config.service";
import {DataService} from "../../../shared/service/data.service";
import {NavigationService} from "../../../shared/component/animation/navigation.service";

@Component({
    selector: 'app-help',
    templateUrl: './help.component.html',
    styleUrls: ['./help.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: [
        routerTransition(),
    ]
})
export class HelpComponent implements OnInit {
    @ViewChild('sidenav') sidenav: MatSidenav;

    collapse:boolean =true;


    close() {
        this.sidenav.close();
    }

    constructor(public configService: ConfigService,
                private navigationService: NavigationService,
                private ds: DataService) {
    }
    ngOnInit() {
        this.ds.showHelp$.subscribe(res => {
            if (res) {
                this.open();
            } else {
                this.close();
            }
        });
    }

    open() {
        this.sidenav.open();
    }


}
