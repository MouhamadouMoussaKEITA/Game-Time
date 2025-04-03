import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Game } from '../Models/game.model';
import { GamesService } from '../services/game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-game',
  standalone: false,
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss']
})
export class NewGameComponent implements OnInit {

  formulaire!: FormGroup;
  currentGame!: Game;

  constructor(
    private formBuilder: FormBuilder,
    private gamesService: GamesService, // Injection du service GamesService
    private router: Router // Injection du service Router
  ) { }

  ngOnInit(): void {
    // Création du formulaire avec les validations
    this.formulaire = this.formBuilder.group({
      Titre: [null, [Validators.required, Validators.minLength(3)]],
      DateDeSortie: [null, [Validators.required]],
      Developpeur: [null, [Validators.required, Validators.minLength(3)]],
      Plateforme: [null, [Validators.required, Validators.minLength(2)]],
      Genre: [null, [Validators.required, Validators.minLength(3)]],
      StockDisponible: [null, [Validators.required, Validators.min(0)]],
    });

    // Mise à jour de l'objet currentGame à chaque changement de valeur du formulaire
    this.formulaire.valueChanges.subscribe((formValue) => {
      this.currentGame = {
        id: 0, // ID temporaire, sera généré par le backend
        Titre: formValue.Titre,
        DateDeSortie: formValue.DateDeSortie,
        Developpeur: formValue.Developpeur,
        Plateforme: formValue.Plateforme,
        Genre: formValue.Genre,
        StockDisponible: formValue.StockDisponible,
        reservations: [],
      };
    });
  }

  onSubmit(): void {
    if (this.formulaire.invalid) {
      return;
    }

    // Création d'un nouvel objet Game à partir des valeurs du formulaire
    const newGame: Game = {
      id: 0, // ID temporaire, sera généré par le backend
      Titre: this.formulaire.get('Titre')?.value,
      DateDeSortie: this.formulaire.get('DateDeSortie')?.value,
      Developpeur: this.formulaire.get('Developpeur')?.value,
      Plateforme: this.formulaire.get('Plateforme')?.value,
      Genre: this.formulaire.get('Genre')?.value,
      StockDisponible: this.formulaire.get('StockDisponible')?.value,
      reservations: [],
    };

    // Appel au service pour ajouter le jeu
    this.gamesService.addGame(newGame).subscribe({
      next: () => {
        this.router.navigateByUrl('/catalog'); // Redirection après succès
      },
      error: err => {
        console.error('Erreur lors de l\'ajout du jeu :', err);
        alert('Une erreur est survenue lors de l\'ajout du jeu. Veuillez réessayer.');
      }
    });
  }
}
