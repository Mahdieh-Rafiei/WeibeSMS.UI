import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class DialogComponent implements OnInit {
    optionIndex: number;
    modalText: string;
    modalType: string;
    id: string;

    constructor(public dialogRef: MatDialogRef<DialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any) {
        this.optionIndex = data.index;
        this.modalText = data.modalText;
        this.modalType = data.modalType;
        this.id = data.id;

    }

    ngOnInit() {
    }

    public onSubmit() {
        this.dialogRef.close({remove: {modalType: this.modalType, data: {id: this.id, index: this.optionIndex}}});
    }

    public closeDialog() {
        this.dialogRef.close();
    }
}
