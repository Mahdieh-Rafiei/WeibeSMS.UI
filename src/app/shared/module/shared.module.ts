import {NgModule} from '@angular/core';
import {CountDownComponent} from '../../auth/count-down';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCoreModule} from './mat-core-module';
import {ImageUploadComponent} from '../component/image-upload/image-upload.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCoreModule
  ],
  declarations: [
    CountDownComponent,
    ImageUploadComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCoreModule,
    CountDownComponent,
    ImageUploadComponent
  ]
})
export class SharedModule {
}
