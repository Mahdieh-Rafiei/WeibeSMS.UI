import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  baseUrl = 'http://192.168.1.94:8575/api/v1/';
}
