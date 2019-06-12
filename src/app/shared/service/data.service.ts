import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: Subject<{ event: boolean }> = new Subject();
  data$ = this.data.asObservable();

  constructor() {
  }

  sendData(data: any) {
    this.data.next(data);
  }

}
