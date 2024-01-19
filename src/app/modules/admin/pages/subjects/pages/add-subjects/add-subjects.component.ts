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
import { ISubjectForm } from '../../state/types';
import { USERID } from 'src/app/core/services/token.service';
import { numbers } from 'src/app/utils/validators';

@Component({
  selector: 'app-add-subjects',
  templateUrl: './add-subjects.component.html',
})
export class AddSubjectsComponent {
  subjectForm: FormGroup<ISubjectForm> = this.fb.group({
    sessions: ['', [Validators.required, Validators.maxLength(64), numbers]],
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
  }

  addNextSubject() {
    (<FormArray>this.form.controls['subjects']).push(
      new FormGroup({
        sessions: new FormControl('', [
          Validators.required,
          Validators.maxLength(64),
          numbers,
        ]),
        subCode: new FormControl('', [
          Validators.required,
          Validators.maxLength(64),
        ]),
        subName: new FormControl('', [
          Validators.required,
          Validators.maxLength(64),
        ]),
      })
    );
  }
  removeFormGroup(item: FormGroup, index: number) {
    (<FormArray>this.form.controls['subjects'])?.removeAt(index);
  }

  submitForm() {
    const form = {
      subjects: this.form.value.subjects,
      adminID: localStorage.getItem(USERID),
      sclassName: this.route.snapshot.params['classId'],
    };

    this.adminService.addSubject(form).subscribe((res: any) => {
      this.toast.success(
        `${
          this.form.value.subjects.value?.length
            ? 'Przedmioty zostały dodane'
            : 'Przedmiot został dodany'
        } pomyślnie`
      );
    });
  }
}
