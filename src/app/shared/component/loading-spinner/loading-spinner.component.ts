import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  template: `
    <div class="loading">
      <mat-spinner class="element"
                   [color]="color">
      </mat-spinner>
    </div>

  `,
  styleUrls: ['./loading-spinner.component.scss']
})
export class LoadingSpinnerComponent implements OnInit {
  color = 'Primary';

  constructor() {
  }

  ngOnInit() {
  }

}
