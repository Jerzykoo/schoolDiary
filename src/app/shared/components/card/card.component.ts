import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input() public title = '';
  @Input() public subtitle?: string | number = '';
  @Input() public iconName = '';
  @Input() public isClicable = false;
}
