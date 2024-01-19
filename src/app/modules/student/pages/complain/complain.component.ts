import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { TokenService } from 'src/app/core/services/token.service';
import { AdminService } from 'src/app/modules/admin/store/service';
import { StudentService } from '../../store/service';

@Component({
  selector: 'app-complain',
  templateUrl: './complain.component.html',
})
export class ComplainComponent {
  public form: FormGroup = this.fb.group({
    date: ['', [Validators.required]],
    complaint: ['', [Validators.required, Validators.maxLength(128)]],
  });

  maxDate = new Date();
  constructor(
    private studentService: StudentService,
    private fb: FormBuilder,
    private router: Router,
    private toast: HotToastService,
    private route: ActivatedRoute,
    private tokenService: TokenService
  ) {}

  ngOnInit() {
    console.log(this.tokenService.getSchoolId());
  }

  submitForm() {
    const form = {
      ...this.form.value,
      school: this.tokenService.getSchoolId(),
      user: this.tokenService.getUserId(),
    };
    this.studentService.createComplain(form).subscribe((res: any) => {
      if (res?.message) {
        this.toast.info(res.message);
      } else {
        console.log(res);
        this.toast.success('Skarga została pomyślnie złożona');
        // this.form.reset({}, { emitEvent: false });
      }
    });
  }

  ngOnDestroy() {
    console.log('s');

    this.form.reset({}, { emitEvent: false });
  }
}
