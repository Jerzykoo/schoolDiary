import { Component } from '@angular/core';
import { finalize } from 'rxjs';
import { AdminService } from '../../store/service';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
})
export class SubjectsComponent {
  subjects!: any[];
  isLoading = false;
  displayedColumns: string[] = ['subName', 'sessions', 'sclassName', 'actions'];
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
      .getAllSubjects()
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe((res: any) => {
        this.subjects = res;
      });
  }
  removeSubject(id: any) {
    this.adminService.removeSubject(id).subscribe((res: any) => {
      this.toast.success('Przedmiot został pomyślnie usunięty');
      this.getData();
    });
  }
}
