import { Injectable } from '@angular/core';
import { Game } from '../Models/game.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class GamesService {

    constructor(private http: HttpClient) { }

    getGames(): Observable<Game[]> {
        return this.http.get<Game[]>('http://localhost:3000/Games');
    }

    getGameById(id: number): Observable<Game> {
        return this.http.get<Game>('http://localhost:3000/Games/' + id);
    }

    addGame(nouvGame: Game): Observable<Game> {


        this.getGames().subscribe(cds => {
            let maxId = 0;
            cds.forEach(cd => { maxId = (cd.id > maxId ? cd.id : maxId); });
            nouvGame.id = maxId + 1;
            this.http.post<Game>('http://localhost:3000/Games', nouvGame);
        }
        );

        return this.getGames().pipe(
            switchMap(games => {
                let maxId = 0;
                games.forEach(game => { maxId = (game.id > maxId ? game.id : maxId); });
                nouvGame.id = maxId + 1;
                return this.http.post<Game>('http://localhost:3000/Games', nouvGame);
            }
            ));

    };

}