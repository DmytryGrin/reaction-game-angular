import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'reaction',
    pathMatch: 'full',
  },
  {
    path: 'reaction',
    loadChildren: () => import('./modules/reaction-game/reaction-game.module').then(m => m.ReactionGameModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
