import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnDestroy {
  public src = 'assets/images/school.png';
  private subscription$: Subscription = new Subscription();

  constructor() {}

  public ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
