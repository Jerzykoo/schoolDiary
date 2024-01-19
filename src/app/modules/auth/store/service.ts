import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { HttpCacheManager } from '@ngneat/cashew';
import { Store } from '@ngxs/store';
import { StateResetAll } from 'ngxs-reset-plugin';
import { Observable, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { ApiService } from 'src/app/core/services/api.service';
import { TokenService } from 'src/app/core/services/token.service';
import { SetUser } from 'src/app/modules/auth/store/actions';
import { ILogin, IStudent, ITeacher, IUser } from './types';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(
    private apiService: ApiService,
    private tokenService: TokenService,
    private store: Store,
    private manager: HttpCacheManager,
    private router: Router,
    private zone: NgZone
  ) {}
  public getCurrentUser(token: number): Observable<IUser> {
    return this.apiService.get(`/api/auth/${token}`);
  }

  // public fetchProfile(id: number): Observable<IUser> {
  //   return this.apiService.get(`/api/user/${id}`).pipe(
  //     tap((data: IUser) => {
  //       this.tokenService.saveFullName(data.firstName + ' ' + data.lastName);
  //       this.store.dispatch(new SetUser(data));
  //     })
  //   );
  // }

  // public login(data: ILogin): Observable<IUser> {
  //   return this.apiService.post('/api/auth', data).pipe(
  //     switchMap((data: IResponseUser) => {
  //       this.tokenService.saveToken(data.userToken);
  //       this.tokenService.saveRole(data.roleId);
  //       this.tokenService.saveUserId(data.userId);

  //       return this.fetchProfile(data.userId);
  //     })
  //   );
  // }

  public adminLogin(data: ILogin): Observable<IUser> {
    return this.apiService.post('/AdminLogin', data).pipe(
      tap((data: IUser) => {
        // this.tokenService.saveToken(data.userToken);
        console.log(data);

        this.tokenService.saveRole(data.role);
        this.tokenService.saveUserId(data._id);

        this.store.dispatch(new SetUser(data));
        // return this.fetchProfile(data.userId);
      })
    );
  }

  public studentLogin(data: ILogin): Observable<IStudent> {
    return this.apiService.post('/StudentLogin', data).pipe(
      tap((data: IStudent) => {
        console.log(data);
        this.tokenService.saveRole(data.role);
        this.tokenService.saveUserId(data._id);
        this.tokenService.saveSchoolId(data.school._id);
      })
    );
  }

  public teacherLogin(data: ILogin): Observable<ITeacher> {
    return this.apiService.post('/TeacherLogin', data).pipe(
      tap((data: ITeacher) => {
        console.log(data);
        this.tokenService.saveRole(data.role);
        this.tokenService.saveUserId(data._id);
        this.tokenService.saveSchoolId(data.school._id);
        this.tokenService.saveTeachSubjectId(data.teachSubject._id);
        this.tokenService.saveTeachClassId(data.teachSclass._id);
      })
    );
  }

  public getUsers(): Observable<IUser> {
    return this.apiService.get(`/api/user`);
  }

  public logout(): void {
    console.log('here');

    this.tokenService.removeUserId();
    this.store
      .dispatch(new StateResetAll())
      .subscribe(() =>
        this.zone.run(() => this.router.navigateByUrl('/auth/role'))
      );
  }
}
