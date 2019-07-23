import {Injectable, Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'sendStatusTranslatorPipe'
})

@Injectable({
  providedIn: 'root'
})
export class SendStatusTranslatorPipe implements PipeTransform {

  transform(value: any, args?: any): string {
    let result = 'Unknown';
    switch (value) {
      case  1:
        result = 'Queued';
        break;

      case 2 :
        result = 'Rejected';
        break;

      case 3:
        result = 'Sent';
        break;

      case 4 :
        result = 'Failed';
        break;
    }
    return result;
  }
}
