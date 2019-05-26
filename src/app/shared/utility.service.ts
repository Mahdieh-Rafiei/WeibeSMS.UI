import {Injectable} from '@angular/core';
import _ from 'node_modules/lodash/lodash.js';
import {AbstractControl} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() {
  }

  hasCapitalLetter(phrase: string) {
    return phrase.toLowerCase() != phrase;
  }

  hasLowercaseLetter(phrase: string) {
    return phrase.toUpperCase() != phrase;
  }

  hasDigit(phrase) {
    const regex = /\d/g;
    return regex.test(phrase);
  }

  filterByExpression(sourceCollection: any[], filteredCollection: any[], columnName, expression) {

    _.remove(filteredCollection);
    expression = expression.toLowerCase();
    let filtered;
    if (expression.length === 0) {
      filtered = sourceCollection;
    } else {
      filtered = sourceCollection.filter((s) => {
        let val = s[columnName];
        val = val.toLowerCase();
        return val.indexOf(expression) > -1;
      });
    }
    filtered.forEach(f => filteredCollection.push(f));
  }
}
