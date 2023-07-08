var dealerTotal = 0;
var playerTotal = 0;

var dealerAceTotal = 0;
var playerAceTotal = 0;

var hidden;
var deck;

var allowHit = true; 
window.onload = function(){
    buildDeck();
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

