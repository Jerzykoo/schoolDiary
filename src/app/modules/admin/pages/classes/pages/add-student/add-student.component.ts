import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { USERID } from 'src/app/core/services/token.service';
import { AdminService } from 'src/app/modules/admin/store/service';
import { numbers } from 'src/app/utils/validators';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
})
export class AddStudentComponent {
  public form: UntypedFormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(64)]],
    rollNum: ['', [Validators.required, numbers, Validators.maxLength(128)]],
    password: ['', [Validators.required]],
  });

  constructor(
    private adminService: AdminService,
    private fb: UntypedFormBuilder,
    private router: Router,
    private toast: HotToastService,
    private route: ActivatedRoute
  ) {}

  submitForm() {
    const form = {
      ...this.form.value,
      sclassName: this.route.snapshot.params['classId'],
      role: 'student',
      adminID: localStorage.getItem(USERID),
    };

    this.adminService.registerStudent(form).subscribe((res: any) => {
      if (res?.message) {
        this.toast.info(res.message);
      } else {
        this.toast.success('Student został pomyślnie dodany do klasy');
        this.router.navigate([
          `/admin/classes/details${this.route.snapshot.params['classId']}`,
        ]);
      }
    });
  }
}
