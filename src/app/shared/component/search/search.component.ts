import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Component({
    selector: 'app-search',
    template: `
        <form [formGroup]="formGroup">
            <div class="input-group text-right">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1"><i class="fa fa-search"></i></span>
                </div>
                <input type="text" formControlName="searchValue" (keyup)="onKeyUp()" class="form-control" (keydown)="onKeyDown()">
            </div>
        </form>
    `,
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
