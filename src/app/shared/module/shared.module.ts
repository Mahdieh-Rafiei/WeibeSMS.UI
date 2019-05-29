import {NgModule} from '@angular/core';
import {CountDownComponent} from '../component/count-down/count-down';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCoreModule} from './mat-core-module';
import {ImageUploadComponent} from '../component/image-upload/image-upload.component';
import {SearchComponent} from "../component/search/search.component";
import {NgxPaginationModule} from "ngx-pagination";
import {DateTimePipe} from "../pipe/date-time.pipe";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatCoreModule,
        NgxPaginationModule,
    ],
    declarations: [
        CountDownComponent,
        ImageUploadComponent,
        SearchComponent,
        DateTimePipe,
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatCoreModule,
        NgxPaginationModule,
        CountDownComponent,
        ImageUploadComponent,
        SearchComponent,
        DateTimePipe,
    ]
})
export class SharedModule {
}
