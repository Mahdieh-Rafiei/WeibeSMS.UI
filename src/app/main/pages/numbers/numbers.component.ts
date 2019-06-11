import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NumbersService} from './numbers.service';

@Component({
  selector: 'app-buy-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.scss']
})
export class NumbersComponent implements OnInit {

  constructor(private numberService:NumbersService) { }

  ngOnInit() {
  }

}
