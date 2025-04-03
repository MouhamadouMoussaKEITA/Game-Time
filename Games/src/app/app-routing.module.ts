import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListGameComponent } from './list-game/list-game.component';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { NewGameComponent } from './new-game/new-game.component';
import { SearchComponent } from './search/search.component';

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
  {
    path: 'new-game',
    component: NewGameComponent
  },
  {
    path: 'search',
    component: SearchComponent
  }
];

@NgModule({
  declarations: [],

  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

