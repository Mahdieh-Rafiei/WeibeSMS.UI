import {NgModule} from '@angular/core';
import {CountDownComponent} from '../../auth/count-down';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCoreModule} from './mat-core-module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCoreModule
  ],
  declarations: [
    CountDownComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCoreModule,
    CountDownComponent
  ]
})
export class SharedModule {
}
