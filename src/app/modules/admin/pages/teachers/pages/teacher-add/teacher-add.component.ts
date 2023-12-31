import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AdminService } from 'src/app/modules/admin/store/service';
import { AddTeacherForm } from '../../forms/add-teacher.form';

@Component({
  selector: 'app-teacher-add',
  templateUrl: './teacher-add.component.html',
})
export class TeacherAddComponent {
  constructor(
    private adminService: AdminService,
    private router: Router,
    private toast: HotToastService,
    public route: ActivatedRoute,
    public addTeacherForm: AddTeacherForm
  ) {}

  public submitForm(): void {
    console.log(this.addTeacherForm.form.value);

    this.adminService
      .addTeacher(this.addTeacherForm.form.value)
      .subscribe((res: any) => {
        if (res?.message) {
          this.toast.warning(res?.message);
        } else {
          this.toast.success('Nauczyciel został dodany pomyślnie');
        }
        console.log(res);

        this.router.navigate([`/admin/teachers`]);
      });
  }
}
