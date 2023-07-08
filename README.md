# PROJECT-1-WEB-GAME
Black Jack
A popular casino table game in which the player plays against the house, usually in the form of a dealer.

Black Jack has straightforward rules where the objective of the game is to hit and be as close to the sum value of 21 without going over. Both the dealer starts with two cards, the dealer has one face down and one shown card
whereas the player has two faceup cards. The player (you) are given two options, to either hit (draw another card) or to stay and let the dealer draw. It is important to note, that on the dealer's
turn, they will not stop drawing cards unless ur their card's total sum scores closer to 21 than the player (in which the dealer wins) or until they go over 21 and bust (in which the player wins)

**Things of note, this web game does not have all the functions of a standard game. (unable to split pairs and all betting actions are not implemented)

## The Code

## Creating the deck
- To create the deck 52 images are set within the assets folder with each image/card titled with a value and type.
- The value represents the card numerical value (1,2,3,4,. . . .10,11), whilst the type is the assigned suite.
- A buildDeck() function was created utilizing the value/type and looped in order the create an array of 52 cards(the deck).

The next step was to create a function to shuffle the deck but it proved difficult and time-consuming so I instead opted to draw the cards randomly. 
- This is done by using a drawcard() function to obtain the first value of a card.
- A switch statement is then used to return the value depending on the case rules (2-9 = the card numerical value)
  (Ace will = 1 if the total random card value > 11) (Ace will = 11 if the total random card value < 11)
  & defaults to a value of 10 if neither of the cases are drawn.

## Initializing the game 
- Created an initialize-game() function for both the dealer and player by first invoking the buildDeck() & shuffleDeck().
- The player should start with two cards: player += drawCard(true) + drawCard(true);
- The dealer should start with 1 card: dealer += drawCard(false);
- After the initial cards are dealt it is now the player's turn and they are given the option to hit/stay.

## Creating the player methods
To create the player's options, two functions were created to allow them to either hit or stand, however, there was the 
the difficulty of the player being allowed to hit after scoring above 21.

- Stand() function causes the player's turn to now be false allowing for the dealer's turn to start.
- The hit() function causes the player to draw a card
- This code ends the player's turn with a loss
- If the drawn card adds a total value of > 21: if (player_turn) {
        player += drawCard(true);
        if (player >= 21) {

## Score Checking 
- Check_turn() function calculates the player's and dealer's individual total values.
- Calculates dealer's value if <17, if so their turn has ended.
- CalculateScore() utilizes if/else if statements to determine a "WIN" "LOSS" or "TIE".

## Displaying Cards
Encountered a bug in which the dealer back card was being removed and replaced after the player's turn. This bug was
sort of fixed by removing the card with the code and replacing it with the dealer's hand.
- On initialization: load_dealer_cards();
                     load_player_cards();
-  if (isPlayer) {
        player_cards.push(randomCardValue + ".png"); : pulls a random value from the deck and selects a corresponding
   value from the assets folder and displays it. The type (suite) is irrelevant in this game so it is not considered.


## Known issues
There are issues with Ace cards value not properly assigning a value of 11 or 1 depending on the order they are drawn. For example 
when a dealer hits an Ace they will be given the value of 11 instead of 1 causing the dealer to lose when it should still have the 
option of hitting.

Sometimes the player will win without the dealer showing their cards, my best guess is that the 2nd card the dealer has totals > 17 and the player's card is higher so a win it automatically applied. 


