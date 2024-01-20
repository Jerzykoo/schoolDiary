import { Component } from '@angular/core';
import { finalize } from 'rxjs';
import { AdminService } from '../../store/service';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
})
export class NoticesComponent {
  notices!: any[];
  isLoading = false;
  displayedColumns: string[] = ['title', 'details', 'date', 'actions'];
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
      .getNotices()
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe((res: any) => {
        this.notices = res;
      });
  }

  removeNotice(id: any) {
    this.adminService.removeNotice(id).subscribe((res: any) => {
      this.toast.success('Notatka została pomyślnie usunięta');
      this.getData();
    });
  }
}
