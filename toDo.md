1. Display card deck array in FE
1.1 Create component 'Deck..' to display the deck array - make HTML to iterate all cards in 'services' response
1.2 Request deck from backend through API in a 'services' file
1.3 Create Home component -> place <deck></deck> (home component just contains <deck> tag)

------

# 25Nov:
1. ^1. Style deck display - maybe array like instead of one long column
2.  1.2 BE point from below - method that splits the deck in 2 - input este un deck  / output 2 deckuri egale

--------

### Rules (User story):
1. Deck is splitted equally between 2 players -> 52 / 2 = 26 cards each
2. Each player takes turns and puts down first card face up
3. Whoever has the biggest value card takes both cards
4. If cards were equal -> put 2 cards down - first face down, second face up
5. Who has the highest face up takes everything
6. Continue game
7. Game ends when one player has all cards - is declared winner

BE:
1.1 new method shuffleDeck
		Input: deck
		Output: randomized deck
		
1.2 new method: splitDeck
		Input: full deck
		Output: 1 array with 2 sub-arrays - each sub-array contains half of the input deck


-------------

### How to shuffle deck?

Iterate all cards
For each card change to random position in deck

-------
# 02 December 2018: 
  - 1 BACKEND: create a method dealCards(howMany) 
  - 2 FRONTEND: create a component <active-game> where you display two players and their cards
  - 3 FRONTEND modify home component to show: if a gamee is started: <active-game> component. if a game is not started <begin-game> component
