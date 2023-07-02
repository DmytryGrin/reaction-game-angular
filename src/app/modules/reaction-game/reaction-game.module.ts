import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactionGameRoutingModule } from './reaction-game-routing.module';
import { CellComponent } from './components/cell/cell.component';
import { GameFieldComponent } from './components/game-field/game-field.component';
import { ResultsModalComponent } from './modals/results-modal/results-modal.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { GameAlgorythmService } from './services/game-algorythm.service';

@NgModule({
  declarations: [
    CellComponent, 
    GameFieldComponent, 
    ResultsModalComponent,
  ],
  imports: [
    CommonModule,
    ReactionGameRoutingModule,
    FormsModule,
    MatDialogModule,
  ],
  providers: [
    GameAlgorythmService,
  ]
})
export class ReactionGameModule { }
