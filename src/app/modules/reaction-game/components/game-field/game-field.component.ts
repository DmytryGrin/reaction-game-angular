import { Component } from '@angular/core';
import { CellValues } from 'src/app/modules/reaction-game/types/cell-type';
import { GameAlgorythmService } from '../../services/game-algorythm.service';

@Component({
  selector: 'app-game-field',
  templateUrl: './game-field.component.html',
  styleUrls: ['./game-field.component.scss'],
})
export class GameFieldComponent {

  constructor(
    private gameAlgorythmService: GameAlgorythmService,
  ) { }

  get gameItems(): CellValues[] {
    return this.gameAlgorythmService.gamesField;
  }

  public onPlayersClick(idx: number): void {
    this.gameAlgorythmService.onPlayersClick(idx);
  }
}
