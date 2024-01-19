import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AdminService } from 'src/app/modules/admin/store/service';

@Component({
  selector: 'app-add-notice',
  templateUrl: './add-notice.component.html',
})
export class AddNoticeComponent {
  maxDate = new Date();
  public form: UntypedFormGroup = this.fb.group({
    title: ['', [Validators.required, Validators.maxLength(64)]],
    details: ['', [Validators.required, Validators.maxLength(128)]],
    date: ['', [Validators.required]],
  });

  constructor(
    private adminService: AdminService,
    private fb: UntypedFormBuilder,
    private router: Router,
    private toast: HotToastService
  ) {}

  public submitForm(): void {
    // if (this.form.invalid) {
    //   this.form.markAllAsTouched();
    //   return;
    // }

    this.adminService.addNotice(this.form.value).subscribe((res: any) => {
      this.toast.success('Notatka została dodana pomyślnie');
      this.router.navigate(['/admin/notices']);
    });
  }
}
