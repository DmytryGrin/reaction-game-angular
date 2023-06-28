import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactionGameRoutingModule } from './reaction-game-routing.module';
import { ReactionGamesHostComponent } from './pages/reaction-games-host/reaction-games-host.component';


@NgModule({
  declarations: [ReactionGamesHostComponent],
  imports: [
    CommonModule,
    ReactionGameRoutingModule
  ]
})
export class ReactionGameModule { }
