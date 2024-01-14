import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { HttpCacheManager } from '@ngneat/cashew';
import { Store } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { ApiService } from 'src/app/core/services/api.service';
import { TokenService } from 'src/app/core/services/token.service';

@Injectable({ providedIn: 'root' })
export class StudentService {
  constructor(
    private apiService: ApiService,
    private router: Router,
    private tokenService: TokenService
  ) {}

  createComplain(data: any): Observable<any> {
    return this.apiService.post(`/ComplainCreate`, data);
  }
}
