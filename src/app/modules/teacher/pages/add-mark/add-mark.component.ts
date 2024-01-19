import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AdminService } from 'src/app/modules/admin/store/service';
import { numbers } from 'src/app/utils/validators';

@Component({
  selector: 'app-add-mark',
  templateUrl: './add-mark.component.html',
})
export class AddMarkComponent {
  statusOptions = [
    { title: 'Absent', value: 'Absent' },
    { title: 'Present', value: 'Present' },
  ];
  subjectOptions: any[] = [];
  maxDate = new Date();
  public form: UntypedFormGroup = this.fb.group({
    subName: ['', [Validators.required, Validators.maxLength(64)]],
    marksObtained: [
      '',
      [Validators.required, Validators.max(6), Validators.min(1), numbers],
    ],
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
      .updateMark(this.form.value, this.route.snapshot.params['id'])
      .subscribe((res: any) => {
        if (res?.message) {
          this.toast.warning(res?.message);
        } else {
          this.toast.success('Ocena została dodana pomyślnie');
        }

        this.router.navigate([`/teacher/teach-class`]);
      });
  }
}
