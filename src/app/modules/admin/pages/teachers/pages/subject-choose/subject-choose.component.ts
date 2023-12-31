import { Component } from '@angular/core';
import { AdminService } from 'src/app/modules/admin/store/service';
import { AddTeacherForm } from '../../forms/add-teacher.form';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-subject-choose',
  templateUrl: './subject-choose.component.html',
})
export class SubjectChooseComponent {
  subjects!: any[];
  isLoading = false;
  displayedColumns: string[] = ['subName', 'subCode', 'actions'];
  constructor(
    private adminService: AdminService,
    private addTeacherForm: AddTeacherForm,
    private router: Router,
    public route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.isLoading = true;
    this.adminService
      .getFreeSubjectList(this.route.snapshot.params['classId'])
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe((res: any) => {
        if (res?.message) {
          this.subjects = [];
        } else {
          this.subjects = res;
        }
        console.log(res);
      });
  }

  selectSubject(element: any) {
    console.log(element);
    this.addTeacherForm.form.get('teachSubject')?.patchValue(element._id);
    this.router.navigate([`/admin/teachers/add`]);
  }
}
