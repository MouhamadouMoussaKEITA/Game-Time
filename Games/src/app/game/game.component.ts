import { Component, Input } from '@angular/core';
import { Game, Reservation } from '../Models/game.model';
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

  showReservations: boolean = false; // Gère l'affichage des réservations
  showAddReservation: boolean = false; // Gère l'affichage du formulaire d'ajout de réservation
  newReservation: Reservation = new Reservation('', '', '', '', '', new Date(), 'En attente'); // Initialisation de la nouvelle réservation

  constructor(private GameService: GamesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idGame = this.route.snapshot.params['id'];
    if (this.idGame !== undefined) {
      this.GameService.getGameById(+this.idGame).subscribe(game => {
        this.theGame = game;
      });
    } else {
      this.theGame = this.game;
    }
  }

  toggleReservations(): void {
    this.showReservations = !this.showReservations; // Affiche ou masque la section des réservations
  }

  toggleAddReservation(): void {
    this.showAddReservation = !this.showAddReservation; // Affiche ou masque le formulaire d'ajout de réservation
  }

  onAddReservation(): void {
    // Ajoute la nouvelle réservation au jeu
    this.newReservation.TitreJeu = this.theGame.Titre;
    this.newReservation.Plateforme = this.theGame.Plateforme;
    this.theGame.reservations.push({ ...this.newReservation });

    // Réinitialise le formulaire
    this.newReservation = new Reservation('', '', '', '', '', new Date(), 'En attente');
    this.showAddReservation = false;

    alert('Réservation ajoutée avec succès !');
  }
}
