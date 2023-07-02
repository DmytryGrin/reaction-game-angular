import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactionGameHostComponent } from './pages/reaction-game-host/reaction-game-host.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'game',
    pathMatch: 'full',
  },
  {
    path: 'game',
    component: ReactionGameHostComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactionGameRoutingModule { }
