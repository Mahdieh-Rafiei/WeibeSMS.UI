import {EventEmitter, Injectable, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {ApiService} from '../api.service';
import {CityInterface} from '../models/city.interface';
import {CacheObject} from '../models/cache-object';
import {CountryInterface} from '../models/country.interface';
import {DashboardInfoInterface} from '../../auth/login/models/dashboard-info.interface';

@Injectable({
  providedIn: 'root'
})

export class SharedService {

  data;

  private _cacheObject: CacheObject;

  // @Output() cacheItemsFilled: EventEmitter<CacheObject> = new EventEmitter<CacheObject>();

  constructor(private as: ApiService) {
    this.fillCacheData();
  }

  getCountries(): Observable<CountryInterface> {
    const url = `BaseData/country`;
    return this.as.get(url, false);
  }

  getCity(countryId): Observable<CityInterface> {
    const url = `BaseData/country/${countryId}/city`;
    return this.as.get(url, true);
  }

  setUserInfo(userInfo: DashboardInfoInterface) {
    this._cacheObject.currentUserInfo = userInfo;
    localStorage.setItem('cache-object', JSON.stringify(this._cacheObject));
  }

  getCurrentUserInfo(): DashboardInfoInterface {
    return this._cacheObject.currentUserInfo;
  }

  checkUnique(payload): Observable<any> {
    const url = `User/isDuplicateValue?key=${payload.key}&value=${payload.value}`;
    return this.as.get(url, false);
  }

  fillCacheData() {
    let cacheJson = localStorage.getItem('cache-object');
    if (cacheJson) {
      this._cacheObject = <CacheObject> JSON.parse(cacheJson);
    } else {
      this._cacheObject = {
        countries: [],
        cities: [],
        currentUserInfo: null
      };
    }
  }
}
