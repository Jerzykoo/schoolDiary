import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TokenService } from 'src/app/core/services/token.service';
import { AdminService } from 'src/app/modules/admin/store/service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
})
export class StudentDetailsComponent {
  student!: any;
  details: any = null;
  isLoading = false;
  displayedColumns: string[] = ['subName', 'marksObtained'];
  displayedAttandanceColumns: string[] = [
    'subName',
    'sessions',
    'presentNumber',
    'attendencePercentage',
    'actions',
  ];
  displayedColumnsAttendenceDetailsScreen: string[] = ['date', 'status'];
  subjectId = this.tokenService.getTeachSubjectId();
  attendance!: any;
  attandanceTable: any[] = [];
  constructor(
    private adminService: AdminService,
    public route: ActivatedRoute,
    private tokenService: TokenService
  ) {}
  ngOnInit() {
    // this.isLoading = true;
    this.adminService
      .getStudent(this.route.snapshot.params['id'])
      .subscribe((student: any) => {
        this.student = student;
        this.attendance = student.attendance.filter(
          (a: any) => a?.subName?._id === this.subjectId
        );
        console.log(this.student);

        this.attendance.forEach((item: any) => {
          let el = this.attandanceTable?.find(
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

  getAttendancePresentBySubject(element: any) {
    return this.attendance.filter(
      (a: any) =>
        a?.subName?._id === element?.subName?._id && a?.status === 'Present'
    )?.length;
  }

  getAttendanceBySubject(element: any) {
    return this.attendance.filter(
      (a: any) => a?.subName?._id === element?.subName?._id
    );
  }

  getPercentageAttendance(element: any) {
    let subAttendance = this.attendance.filter(
      (a: any) => a?.subName?._id === element?.subName?._id
    )?.length;

    return (
      this.getAttendancePresentBySubject(element) / element?.subName?.sessions
    );
  }

  get data() {
    return this.student?.examResult?.filter(
      (examResult: any) => examResult?.subName?._id === this?.subjectId
    );
  }
}
