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
  definitions: ItemsDefintionInterface[] = [];

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

}
