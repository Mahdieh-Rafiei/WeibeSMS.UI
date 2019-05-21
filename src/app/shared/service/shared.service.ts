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

  // uploadFile(file: File): Observable<any> {
  //   // const url = `${apiService}`;
  //
  //   const options = {
  //     headers: this.httpOptions.headers.append('Authorization', localStorage.getItem(this.cs.tokenKeyName)),
  //     observe: this.httpOptions.observe
  //   };
  //
  //   return this.http.post<File>('http://192.168.1.94:8070/app/api/Upload', file, options);
  // }


  uploadFile(file, apiService) {
    const url = `http://192.168.1.94:8070/app/api/${apiService}`;
    return this.as.postFile<File>(url, file, true);
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
