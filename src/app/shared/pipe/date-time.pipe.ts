import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dateTime'
})
export class DateTimePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (moment(new Date(value * 1000)).isValid()) {
      return moment(new Date(value * 1000)).format(args);
    }
  }
}
