import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { email, numbers } from 'src/app/utils/validators';
import { AuthService } from '../../store/service';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
})
export class StudentLoginComponent {
  public form: UntypedFormGroup = this.fb.group({
    studentName: ['', [Validators.required, Validators.maxLength(64)]],
    rollNum: ['', [Validators.required, Validators.maxLength(128), numbers]],
    password: ['', [Validators.required, Validators.maxLength(64)]],
  });
  public checkboxForm: UntypedFormGroup = this.fb.group({
    isRemember: [false],
  });

  constructor(
    private fb: UntypedFormBuilder,
    private authService: AuthService,
    private router: Router,
    private toast: HotToastService
  ) {}

  public submitForm(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.authService.studentLogin(this.form.value).subscribe((res: any) => {
      if (res?.message) {
        this.toast.info(res?.message);
      } else {
        this.router.navigate(['/student/subjects']);
      }
    });
  }
}
