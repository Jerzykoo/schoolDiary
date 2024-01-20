import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { forkJoin } from 'rxjs';
import { AdminService } from 'src/app/modules/admin/store/service';

@Component({
  selector: 'app-classes-details',
  templateUrl: './classes-details.component.html',
})
export class ClassesDetailsComponent {
  students: any[] = [];
  classSubjects: any[] = [];
  classStudents: any[] = [];
  schoolClass!: any;

  displayedColumns: string[] = ['name', 'rollNum', 'actions'];
  displayedColumnsSubjects: string[] = ['subName', 'sessions', 'actions'];

  constructor(
    private adminService: AdminService,
    public route: ActivatedRoute,
    private toast: HotToastService
  ) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    forkJoin(
      this.adminService.getClass(this.route.snapshot.params['id']),
      this.adminService.getClassSubjects(this.route.snapshot.params['id']),
      this.adminService.getClassStudents(this.route.snapshot.params['id'])
    ).subscribe(([schoolClass, classSubjects, classStudents]) => {
      if (!schoolClass?.message) {
        this.schoolClass = schoolClass;
      }

      if (!classSubjects?.message) {
        this.classSubjects = classSubjects;
      }

      if (!classStudents?.message) {
        this.classStudents = classStudents;
      }
    });
  }
  removeSubject(id: any) {
    this.adminService.removeSubject(id).subscribe((res: any) => {
      this.toast.success('Przedmiot został pomyślnie usunięty');
      this.getData();
    });
  }

  removeUser(id: any) {
    this.adminService.removeStudent(id).subscribe((res: any) => {
      this.toast.success('Uczeń został pomyślnie usunięty');
      this.getData();
    });
  }
}
