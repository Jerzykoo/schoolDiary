import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    public route: ActivatedRoute
  ) {}

  ngOnInit() {
    forkJoin(
      this.adminService.getClass(this.route.snapshot.params['id']),
      this.adminService.getClassSubjects(this.route.snapshot.params['id']),
      this.adminService.getClassStudents(this.route.snapshot.params['id'])
    ).subscribe(([schoolClass, classSubjects, classStudents]) => {
      this.schoolClass = schoolClass;
      this.classSubjects = classSubjects;
      this.classStudents = classStudents;
      console.log(schoolClass);
      console.log(classSubjects);
      console.log(classStudents);
    });
  }
}
