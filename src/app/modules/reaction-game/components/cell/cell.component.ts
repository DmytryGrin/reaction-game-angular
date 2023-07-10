import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Cell } from 'src/app/modules/types/cell-type';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss'],
})
export class CellComponent {
  @Input() value: Cell;

  readonly colors: string[] = [
    'blue',
    'green',
    'red',
    'yellow',
  ]

  public get class(): string {
    return this.colors[this.value.value]
  }

}
