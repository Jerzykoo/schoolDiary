import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { StateResetAll } from 'ngxs-reset-plugin';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ApiService } from 'src/app/core/services/api.service';
import { TokenService } from 'src/app/core/services/token.service';
import { SetUser } from 'src/app/modules/auth/store/actions';
import { ILogin, IStudent, ITeacher, IUser } from './types';
import { SocialAuthService } from '@abacritt/angularx-social-login';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(
    private apiService: ApiService,
    private tokenService: TokenService,
    private store: Store,
    private router: Router,
    private zone: NgZone,
    private authService: SocialAuthService,
    private socialAuthService: SocialAuthService
  ) {}

  public getCurrentUser(token: number): Observable<IUser> {
    return this.apiService.get(`/api/auth/${token}`);
  }

  public adminLogin(data: ILogin): Observable<IUser> {
    return this.apiService.post('/AdminLogin', data).pipe(
      tap((data: IUser) => {
        this.tokenService.saveRole(data.role);
        this.tokenService.saveUserId(data._id);
        this.tokenService.saveFullName(data?.name);
        this.store.dispatch(new SetUser(data));
      })
    );
  }

  public adminReg(data: any): Observable<IUser> {
    return this.apiService.post('/AdminReg', data).pipe(
      tap((data: IUser) => {
        if (data) {
          this.tokenService.saveRole(data.role);
          this.tokenService.saveUserId(data._id);
          this.tokenService.saveFullName(data?.name);
          this.store.dispatch(new SetUser(data));
        }
      })
    );
  }

  public adminGoogleLogin(data: any): Observable<IUser> {
    return this.apiService.post('/AdminGoogleLogin', data).pipe(
      tap((data: IUser) => {
        if (data) {
          this.tokenService.saveRole(data.role);
          this.tokenService.saveUserId(data._id);
          this.tokenService.saveFullName(data?.name);
          this.store.dispatch(new SetUser(data));
        }
      })
    );
  }

  public studentLogin(data: ILogin): Observable<IStudent> {
    return this.apiService.post('/StudentLogin', data).pipe(
      tap((data: IStudent) => {
        this.tokenService.saveRole(data.role);
        this.tokenService.saveUserId(data._id);
        this.tokenService.saveFullName(data?.name);
        this.tokenService.saveSchoolId(data.school._id);
      })
    );
  }

  public teacherLogin(data: ILogin): Observable<ITeacher> {
    return this.apiService.post('/TeacherLogin', data).pipe(
      tap((data: ITeacher) => {
        this.tokenService.saveRole(data.role);
        this.tokenService.saveUserId(data._id);
        this.tokenService.saveSchoolId(data.school._id);
        this.tokenService.saveFullName(data?.name);
        this.tokenService.saveTeachSubjectId(data.teachSubject._id);
        this.tokenService.saveTeachClassId(data.teachSclass._id);
      })
    );
  }

  public getUsers(): Observable<IUser> {
    return this.apiService.get(`/api/user`);
  }

  public logout(): void {
    this.tokenService.removeToken();
    this.tokenService.removeRole();
    this.tokenService.removeSchoolId();
    this.tokenService.removeTeachSubjectId();
    this.tokenService.removeTeachClassId();
    this.tokenService.removeFullName();
    this.tokenService.removeUserId();
    this.store
      .dispatch(new StateResetAll())
      .subscribe(() =>
        this.zone.run(() => this.router.navigateByUrl('/auth/role'))
      );
    this.socialAuthService.signOut().then((val) => {
      console.log(val);
    });
  }
}
