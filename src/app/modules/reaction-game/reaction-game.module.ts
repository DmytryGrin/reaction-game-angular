import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactionGameRoutingModule } from './reaction-game-routing.module';
import { CellComponent } from './components/cell/cell.component';
import { GameFieldComponent } from './components/game-field/game-field.component';
import { ResultsModalComponent } from './modals/results-modal/results-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { GameAlgorythmService } from './services/game-algorythm.service';
import { ReactionGameHostComponent } from './pages/reaction-game-host/reaction-game-host.component';

@NgModule({
  declarations: [
    CellComponent, 
    GameFieldComponent, 
    ResultsModalComponent, ReactionGameHostComponent,
  ],
  imports: [
    CommonModule,
    ReactionGameRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [
    GameAlgorythmService,
  ]
})
export class ReactionGameModule { }
