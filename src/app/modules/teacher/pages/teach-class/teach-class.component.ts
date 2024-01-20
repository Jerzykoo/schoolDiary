import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { finalize } from 'rxjs';
import {
  TEACH_CLASS_ID,
  TokenService,
} from 'src/app/core/services/token.service';
import { AdminService } from 'src/app/modules/admin/store/service';

@Component({
  selector: 'app-teach-class',
  templateUrl: './teach-class.component.html',
})
export class TeachClassComponent {
  subjectId = this.tokenService.getTeachSubjectId();
  students!: any[];
  isLoading = false;
  displayedColumns: string[] = ['name', 'rollNum', 'actions'];
  constructor(
    private adminService: AdminService,
    public route: ActivatedRoute,
    private tokenService: TokenService,
    private toast: HotToastService
  ) {}
  ngOnInit() {
    this.getData();
  }

  getData() {
    this.isLoading = true;
    this.adminService
      .getClassStudents(localStorage.getItem(TEACH_CLASS_ID) as string)
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe((res: any) => {
        console.log(res);

        this.students = res;
      });
  }

  removeStudent(id: any) {
    this.adminService.removeStudent(id).subscribe((res: any) => {
      this.toast.success('Uczeń został pomyślnie usunięty');
      this.getData();
    });
  }
}
