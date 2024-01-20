import { Component, Inject } from '@angular/core';

import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';

import {
  FormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { email } from 'src/app/utils/validators';
import { ConstsService } from 'src/app/core/services/const.service';

@Component({
  selector: 'app-edit-user-dialog',
  templateUrl: './edit-user-dialog.component.html',
  styleUrls: ['./edit-user-dialog.component.scss'],
})
export class EditUserDialogComponent {
  public form: UntypedFormGroup = this.fb.group({
    schoolName: ['', [Validators.required, Validators.maxLength(256)]],
    name: ['', [Validators.required, Validators.maxLength(64)]],
  });

  constructor(
    public constsService: ConstsService,
    public dialog: MatDialog,
    private fb: UntypedFormBuilder,
    private ref: MatDialogRef<EditUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      schoolName: string;
      name: string;
    }
  ) {}

  ngOnInit() {
    this.form.patchValue(this.data);
  }

  public editUser(): void {
    this.closepopup();
  }

  closepopup() {
    this.ref.close(this.form.value);
  }

  // ngOnDestroy() {
  //   this.form.reset();
  // }
}
