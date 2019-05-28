import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ConfigService} from '../config.service';
import {ApiService} from '../api.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CountryInterface} from '../models/country.interface';
import {CityInterface} from '../models/city.interface';

@Injectable({
  providedIn: 'root'
})

export class SharedService {
  httpOptions: any = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
    observe: 'response'
  };

  constructor(private as: ApiService,
              private cs: ConfigService,
              private http: HttpClient) {

  }

  getCountry(): Observable<CountryInterface> {
    const url = `BaseData/country`;
    return this.as.get(url, true);
  }

  getCity(countryId): Observable<CityInterface> {
    const url = `BaseData/country/${countryId}/city`;
    return this.as.get(url, true);
  }
}
