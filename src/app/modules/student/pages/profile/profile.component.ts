import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs';
import { TokenService } from 'src/app/core/services/token.service';
import { AdminService } from 'src/app/modules/admin/store/service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
  student!: any;
  isLoading = false;

  constructor(
    private adminService: AdminService,
    public route: ActivatedRoute,
    private tokenService: TokenService
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.adminService
      .getStudent(this.tokenService.getUserId() as string)
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe((student) => {
        this.student = student;
        console.log(student);
      });
  }
}
