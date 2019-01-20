import { AbstractControl } from '@angular/forms';

export function duplicatecheck(control: AbstractControl) {
  if (!control.value || !control.value.includes('.io')) {
    return { validUrl: true };
  }
  return null;
}