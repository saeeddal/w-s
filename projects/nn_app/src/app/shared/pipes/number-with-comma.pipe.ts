import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberWithComma',
  standalone: true,
})
export class BmnNumberWithCommaPipe implements PipeTransform {
  public transform(value: number | string): string {
    if (value === null) {
      return '';
    }

    if (typeof value === 'number') {
      value = value.toString();
    }

    return value.replaceAll(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}
