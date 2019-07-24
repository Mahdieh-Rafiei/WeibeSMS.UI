import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-page-descriptor',
  templateUrl: './page-descriptor.component.html',
  styleUrls: ['./page-descriptor.component.scss']
})

export class PageDescriptorComponent implements OnInit {

  @Input() notice: string;
  @Input() title: string;
  @Input() description: string;

  constructor() {
  }

  ngOnInit() {
  }
}
