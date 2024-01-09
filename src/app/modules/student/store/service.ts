import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { HttpCacheManager } from '@ngneat/cashew';
import { Store } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { ApiService } from 'src/app/core/services/api.service';
import { TokenService, USERID } from 'src/app/core/services/token.service';
import { ILogin, IUser } from '../../auth/store/types';
import { SetUser } from '../../auth/store/actions';

@Injectable({ providedIn: 'root' })
export class StudentService {
  constructor(
    private apiService: ApiService,
    private store: Store,
    private manager: HttpCacheManager,
    private router: Router,
    private zone: NgZone,
    private tokenService: TokenService
  ) {}
}
