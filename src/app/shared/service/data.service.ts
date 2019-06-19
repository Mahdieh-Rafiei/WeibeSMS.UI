import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    data: Subject<{ event: boolean }> = new Subject();
    data$ = this.data.asObservable();

    showHelp: Subject<{ event: boolean }> = new Subject();
    showHelp$ = this.showHelp.asObservable();

    showSideBar: boolean = false;
    show;

    constructor() {
    }

    sendData(data: any) {
        this.data.next(data);
    }

    sendDataShowHelp(value: any) {
        this.showHelp.next(value)
    }

}
