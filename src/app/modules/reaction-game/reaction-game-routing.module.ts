import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameFieldComponent } from './components/game-field/game-field.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'game',
    pathMatch: 'full',
  },
  {
    path: 'game',
    component: GameFieldComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactionGameRoutingModule { }
