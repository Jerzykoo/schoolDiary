import { Component } from '@angular/core';
import { finalize } from 'rxjs';
import { TEACH_CLASS_ID } from 'src/app/core/services/token.service';
import { AdminService } from 'src/app/modules/admin/store/service';

@Component({
  selector: 'app-teach-class',
  templateUrl: './teach-class.component.html',
})
export class TeachClassComponent {
  students!: any[];
  isLoading = false;
  displayedColumns: string[] = ['name', 'rollNum', 'actions'];
  constructor(private adminService: AdminService) {}
  ngOnInit() {
    this.isLoading = true;
    this.adminService
      .getClassStudents(localStorage.getItem(TEACH_CLASS_ID) as string)
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe((res: any) => {
        console.log(res);
        this.students = res;
      });
  }
}
