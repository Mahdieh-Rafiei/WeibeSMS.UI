import {NgModule} from '@angular/core';
import {CountDownComponent} from '../component/count-down/count-down';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCoreModule} from './mat-core-module';
import {ImageUploadComponent} from '../component/image-upload/image-upload.component';
import {SearchComponent} from '../component/search/search.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {DateTimePipe} from '../pipe/date-time.pipe';
import {FilterComponent} from '../component/filter/filter.component';
import {LoadingSpinnerComponent} from '../component/loading-spinner/loading-spinner.component';
import {AngularEditorModule} from '@kolkov/angular-editor';
import {DateFromToComponent} from '../component/date-from-to/date-from-to.component';
import {TableComponent} from '../component/table/table.component';
import {NumericInputDirective} from '../numeric-input.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCoreModule,
    NgxPaginationModule,
    AngularEditorModule
  ],
  declarations: [
    CountDownComponent,
    ImageUploadComponent,
    SearchComponent,
    DateTimePipe,
    FilterComponent,
    TableComponent,
    DateFromToComponent,
    LoadingSpinnerComponent,
    NumericInputDirective
  ],
  entryComponents: [
    LoadingSpinnerComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCoreModule,
    NgxPaginationModule,
    AngularEditorModule,
    CountDownComponent,
    ImageUploadComponent,
    SearchComponent,
    DateTimePipe,
    FilterComponent,
    DateFromToComponent,
    LoadingSpinnerComponent,
    TableComponent,
    NumericInputDirective
  ]
})
export class SharedModule {
}
