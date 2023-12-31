import { Component } from '@angular/core';
import { AdminService } from '../../store/service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
})
export class ClassesComponent {
  classes!: any[];
  isLoading = false;
  displayedColumns: string[] = ['sclassName', 'actions'];
  constructor(private adminService: AdminService) {}
  ngOnInit() {
    this.isLoading = true;
    this.adminService
      .getClasses()
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe((res: any) => {
        console.log(res);
        this.classes = res;
      });
  }
}
