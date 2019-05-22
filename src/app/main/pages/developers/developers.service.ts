import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ApiService} from '../../../shared/api.service';

@Injectable({
  providedIn: 'root'
})

export class BillingService {

  constructor(private apiService: ApiService) {
  }


  developersList(): Observable<> {
    const url = `UserApiKey`;
    return this.apiService.get(url, true);
  }

}
