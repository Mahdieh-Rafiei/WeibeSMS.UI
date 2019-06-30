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

  onlyDigit(phrase) {
    const regex = /^[0-9]+$/;
    return regex.test(phrase);
  }

  isMobile(phrase){
    return this.onlyDigit(phrase) && phrase.length == 10;
  }

  checkEmail(phrase) {
    const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
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

  containsNonLatinCodepoints(s) {
    return /[^A-Za-z0-9 \\r\\n@£$¥èéùìòÇØøÅå\u0394_\u03A6\u0393\u0027\u0022\u039B\u03A9\u03A0\u03A8\u03A3\u0398\u039EÆæßÉ!\#$%&amp;()*+,\\./\-:;&lt;=&gt;?¡ÄÖÑÜ§¿äöñüà^{}\\\\\\[~\\]|\u20AC]*/.test(s);
  }
}
