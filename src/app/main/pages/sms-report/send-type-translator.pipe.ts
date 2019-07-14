import {Injectable, Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'sendTypeTranslatorPipe'
})
@Injectable({
  providedIn: 'root'
})
export class SendTypeTranslatorPipe implements PipeTransform {

  transform(value: any, args?: any): string {
    let result = 'Unknown';
    switch (value) {
      case  1:
        result = 'Simple';
        break;

      case 2 :
        result = 'Event';
        break;

      case 3:
        result = 'Scheduled';
        break;

      case 4 :
        result = 'Api';
        break;
    }
    return result;
  }
}
