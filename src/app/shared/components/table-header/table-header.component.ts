/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-table-header',
  template: `
    <div class="py-4 text-center  text-dark font-medium">
      {{ name }}
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableHeaderComponent {
  @Input() name = '';
}
