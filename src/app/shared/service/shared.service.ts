import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ApiService} from '../api.service';
import {CityInterface} from '../models/city.interface';
import {CacheObject} from '../models/cache-object';
import {CountryInterface} from '../models/country.interface';
import {DataCountryInterface} from '../models/data-country.interface';
import {UserInfoInterface} from '../../auth/login/models/user-info.interface';

@Injectable({
  providedIn: 'root'
})

export class SharedService {

  data;
  _cacheObject: CacheObject;

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

  setUserInfo(userInfo: UserInfoInterface) {
    this._cacheObject.currentUserInfo = userInfo;
    localStorage.setItem('cache-object', JSON.stringify(this._cacheObject));
  }

  setCountries(countries: DataCountryInterface[]) {
    this._cacheObject.countries = countries;
    localStorage.setItem('cache-object', JSON.stringify(this._cacheObject));
  }

  getCurrentUserInfo(): UserInfoInterface {
    return this._cacheObject.currentUserInfo;
  }

  getCountriesByCache(): DataCountryInterface[] {
    return this._cacheObject.countries;
  }

  checkUnique(payload): Observable<any> {
    const url = `User/isDuplicateValue?key=${payload.key}&value=${payload.value}`;
    return this.as.get(url, false);
  }

  fillCacheData() {
    const cacheJson = localStorage.getItem('cache-object');
    if (cacheJson) {
      this._cacheObject = JSON.parse(cacheJson) as CacheObject;
    } else {
      this._cacheObject = {
        countries: [],
        cities: [],
        currentUserInfo: null
      };
    }
  }
}
