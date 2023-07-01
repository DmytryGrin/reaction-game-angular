import { Component, Input, OnInit } from '@angular/core';
import { CellValues } from 'src/app/modules/types/cell-type';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss'],
})
export class CellComponent implements OnInit {
  @Input() value: CellValues;

  public get class(): 'blue' | 'green' | 'red' {
    return this.value === 0 ? 'blue' : 
      this.value === 1 ? 'green' : 'red';
  }

  constructor() { }

  ngOnInit(): void {
    
  }

}
