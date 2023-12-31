import { CommonModule, NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'neopos-popover-item',
  templateUrl: './popover-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterLink, NgClass],
})
export class PopoverItemComponent {
  @Input() showDivider!: boolean;
  @Input() isActive = false;
  @Input() padding: 'small' | 'default' = 'default';
}
