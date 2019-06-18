import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DefinitionInterface} from './models/definition.interface';
import {ItemsDefintionInterface} from './models/items-defintion.interface';

@Component({
    selector: 'app-definition-schedule-event',
    templateUrl: './definition-schedule-event.component.html',
    styleUrls: ['./definition-schedule-event.component.scss']
})
export class DefinitionScheduleEventComponent implements OnInit {
    //Todo: definitions Model
    definitions: any = [];
    phrase = '';

    constructor(private route: ActivatedRoute) {
        this.route.data
            .subscribe((data: {
                definitions: DefinitionInterface
            }) => {
                this.definitions = data.definitions.data.items;
            });
    }

    ngOnInit() {
    }

    // getData(event) {
    //     this.phrase = event;
    //     this.getAllDefinitionScheduleEvent();
    // }
}
