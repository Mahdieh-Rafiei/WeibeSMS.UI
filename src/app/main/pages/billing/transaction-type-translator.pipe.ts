import {Injectable, Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'transactionTypeTranslator'
})
@Injectable({
  providedIn: 'root'
})
export class TransactionTypeTranslatorPipe implements PipeTransform {

  transform(value: any, args?: any): string {
    let result = 'Unknown';
    switch (value) {
      case  1:
        result = 'Buy credit';
        break;

      case 2 :
        result = 'Send sms';
        break;

      case 3:
        result = 'Buy line';
        break;

      case 4 :
        result = 'Extend line';
        break;

      case 5 :
        result = 'Send one to one message';
        break;
    }
    return result;
  }

}
