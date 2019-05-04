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

  filterByExpression(sourceCollection:any[],columnName,expression){

    expression = expression.toLowerCase();
    let filtered;
    if (expression.length == 0){
      filtered = sourceCollection;
    }else {
      filtered = sourceCollection.filter((s)=>{

        let val = s[columnName];
        val = val.toLowerCase();
        return val.indexOf(expression) > -1;
      });
    }
    return filtered;
  }
}
