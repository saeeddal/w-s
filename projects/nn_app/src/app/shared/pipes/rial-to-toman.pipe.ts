import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rialToToman',
  standalone: true,
})
export class BmnRialToTomanPipe implements PipeTransform {
  public transform(value: number): string {
    const SURE_NUMBER = Number(value);

    return `${SURE_NUMBER / 10}تومان `;
  }
}
