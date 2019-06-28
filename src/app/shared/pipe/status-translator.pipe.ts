import {Injectable, Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'statusTranslator'
})
@Injectable({
  providedIn: 'root'
})
export class StatusTranslatorPipe implements PipeTransform {

  transform(value: any, args?: any): string {
    let result = 'Unknown';
    switch (value) {
      case  1:
        result = 'Open';
        break;

      case 2 :
        result = 'Admin answered';
        break;

      case 3:
        result = 'Pending';
        break;

      case 4 :
        result = 'On hold';
        break;

      case 5 :
        result = 'On progress';
        break;

      case 6:
        result = 'Close';
        break;
    }
    return result;
  }

}
