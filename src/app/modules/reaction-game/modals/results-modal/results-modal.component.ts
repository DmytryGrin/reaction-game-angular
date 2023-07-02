import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-results-modal',
  templateUrl: './results-modal.component.html',
  styleUrls: ['./results-modal.component.scss'],
})
export class ResultsModalComponent {

  constructor(
    private dialogRef: MatDialogRef<ResultsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public score: {comp: number; player: number},
  ) { }

  public get isPlayerWin(): boolean {
    return this.score.comp < this.score.player
  }

  public close(confirm = false): void {
    this.dialogRef.close(confirm);
  }
}
