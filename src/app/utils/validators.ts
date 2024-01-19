import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function email(AC: AbstractControl): ValidationErrors | null {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return AC.value && !regex.test(AC.value) ? { email: true } : null;
}

export function numbers(AC: AbstractControl) {
  return AC.value && !/^[0-9]*$/.test(AC.value) ? { numbers: true } : null;
}
