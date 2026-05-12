import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true,
})
export class BmnTruncatePipe implements PipeTransform {
  public transform(input: string, maxLength = 24): string {
    if (input && input.length > maxLength) {
      return `${input.slice(0, Math.max(0, maxLength))}...`;
    }

    return input;
  }
}
