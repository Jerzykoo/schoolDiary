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

  displayedColumnsAttendenceDetailsScreen: string[] = ['date', 'status'];
  details: any = null;
  attendance: any[] = [];
  attandanceTable: any[] = [];
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
        this.attendance = student.attendance;
        // this.attandanceTable = student.attendance;

        student.attendance.forEach((item: any) => {
          let el = this.attandanceTable.find(
            (element: any) => element.subName.subName === item.subName.subName
          );

          if (!el) {
            this.attandanceTable = [...this.attandanceTable, item];
          }
        });

        console.log(this.attandanceTable);
        console.log(this.attendance);
      });
  }

  getAttendanceBySubject(element: any) {
    return this.attendance.filter(
      (a: any) => a?.subName?._id === element?.subName?._id
    );
  }

  getAttendancePresentBySubject(element: any) {
    return this.attendance.filter(
      (a: any) =>
        a?.subName?._id === element?.subName?._id && a?.status === 'Present'
    )?.length;
  }

  getPercentageAttendance(element: any) {
    let subAttendance = this.attendance.filter(
      (a: any) => a?.subName?._id === element?.subName?._id
    )?.length;

    return (
      this.getAttendancePresentBySubject(element) / element?.subName?.sessions
    );
  }
}
