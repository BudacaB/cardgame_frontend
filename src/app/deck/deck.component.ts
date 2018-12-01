import { Component, OnInit } from '@angular/core';
import { DeckService } from '../deck.service';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent implements OnInit {

  //deck: Array<Card>;
  deck: JSON;
  hasServerResponded: boolean = false;

  constructor(private deckService: DeckService) { }

  ngOnInit() {

    this.deckService.getDeck().subscribe(
      (response) => {
        //this.deck = response as Array<Card>;
        this.deck = response as JSON;
        this.hasServerResponded = true;
      }
    )

  }

}
