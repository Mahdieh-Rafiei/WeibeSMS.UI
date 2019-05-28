import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dateTime'
})
export class DateTimePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (moment(new Date(value)).isValid()) {
      return moment(value).format(args);
    }
  }
}
