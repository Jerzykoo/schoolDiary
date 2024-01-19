import { Component } from '@angular/core';
import { finalize } from 'rxjs';
import { AdminService } from '../../store/service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
})
export class StudentsComponent {
  students!: any[];
  isLoading = false;
  displayedColumns: string[] = ['name', 'rollNum', 'sclassName', 'actions'];
  constructor(private adminService: AdminService) {}
  ngOnInit() {
    this.isLoading = true;
    this.adminService
      .getStudents()
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe((res: any) => {
        this.students = res;
      });
  }
}
