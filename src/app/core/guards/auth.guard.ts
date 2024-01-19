import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Select } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import { AuthState } from 'src/app/modules/auth/store/state';
import { IUser } from 'src/app/modules/auth/store/types';
import { TokenService } from '../services/token.service';

@Injectable()
export class AuthGuard implements CanActivate {
  @Select(AuthState.user) user$!: Observable<IUser>;
  constructor(private router: Router, private tokenService: TokenService) {}

  public canActivate(): Observable<boolean> {
    const userId = this.tokenService.getUserId();

    if (userId) {
      return of(true);
    }
    this.router.navigateByUrl('/auth/role');
    return of(false);
  }
}
