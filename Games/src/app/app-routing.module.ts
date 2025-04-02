import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListGameComponent } from './list-game/list-game.component';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'catalog',
    component: ListGameComponent
  },
  {
    path: 'game/:id',
    component: GameComponent
  },

];

@NgModule({
  declarations: [],

  imports: [
    RouterModule.forRoot(routes),
  ]
})
export class AppRoutingModule { }

