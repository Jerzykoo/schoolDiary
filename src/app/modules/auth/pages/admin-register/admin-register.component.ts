import { Component, Inject } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { Subscription, finalize, from, switchMap } from 'rxjs';
import { AuthService } from '../../store/service';
import { email } from 'src/app/utils/validators';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { EditUserDialogComponent } from 'src/app/shared/components/edit-user-dialog/edit-user-dialog.component';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
})
export class AdminRegisterComponent {
  public isSubmitting = false;
  public showPasswordScreen = false;

  public form: UntypedFormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.maxLength(256), email]],
    schoolName: ['', [Validators.required, Validators.maxLength(256)]],
    role: ['Admin', [Validators.required, Validators.maxLength(256)]],
    name: ['', [Validators.required, Validators.maxLength(256)]],
    password: ['Test123!', [Validators.required, Validators.maxLength(64)]],
  });
  public checkboxForm: UntypedFormGroup = this.fb.group({
    isRemember: [false],
  });
  private subscription$: Subscription = new Subscription();

  constructor(
    private fb: UntypedFormBuilder,
    private authService: AuthService,
    private router: Router,
    private toast: HotToastService,
    private socialAuthService: SocialAuthService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.subscription$.add(
      this.socialAuthService.authState.subscribe((user) => {
        console.log(user);
        if (user) {
          const dialogRef = this.dialog.open(EditUserDialogComponent, {
            data: { schoolName: '', name: '' },
            width: '400px',
          });

          dialogRef.afterClosed().subscribe((result) => {
            if (result) {
              this.authService
                .adminReg({
                  token: user.idToken,
                  role: 'Admin',
                  name: result.name,
                  schoolName: result.schoolName,
                })
                .subscribe((res: any) => {
                  console.log(res);

                  if (res?.message) {
                    if (res?.message === 'Email already exists') {
                      this.authService
                        .adminGoogleLogin({ token: user.idToken })
                        .subscribe((res: any) => {
                          if (res?.message) {
                            this.toast.warning(res?.message);
                          } else {
                            this.router.navigate(['/admin/dashboard']);
                          }
                        });
                    } else {
                      this.toast.warning(res?.message);
                    }
                  } else {
                    this.router.navigate(['/admin/dashboard']);
                  }
                });
            }
          });
        }
      })
    );
  }

  public submitForm(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.authService.adminReg(this.form.value).subscribe((res: any) => {
      this.router.navigate(['/admin/dashboard']);
    });
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }
}
