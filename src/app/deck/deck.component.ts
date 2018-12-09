import { Component, OnInit } from '@angular/core';
import { DeckService } from '../deck.service';
import * as socketIo from 'socket.io-client';


@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent implements OnInit {
 
  messageArray: Array<string> = [];
  private socket: any;
  initSocket() {
    this.socket = socketIo('http://localhost:3000');
    this.socket.on('message', (message) => {
      this.messageArray.push(message)
      console.log('am prim mesaj', message)
    })
  }

  deck: DealerResponse = {
    dealtDeck: [],
    leftDeck: []
  };
  hasServerResponded: boolean = false;

  constructor(private deckService: DeckService) { }

  ngOnInit() {
    this.initSocket()

    this.deckService.getDeck().subscribe(
      (response) => {
        //this.deck = response as Array<Card>;
        this.deck = response as DealerResponse;
        this.hasServerResponded = true;
      }
    )

  }

 /*  send() {
    let text = 'Writing stuff'
    this.socket.emit('message' , text)
  } */

  sendAndReset(input) {
    this.socket.emit('message' , input.value)
    input.value = '';
  }

}
