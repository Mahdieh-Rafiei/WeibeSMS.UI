import { Injectable } from '@angular/core';
import {tryParse} from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  hasCapitalLetter(phrase:string){
    return phrase.toLowerCase() != phrase;
  }

  hasLowercaseLetter(phrase:string){
    return phrase.toUpperCase() != phrase;
  }

  hasDigit(phrase){
    let regex = /\d/g;
    return regex.test(phrase);
  }
}
