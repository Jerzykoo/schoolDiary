import { Component } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/store/service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss'],
})
export class MenubarComponent {
  badgevisible = false;
  public popoverOpen = false;
  constructor(private authService: AuthService) {}
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
