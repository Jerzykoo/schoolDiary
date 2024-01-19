import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'attandanceStatus',
})
export class attandanceStatusPipe implements PipeTransform {
  transform(value: string) {
    if (value === 'Present') {
      return 'Obecny';
    }
    if (value === 'Absent') {
      return 'Nieobecny';
    }
    return '';
  }
}
