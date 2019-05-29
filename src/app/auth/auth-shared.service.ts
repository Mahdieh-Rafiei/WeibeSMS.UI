import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthSharedService {
  keyLogin: string;
  mobile: string;
  prefixNumberId: number;

  constructor() {
  }

}
