import { Component } from '@angular/core';
import { GameAlgorythmService } from '../../services/game-algorythm.service';

@Component({
  selector: 'app-reaction-game-host',
  templateUrl: './reaction-game-host.component.html',
  styleUrls: ['./reaction-game-host.component.scss'],
})
export class ReactionGameHostComponent {
  constructor(
    private gameAlgorythmService: GameAlgorythmService,
  ) { }

  public get isGameStarted(): boolean {
    return this.gameAlgorythmService.isGameStarted;
  }

  public get reactionTime(): number {
    return this.gameAlgorythmService.reactionTime;
  }

  public set reactionTime(time: number) {
    this.gameAlgorythmService.reactionTime = time;
  }

  public startGame(): void {
    this.gameAlgorythmService.startGame();
  }
}
