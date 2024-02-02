import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { AdminService } from '../../store/service';
import { ActivatedRoute, Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-add-attendence',
  templateUrl: './add-attendence.component.html',
})
export class AddAttendenceComponent {
  statusOptions = [
    { title: 'Nieobecność', value: 'Absent' },
    { title: 'Obecność', value: 'Present' },
  ];
  subjectOptions: any[] = [];
  maxDate = new Date();
  public form: UntypedFormGroup = this.fb.group({
    subName: ['', [Validators.required, Validators.maxLength(64)]],
    status: ['', [Validators.required, Validators.maxLength(128)]],
    date: ['', [Validators.required]],
  });

  constructor(
    private adminService: AdminService,
    private fb: UntypedFormBuilder,
    private router: Router,
    private toast: HotToastService,
    public route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.adminService.getAllSubjects().subscribe((res: any) => {
      this.subjectOptions = res.map((el: any) => ({
        title: el.subName,
        value: el._id,
      }));
    });
  }

  ngAfterViewInit() {
    if (this.route.snapshot.params['subjectId']) {
      this.form
        .get('subName')
        ?.patchValue(this.route.snapshot.params['subjectId']);
    }
  }

  public submitForm(): void {
    this.adminService
      .updateAttendance(this.form.value, this.route.snapshot.params['id'])
      .subscribe((res: any) => {
        if (res?.message) {
          this.toast.warning(res?.message);
        } else {
          this.toast.success('Obecność została dodana pomyślnie');
        }

        this.router.navigate([
          `/admin/students/details/${this.route.snapshot.params['id']}`,
        ]);
      });
  }
}
