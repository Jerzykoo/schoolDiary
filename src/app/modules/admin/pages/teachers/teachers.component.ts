import { Component } from '@angular/core';
import { finalize } from 'rxjs';
import { AdminService } from '../../store/service';
import { HotToastService } from '@ngneat/hot-toast';

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
      .getTeachers()
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe((res: any) => {
        this.teachers = res;
      });
  }

  removeTeacher(id: any) {
    this.adminService.removeTeacher(id).subscribe((res: any) => {
      this.toast.success('Nauczyciel został pomyślnie usunięty');
      this.getData();
    });
  }
}
