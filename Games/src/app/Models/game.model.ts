export class Game {
    id: number;
    Titre: string; // Titre du jeu
    Plateforme: string; // Plateforme (PlayStation, Xbox, PC, Switch, etc.)
    Genre: string; // Genre (Action, RPG, FPS, etc.)
    Developpeur: string; // Développeur (ex. : Nintendo, FromSoftware)
    DateDeSortie: Date; // Date de sortie
    StockDisponible: number; // Nombre d'exemplaires disponibles en boutique


    constructor(
        id: number,
        Titre: string,
        Plateforme: string,
        Genre: string,
        Developpeur: string,
        DateDeSortie: Date,
        StockDisponible: number
    ) {
        this.id = id;
        this.Titre = Titre;
        this.Plateforme = Plateforme;
        this.Genre = Genre;
        this.Developpeur = Developpeur;
        this.DateDeSortie = DateDeSortie;
        this.StockDisponible = StockDisponible;
    }
}