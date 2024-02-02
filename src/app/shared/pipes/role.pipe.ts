import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'role',
})
export class rolePipe implements PipeTransform {
  transform(value?: string | null) {
    if (value === 'teacher') {
      return 'Nauczyciel';
    }
    if (value === 'admin') {
      return 'Administrator';
    }
    if (value === 'student') {
      return 'Uczeń';
    }
    return '';
  }
}
