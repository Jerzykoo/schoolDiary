/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-cell',
  templateUrl: './table-cell.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableCellComponent {}
