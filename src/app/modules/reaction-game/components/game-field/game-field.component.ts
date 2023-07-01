import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject, takeUntil, timer } from 'rxjs';
import { CellValues } from 'src/app/modules/types/cell-type';
import { ResultsModalComponent } from '../../modals/results-modal/results-modal.component';

@Component({
  selector: 'app-game-field',
  templateUrl: './game-field.component.html',
  styleUrls: ['./game-field.component.scss']
})
export class GameFieldComponent implements OnInit {
  readonly cellAmount: number = 100;
  gameItems: CellValues[] = [];

  timeout = 2000;

  computerScores = 0;
  playerScores = 0;
  maxScores = 10;

  currentIdx: number;

  playersClick$ = new Subject<void>()

  constructor(
    private matDialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.resetGameField();
  }

  markCellAsPending(idx: number): void {
    this.gameItems[idx] = 3;
  }

  markCellAsComp(idx: number): void {
    this.gameItems[idx] = 2;
  }

  markCellAsPlayer(idx: number): void {
    this.gameItems[idx] = 1;
  }

  getRandomUntouchedCellIndex(): number {
    const randomIndex = Math.floor(Math.random() * this.gameItems.length);
    if (!this.gameItems.includes(0)) {
      return -1;
    }
    if (this.gameItems[randomIndex] === 0) {
      return randomIndex;
    } else {
      return this.getRandomUntouchedCellIndex();
    }
  }

  startGame(): void {
    this.currentIdx = this.getRandomUntouchedCellIndex();
    this.markCellAsPending(this.currentIdx);

    timer(this.timeout)
      .pipe(takeUntil(this.playersClick$))
      .subscribe(() => {
        this.computerScores++;
        this.markCellAsComp(this.currentIdx);
        this.checkScore();
      })
  }

  onPlayersClick(idx: number): void {
    if (idx !== this.currentIdx) {
      return;
    }
    this.playersClick$.next();
    this.playerScores++;
    this.markCellAsPlayer(this.currentIdx);
    this.checkScore();
  }

  checkScore(): void {
    if (this.computerScores >= this.maxScores || this.playerScores >= this.maxScores) {
      this.openScoreModal();
      this.resetGameField();
    } else {
      this.startGame();
    }
  }

  private openScoreModal(): void {
    this.matDialog.open(ResultsModalComponent, {
      data: {
        comp: this.computerScores,
        player: this.playerScores,
      }
    })
  }

  private resetGameField(): void {
    this.gameItems.length = this.cellAmount;
    this.gameItems.fill(0);
    this.computerScores = 0;
    this.playerScores = 0;
  }

}
