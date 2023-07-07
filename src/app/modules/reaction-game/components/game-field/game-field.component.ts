import { Component } from '@angular/core';
import { GameAlgorythmService } from '../../services/game-algorythm.service';
import { Cell } from 'src/app/modules/types/cell-type';

@Component({
  selector: 'app-game-field',
  templateUrl: './game-field.component.html',
  styleUrls: ['./game-field.component.scss'],
})
export class GameFieldComponent {

  constructor(
    private gameAlgorythmService: GameAlgorythmService,
  ) { }

  get gameItems(): Cell[] {
    return this.gameAlgorythmService.gamesField;
  }

  public onPlayersClick(idx: number): void {
    this.gameAlgorythmService.onPlayersClick(idx);
  }
}
