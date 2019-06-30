import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
    formGroup: FormGroup;
    subject: Subject<any> = new Subject();

    @Output() countDownEmit: EventEmitter<boolean> = new EventEmitter<boolean>();

    @Output() searchText: EventEmitter<string> = new EventEmitter<string>();

    constructor(private fb: FormBuilder) {
    }

    ngOnInit(): void {
        this.formGroup = this.fb.group({
            searchValue: ['']
        });

        this.subject
            .pipe(debounceTime(500))
            .subscribe(() => {
                    this.formGroup.controls.searchValue.updateValueAndValidity();
                    this.searchText.emit(this.formGroup.value.searchValue);
                }
            );
    }

    onKeyUp(): void {
        this.subject.next();
    }

    onKeyDown(): void {
        this.formGroup.controls.searchValue.clearValidators();
    }
}
