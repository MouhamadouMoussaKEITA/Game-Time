import { Component, Input } from '@angular/core';
import { Game } from '../Models/game.model';
import { GamesService } from '../services/game.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game',
  standalone: false,
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {

  @Input() game!: Game;
  theGame!: Game;
  idGame!: string;

  constructor(private GameService: GamesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idGame = this.route.snapshot.params['id'];
    if (this.idGame !== undefined) {
      this.GameService.getGameById(+this.idGame).subscribe(game => { this.theGame = game });
    } else {
      this.theGame = this.game;
    }
  }

}
