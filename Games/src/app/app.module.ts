import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module'; // Correct path
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component'; // Vérifiez que ce chemin est correct
import { HeaderComponent } from './header/header.component';
import { ListGameComponent } from './list-game/list-game.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { GamesService } from './services/game.service'; // Ensure this path is correct

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    HeaderComponent,
    ListGameComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule, // Ensure this is included
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [GamesService], // Ensure this is included
  bootstrap: [AppComponent],
})
export class AppModule { }
