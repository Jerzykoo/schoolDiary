import { Component } from '@angular/core';
import {
  UntypedFormGroup,
  Validators,
  UntypedFormBuilder,
  FormArray,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AdminService } from 'src/app/modules/admin/store/service';
import { numbers } from 'src/app/utils/validators';
import { ISubjectForm } from '../../state/types';

@Component({
  selector: 'app-add-subjects',
  templateUrl: './add-subjects.component.html',
})
export class AddSubjectsComponent {
  subjectForm: FormGroup<ISubjectForm> = this.fb.group({
    sessions: ['', [Validators.required, Validators.maxLength(64)]],
    subCode: ['', [Validators.required, Validators.maxLength(64)]],
    subName: ['', [Validators.required, Validators.maxLength(64)]],
  });

  form: FormGroup = this.fb.group({
    subjects: new FormArray([] as Array<FormGroup<ISubjectForm>>, {}),
  });

  constructor(
    private adminService: AdminService,
    private fb: UntypedFormBuilder,
    private router: Router,
    private toast: HotToastService,
    public route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.addNextSubject();
    console.log(this.form.value);
  }

  addNextSubject() {
    (<FormArray>this.form.controls['subjects']).push(
      new FormGroup({
        sessions: new FormControl('2', { nonNullable: true }),
        subCode: new FormControl('', { nonNullable: true }),
        subName: new FormControl('', { nonNullable: true }),
      })
    );
  }
}
