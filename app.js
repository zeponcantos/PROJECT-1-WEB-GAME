var dealerTotal = 0;
var playerTotal = 0;

var dealerAceTotal = 0;
var playerAceTotal = 0;

var hidden;
var deck;

var allowHit = true; 
window.onload = function(){
    buildDeck();
    shuffleDeck();
}

function buildDeck(){
    let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];  //Card Values
    let types = ["C", "D", "H", "S"]; //Card Suites (Clubs, Diamonds, Hearts, Spades)
    deck = [];

    for (let i = 0; i < types.length; i++) {  // 4-Loop
        for (let j = 0; j < values.length; j++) {
            deck.push(values[j] + "-" + types[i]); 
        }
    }
    console.log(deck); //built an array of 52 cards for the deck
}

function shuffleDeck() {
    for (let i = 0; i < deck.length; i++) {
        let j = Math.floor(Math.random() * deck.length); // (0-1) * 52 => (0-51.9999)
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
    console.log(deck);
}

