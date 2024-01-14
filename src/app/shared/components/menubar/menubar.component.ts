import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { ROLE } from 'src/app/core/services/token.service';
import { AuthService } from 'src/app/modules/auth/store/service';
import { AuthState } from 'src/app/modules/auth/store/state';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss'],
})
export class MenubarComponent {
  badgevisible = false;
  public popoverOpen = false;
  public user$ = this.store.select(AuthState.user);
  role = localStorage.getItem(ROLE);

  constructor(private authService: AuthService, private store: Store) {}

  ngOnInit() {
    this.user$.subscribe((res: any) => {
      console.log(res);
    });
    console.log(this.role);
  }

  public togglePopover(): void {
    this.popoverOpen = !this.popoverOpen;
  }
  badgevisibility() {
    this.badgevisible = true;
  }

  public logout(): void {
    this.authService.logout();
  }
}
