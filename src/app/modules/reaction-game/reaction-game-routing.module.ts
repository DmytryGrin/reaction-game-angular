import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactionGamesHostComponent } from './pages/reaction-games-host/reaction-games-host.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'game',
    pathMatch: 'full',
  },
  {
    path: 'game',
    component: ReactionGamesHostComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactionGameRoutingModule { }
