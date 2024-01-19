import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs';
import { TokenService } from 'src/app/core/services/token.service';
import { AdminService } from 'src/app/modules/admin/store/service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
})
export class AttendanceComponent {
  student!: any;
  isLoading = false;
  displayedColumns: string[] = [
    'subName',
    'sessions',
    'presentNumber',
    'attendencePercentage',
    'actions',
  ];
  details: any = null;
  attendance: any[] = [];
  constructor(
    private adminService: AdminService,
    public route: ActivatedRoute,
    private tokenService: TokenService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.adminService
      .getStudent(this.tokenService.getUserId() as string)
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe((student) => {
        this.student = student;

        student.attendance.forEach((item: any) => {
          if (
            !this.attendance.find(
              (element: any) => element.subName.subName === item.subName.subName
            )
          ) {
            this.attendance.push(item);
          }
        });
        this.cdr.detectChanges();

        console.log(this.attendance);
      });
  }
}
