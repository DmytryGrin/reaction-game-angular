import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Subject, take, takeUntil, timer } from "rxjs";
import { ResultsModalComponent } from "../modals/results-modal/results-modal.component";
import { Cell } from "../../types/cell-type";

@Injectable()
export class GameAlgorythmService {
  private readonly rowCellAmount: number = 5;
  private readonly maxScores = 10;
  
  private timeout = 2000;
  private gameItems: Cell[] = [];
  private currentIdx: number;
  private computerScores = 0;
  private playerScores = 0;
  private gameStarted = false;

  private playersClick$ = new Subject<void>()

  constructor(
    private matDialog: MatDialog,
  ) {
    this.resetGameField();
  }

  public get isGameStarted(): boolean {
    return this.gameStarted;
  }

  public get gamesField(): Cell[] {
    return this.gameItems;
  }

  public get reactionTime(): number {
    return this.timeout;
  }

  public set reactionTime(time: number) {
    this.timeout = time;
  }

  public startGame(): void {
    this.gameStarted = true;
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

  public onPlayersClick(idx: number): void {
    if (idx !== this.currentIdx) {
      return;
    }
    this.playersClick$.next();
    this.playerScores++;
    this.markCellAsPlayer(this.currentIdx);
    this.checkScore();
  }

  private markCellAsPending(idx: number): void {
    this.gameItems[idx].value = 3;
  }

  private markCellAsComp(idx: number): void {
    this.gameItems[idx].value = 2;
  }

  private markCellAsPlayer(idx: number): void {
    this.gameItems[idx].value = 1;
  }

  private getRandomUntouchedCellIndex(): number {
    const filtredCells = this.gamesField.filter((item) => {
      return item.value !== 0;
    })

    if (!filtredCells.length) {
      return -1;
    }

    return Math.floor(Math.random() * filtredCells.length);
  }

  private checkScore(): void {
    if (this.computerScores >= this.maxScores || this.playerScores >= this.maxScores) {
      this.openScoreModal();
      this.resetGameField();
      this.gameStarted = false;
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
      .afterClosed()
      .pipe(take(1))
      .subscribe((confirm: boolean) => {
        if (confirm) {
          this.startGame();
        }
      })
  }

  private resetGameField(): void {
    for (let index = 0; index < this.rowCellAmount; index++) {
      for (let j = 0; index < this.rowCellAmount; j++)
      this.gamesField.push({
        x: index,
        y: j,
        value: 0,
      });
    }

    this.computerScores = 0;
    this.playerScores = 0;
  }

}