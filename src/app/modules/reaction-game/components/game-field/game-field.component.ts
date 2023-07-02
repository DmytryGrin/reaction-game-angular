import { Component } from '@angular/core';
import { CellValues } from 'src/app/modules/types/cell-type';
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

  get reactionTime(): number {
    return this.gameAlgorythmService.reactionTime;
  }

  set reactionTime(time: number) {
    this.gameAlgorythmService.reactionTime = time;
  }

  public startGame(): void {
    this.gameAlgorythmService.startGame();
  }

  public onPlayersClick(idx: number): void {
    this.gameAlgorythmService.onPlayersClick(idx)
  }
}
