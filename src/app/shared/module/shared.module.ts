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
import {BarChartComponent} from '../component/bar-chart/bar-chart.component';
import {ChartsModule} from 'ng2-charts';
import {QuickShowNotificationComponent} from '../../main/layout/top-nav/quick-show-notification/quick-show-notification.component';
import {MessageTemplateBuilderComponent} from '../component/message-template-builder/message-template-builder.component';
import {SelectContactsComponent} from '../component/select-contacts/select-contacts.component';
import {NoSanitizePipe} from '../pipe/no-sanitize.pipe';
import {CountryFlagNumbersComponent} from '../component/country-flag-numbers/country-flag-numbers.component';
import {UnderConstructionComponent} from '../component/under-construction/under-construction.component';
import {VerifyMobileComponent} from '../component/verify-mobile/verify-mobile.component';
import {PageDescriptorComponent} from '../component/page-descriptor/page-descriptor.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCoreModule,
    NgxPaginationModule,
    AngularEditorModule,
    ChartsModule
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
    NumericInputDirective,
    BarChartComponent,
    QuickShowNotificationComponent,
    MessageTemplateBuilderComponent,
    SelectContactsComponent,
    NoSanitizePipe,
    CountryFlagNumbersComponent,
    UnderConstructionComponent,
    VerifyMobileComponent,
    PageDescriptorComponent
  ],
  entryComponents: [
    LoadingSpinnerComponent,
    QuickShowNotificationComponent
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
    NumericInputDirective,
    BarChartComponent,
    QuickShowNotificationComponent,
    MessageTemplateBuilderComponent,
    SelectContactsComponent,
    NoSanitizePipe,
    CountryFlagNumbersComponent,
    UnderConstructionComponent,
    VerifyMobileComponent,
    PageDescriptorComponent
  ]
})
export class SharedModule {
}
