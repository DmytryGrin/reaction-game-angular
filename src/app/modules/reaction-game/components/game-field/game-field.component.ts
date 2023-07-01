import { Component, Input, OnInit } from '@angular/core';
import { CellValues } from 'src/app/modules/types/cell-type';

@Component({
  selector: 'app-game-field',
  templateUrl: './game-field.component.html',
  styleUrls: ['./game-field.component.scss']
})
export class GameFieldComponent implements OnInit {
  cellAmount: number = 100;

  gameItems: CellValues[] = [];

  constructor() { }

  ngOnInit(): void {
    this.gameItems.length = this.cellAmount;
    this.gameItems.fill(0);
    console.log(this.gameItems)
  }

}
