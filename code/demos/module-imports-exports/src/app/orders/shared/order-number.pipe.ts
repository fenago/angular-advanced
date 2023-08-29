import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderNumber'
})
export class OrderNumberPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return 'Order #: ' + value;
  }
}
