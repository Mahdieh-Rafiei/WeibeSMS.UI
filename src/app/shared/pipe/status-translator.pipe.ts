import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'statusTranslator'
})
export class StatusTranslatorPipe implements PipeTransform {

  transform(value: any, args?: any): string {
    let result = 'Unknown';
    switch (value) {
      case  1:
        result = 'Open';
        break;

      case 3:
        result = 'Pending';
        break;

      case 6:
        result = 'Close';
        break;
    }
    return result;
  }

}
