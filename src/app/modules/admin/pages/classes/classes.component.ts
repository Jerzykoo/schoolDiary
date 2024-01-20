import { Component } from '@angular/core';
import { AdminService } from '../../store/service';
import { finalize } from 'rxjs';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
})
export class ClassesComponent {
  classes!: any[];
  isLoading = false;
  displayedColumns: string[] = ['sclassName', 'actions'];
  constructor(
    private adminService: AdminService,
    private toast: HotToastService
  ) {}
  ngOnInit() {
    this.getClasses();
  }

  private getClasses() {
    this.isLoading = true;
    this.adminService
      .getClasses()
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe((res: any) => {
        this.classes = res;
      });
  }

  removeClass(id: any) {
    this.adminService.removeClass(id).subscribe((res: any) => {
      this.toast.success('Klasa została pomyślnie usunięta');
      this.getClasses();
    });
  }
}
