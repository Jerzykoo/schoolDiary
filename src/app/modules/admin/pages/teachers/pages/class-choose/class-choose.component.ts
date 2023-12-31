import { Component } from '@angular/core';
import { finalize } from 'rxjs';
import { AdminService } from 'src/app/modules/admin/store/service';
import { AddTeacherForm } from '../../forms/add-teacher.form';
import { Router } from '@angular/router';

@Component({
  selector: 'app-class-choose',
  templateUrl: './class-choose.component.html',
})
export class ClassChooseComponent {
  classes!: any[];
  isLoading = false;
  displayedColumns: string[] = ['sclassName', 'actions'];
  constructor(
    private adminService: AdminService,
    private addTeacherForm: AddTeacherForm,
    private router: Router
  ) {}
  ngOnInit() {
    this.isLoading = true;
    this.adminService
      .getClasses()
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe((res: any) => {
        this.classes = res;
      });
  }

  selectClass(element: any) {
    this.addTeacherForm.form.get('teachSclass')?.patchValue(element._id);
    this.router.navigate([`/admin/subject-choose/${element._id}`]);
  }
}
