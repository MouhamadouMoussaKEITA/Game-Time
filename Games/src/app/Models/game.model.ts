export class Game {
    id: number;
    Titre: string; // Titre du jeu
    Plateforme: string; // Plateforme (PlayStation, Xbox, PC, Switch, etc.)
    Genre: string; // Genre (Action, RPG, FPS, etc.)
    Developpeur: string; // Développeur (ex. : Nintendo, FromSoftware)
    DateDeSortie: Date; // Date de sortie
    StockDisponible: number; // Nombre d'exemplaires disponibles en boutique
    reservations: Reservation[]; // Liste des réservations

    constructor(
        id: number,
        Titre: string,
        Plateforme: string,
        Genre: string,
        Developpeur: string,
        DateDeSortie: Date,
        StockDisponible: number,
        reservations: Reservation[] = [] // Initialisation par défaut
    ) {
        this.id = id;
        this.Titre = Titre;
        this.Plateforme = Plateforme;
        this.Genre = Genre;
        this.Developpeur = Developpeur;
        this.DateDeSortie = DateDeSortie;
        this.StockDisponible = StockDisponible;
        this.reservations = reservations;
    }
}

// Ajout du modèle Reservation
export class Reservation {
    NomClient: string;
    EmailClient: string;
    TelephoneClient: string;
    TitreJeu: string;
    Plateforme: string;
    DateReservation: Date;
    Statut: 'Confirmée' | 'En attente' | 'Annulée';

    constructor(
        NomClient: string,
        EmailClient: string,
        TelephoneClient: string,
        TitreJeu: string,
        Plateforme: string,
        DateReservation: Date,
        Statut: 'Confirmée' | 'En attente' | 'Annulée'
    ) {
        this.NomClient = NomClient;
        this.EmailClient = EmailClient;
        this.TelephoneClient = TelephoneClient;
        this.TitreJeu = TitreJeu;
        this.Plateforme = Plateforme;
        this.DateReservation = DateReservation;
        this.Statut = Statut;
    }
}