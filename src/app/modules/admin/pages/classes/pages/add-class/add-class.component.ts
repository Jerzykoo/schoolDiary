import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { TokenService, USERID } from 'src/app/core/services/token.service';
import { AdminService } from 'src/app/modules/admin/store/service';
import { numbers } from 'src/app/utils/validators';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
})
export class AddClassComponent {
  public form: UntypedFormGroup = this.fb.group({
    sclassName: ['', [Validators.required, Validators.maxLength(64)]],
  });

  constructor(
    private adminService: AdminService,
    private fb: UntypedFormBuilder,
    private router: Router,
    private toast: HotToastService,
    private route: ActivatedRoute,
    private tokenService: TokenService
  ) {}

  submitForm() {
    const form = {
      ...this.form.value,
      adminID: this.tokenService.getUserId(),
    };

    this.adminService.addClass(form).subscribe((res: any) => {
      if (res?.message) {
        this.toast.info(res.message);
      } else {
        this.toast.success('Klasa została pomyślnie dodana');
        this.router.navigate([`/admin/classes`]);
      }
    });
  }
}
