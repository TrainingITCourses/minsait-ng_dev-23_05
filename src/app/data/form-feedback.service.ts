import { FormGroup } from '@angular/forms';

export function hasErrors(form: FormGroup, fieldName: string): boolean {
  const control = form.controls[fieldName];
  if (!control) return false;
  return control.invalid && (control.dirty || control.touched);
}

// @Injectable({
//   providedIn: 'root',
// })
export class FormFeedbackService {
  constructor() {}

  hasErrors(form: FormGroup, fieldName: string): boolean {
    const control = form.controls[fieldName];
    if (!control) return false;
    return control.invalid && (control.dirty || control.touched);
  }

  getErrorMessage(form: FormGroup, field: string): string {
    let message = '';
    const errors = form.get(field)?.errors;
    if (!errors) return message;
    if (errors['required']) {
      message = 'You must enter a value';
    } else if (errors['minlength']) {
      message = 'Min length is 6';
    } else if (errors['max']) {
      message = 'Max value is 1000';
    } else if (errors['min']) {
      message = 'Min value is 0';
    }
    return message;
  }
}
