import { Component } from '@angular/core';
import { finalize } from 'rxjs';
import { AdminService } from '../../store/service';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
})
export class StudentsComponent {
  students!: any[];
  isLoading = false;
  displayedColumns: string[] = ['name', 'rollNum', 'sclassName', 'actions'];
  constructor(
    private adminService: AdminService,
    private toast: HotToastService
  ) {}
  ngOnInit() {
    this.getData();
  }
  getData() {
    this.isLoading = true;
    this.adminService
      .getStudents()
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe((res: any) => {
        this.students = res;
      });
  }

  removeUser(id: any) {
    this.adminService.removeStudent(id).subscribe((res: any) => {
      this.toast.success('Uczeń został pomyślnie usunięty');
      this.getData();
    });
  }
}
