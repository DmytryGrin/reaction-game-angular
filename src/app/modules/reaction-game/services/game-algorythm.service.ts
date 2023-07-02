import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Subject, take, takeUntil, timer } from "rxjs";
import { CellValues } from "../../types/cell-type";
import { ResultsModalComponent } from "../modals/results-modal/results-modal.component";

@Injectable()
export class GameAlgorythmService {
  private readonly cellAmount: number = 100;
  private readonly maxScores = 10;
  
  private timeout = 2000;
  private gameItems: CellValues[] = [];
  private currentIdx: number;
  private computerScores = 0;
  private playerScores = 0;

  private playersClick$ = new Subject<void>()

  constructor(
    private matDialog: MatDialog,
  ) {
    this.resetGameField();
  }

  public get gamesField(): CellValues[] {
    return this.gameItems;
  }

  public get reactionTime(): number {
    return this.timeout;
  }

  public set reactionTime(time: number) {
    this.timeout = time;
  }

  private markCellAsPending(idx: number): void {
    this.gameItems[idx] = 3;
  }

  private markCellAsComp(idx: number): void {
    this.gameItems[idx] = 2;
  }

  private markCellAsPlayer(idx: number): void {
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
      .pipe(
        takeUntil(this.playersClick$),
        take(1),
      )
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

  private checkScore(): void {
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