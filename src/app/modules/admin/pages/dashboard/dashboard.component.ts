import { Component, Inject } from '@angular/core';
import { AdminService } from '../../store/service';
import { IUser } from '../../store/types';
import { MatDialog } from '@angular/material/dialog';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { AddUserDialogComponent } from '../../components/add-user-dialog/add-user-dialog.component';
import { EditUserDialogComponent } from '../../components/edit-user-dialog/edit-user-dialog.component';
import { Subscription, debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  public isLoading = false;
  public users!: IUser[];
  public email!: any;

  private subscription$: Subscription = new Subscription();
  public formSearch: UntypedFormGroup = this.fb.group({
    search: '',
  });

  students!: any[];
  classes!: any[];
  teachers!: any[];
  constructor(
    private adminService: AdminService,
    public dialog: MatDialog,
    private fb: UntypedFormBuilder,
    private toast: HotToastService
  ) {}

  ngOnInit() {
    this.adminService.getStudents().subscribe((res: any) => {
      console.log(res);
      this.students = res;
    });
    this.adminService.getTeachers().subscribe((res: any) => {
      console.log(res);
      this.teachers = res;
    });
    this.adminService.getClasses().subscribe((res: any) => {
      console.log(res);
      this.classes = res;
    });
  }
}
