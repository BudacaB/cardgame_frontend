class Card {
    suit: string;
    number: string;
    id: string
}

class DealerResponse {
    dealtDeck: Array<Card>;
    leftDeck: Array<Card>
}