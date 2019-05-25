import {Component, Input, ViewChild} from '@angular/core';
import {MatAutocomplete,} from "@angular/material";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
@Input() params;
    visible = true;
    selectable = true;
    @ViewChild('auto') matAutocomplete: MatAutocomplete;

    constructor() {
    }

}

