import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CellValues } from 'src/app/modules/types/cell-type';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CellComponent implements OnInit {
  @Input() value: CellValues;

  readonly colors: string[] = [
    'blue',
    'green',
    'red',
    'yellow',
  ]

  public get class(): string {
    return this.colors[this.value]
  }

  constructor() { }

  ngOnInit(): void {
    
  }

}
