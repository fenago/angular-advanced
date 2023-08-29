import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateString'
})
export class TruncateStringPipe implements PipeTransform {

  transform(value: any, length: number): any {
    if (value.length > length) {
      return value.substring(0, +length) + '...';
    } else {
      return value;
    }
  }

}
