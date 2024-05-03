import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: any, format: string = 'dd-MM-yyyy'): any {
    if (this.isDateString(value)) {
      const date = new Date(value);
      if (!isNaN(date.getTime())) {
        const datePipe = new DatePipe('en-US');
        return datePipe.transform(date, format);
      }
    }
    return value;
  }

  private isDateString(value: any): boolean {
    return typeof value === 'string' && !isNaN(Date.parse(value));
  }
}