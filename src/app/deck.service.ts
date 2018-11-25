import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs';

/* export interface Deck { }; */  // experiment

@Injectable({
    providedIn: 'root'
})

export class DeckService {
    
    constructor(private httpService: HttpClient) {}

    getDeck() {
        const deckURL = 'http://127.0.0.1:3000/deck';
        return this.httpService.get(deckURL)
    }


    // experiment
    /* getDeck(): Observable<Deck[]> {
        return this.httpService.get<Deck[]>
        ('http://127.0.0.1:3000/deck');
    } */


}