import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from '../../app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component'; // Vérifiez que ce chemin est correct
import { HeaderComponent } from './header/header.component';
import { ListGameComponent } from './list-game/list-game.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';

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
    RouterModule, // Assurez-vous que RouterModule est bien importé ici
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
