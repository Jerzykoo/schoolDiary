import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { USERID } from 'src/app/core/services/token.service';

@Injectable({ providedIn: 'root' })
export class AddTeacherForm {
  public form: FormGroup<any> = this.fb.group({
    email: ['', [Validators.required]],
    name: ['', [Validators.required]],
    password: ['', [Validators.required]],
    role: ['Teacher', [Validators.required]],
    school: [localStorage.getItem(USERID), [Validators.required]],
    teachSclass: [null, [Validators.required]],
    teachSubject: [null, [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}

  public resetForm(): void {
    this.form.reset({}, { emitEvent: false });
  }
}
