import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../services/game.service';
import { Game } from '../Models/game.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  standalone: false,
})
export class SearchComponent implements OnInit {
  searchResults: Game[] = [];
  searchQuery: string = '';

  constructor(private route: ActivatedRoute, private gamesService: GamesService) { }

  ngOnInit(): void {
    // Récupère le paramètre de recherche depuis l'URL
    this.route.queryParams.subscribe(params => {
      this.searchQuery = params['title'] || '';
      if (this.searchQuery) {
        this.performSearch(this.searchQuery);
      }
    });
  }

  performSearch(query: string): void {
    this.gamesService.getGames().subscribe((games: Game[]) => {
      // Filtre les jeux par titre
      this.searchResults = games.filter(game =>
        game.Titre.toLowerCase().includes(query.toLowerCase())
      );
    });
  }
}
