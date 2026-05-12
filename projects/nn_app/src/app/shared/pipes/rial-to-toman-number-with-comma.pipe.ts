import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rialToTomanNumberWithComma',
  standalone: true,
})
export class BmnRialToTomanNumberWithCommaPipe implements PipeTransform {
  public transform(value: number): string {
    const sureNumber = Number(value);

    const m = sureNumber / 10;

    if (value === null) {
      return '';
    }

    return `${m.toString().replaceAll(/\B(?=(\d{3})+(?!\d))/g, ',')}تومان`;
  }
}
