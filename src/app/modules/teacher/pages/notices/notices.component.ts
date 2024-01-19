import { Component } from '@angular/core';
import { finalize } from 'rxjs';
import { AdminService } from 'src/app/modules/admin/store/service';

@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.scss'],
})
export class NoticesComponent {
  notices!: any[];
  isLoading = false;
  displayedColumns: string[] = ['title', 'details', 'date'];
  constructor(private adminService: AdminService) {}
  ngOnInit() {
    this.isLoading = true;
    this.adminService
      .getSchoolNotices()
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe((res: any) => {
        console.log(res);
        this.notices = res;
      });
  }
}
