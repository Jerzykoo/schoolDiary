import { Component } from '@angular/core';
import { finalize } from 'rxjs';
import { AdminService } from '../../store/service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
})
export class TeachersComponent {
  teachers!: any[];
  isLoading = false;
  displayedColumns: string[] = [
    'name',
    'teachSubject',
    'teachSclass',
    'actions',
  ];
  constructor(private adminService: AdminService) {}
  ngOnInit() {
    this.isLoading = true;
    this.adminService
      .getTeachers()
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe((res: any) => {
        console.log(res);
        this.teachers = res;
      });
  }
}
