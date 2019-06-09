import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ApiService} from '../api.service';
import {CountryInterface} from '../models/country.interface';
import {CityInterface} from '../models/city.interface';

@Injectable({
  providedIn: 'root'
})

export class SharedService {
  data;

  constructor(private as: ApiService) {

  }

  getCountry(): Observable<CountryInterface> {
    const url = `BaseData/country`;
    return this.as.get(url, false);
  }

  getCity(countryId): Observable<CityInterface> {
    const url = `BaseData/country/${countryId}/city`;
    return this.as.get(url, true);
  }

  checkUnique(payload) {
    const url = `User/isDuplicateValue?key=${payload.key}&value=${payload.value}`;
    return this.as.get(url, false);
  }
}
