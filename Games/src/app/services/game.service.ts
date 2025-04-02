import { Injectable } from '@angular/core';
import { Game } from '../Models/game.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GamesService {

    constructor(private http: HttpClient) { }

    getGames(): Observable<Game[]> {
        return this.http.get<Game[]>('http://localhost:3000/CD');
    }

    getGameById(id: number): Observable<Game> {
        return this.http.get<Game>('http://localhost:3000/CD/' + id);
    }
}