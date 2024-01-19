import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'role',
})
export class rolePipe implements PipeTransform {
  transform(value: string | null) {
    if (value === 'Teacher') {
      return 'Nauczyciel';
    }
    if (value === 'Admin') {
      return 'Administrator';
    }
    if (value === 'Student') {
      return 'Uczeń';
    }
    return '';
  }
}
