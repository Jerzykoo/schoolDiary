import { Component } from '@angular/core';
import { finalize } from 'rxjs';
import { AdminService } from '../../store/service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
})
export class SubjectsComponent {
  subjects!: any[];
  isLoading = false;
  displayedColumns: string[] = ['subName', 'sessions', 'sclassName', 'actions'];
  constructor(private adminService: AdminService) {}
  ngOnInit() {
    this.isLoading = true;
    this.adminService
      .getAllSubjects()
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe((res: any) => {
        console.log(res);
        this.subjects = res;
      });
  }
}
