import { Component, OnInit } from '@angular/core';
import { GamesService } from '../services/game.service'; // Correct path
import { Game } from '../Models/game.model';

@Component({
  selector: 'app-list-game',
  standalone: false,
  templateUrl: './list-game.component.html',
  styleUrls: ['./list-game.component.scss'] // Correction de 'styleUrl' en 'styleUrls'
})
export class ListGameComponent implements OnInit {
  listGame!: Game[];

  constructor(private myGamesService: GamesService) { }

  ngOnInit(): void {
    this.myGamesService.getGames().subscribe((games: Game[]) => { // Add type annotation
      this.listGame = games;
    });
  }
}