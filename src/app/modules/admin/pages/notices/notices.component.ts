import { Component } from '@angular/core';
import { finalize } from 'rxjs';
import { AdminService } from '../../store/service';

@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
})
export class NoticesComponent {
  notices!: any[];
  isLoading = false;
  displayedColumns: string[] = ['title', 'details', 'date', 'actions'];
  constructor(private adminService: AdminService) {}
  ngOnInit() {
    this.isLoading = true;
    this.adminService
      .getNotices()
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe((res: any) => {
        console.log(res);
        this.notices = res;
      });
  }
}
