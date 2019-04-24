import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  @Output() sidebarStateChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  baseUrl = 'http://192.168.1.94:8575/api/v1/';


}
