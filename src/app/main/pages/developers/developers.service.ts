import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ApiService} from '../../../shared/api.service';
import {DeveloperListInterface} from './developer-list/models/developer-list.interface';

@Injectable({
  providedIn: 'root'
})

export class DevelopersService {

  constructor(private apiService: ApiService) {
  }


  getAllKeys(): Observable<DeveloperListInterface> {
    const url = `UserApiKey`;
    return this.apiService.get(url, true);
  }

  addKey(payload): Observable<any> {
    const url = `UserApiKey`;
    return this.apiService.post(url, payload, true);
  }
}
