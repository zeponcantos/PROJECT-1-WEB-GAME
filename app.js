var dealerTotal = 0;
var playerTotal = 0;

var dealerAceTotal = 0;
var playerAceTotal = 0;

var hidden;
var deck = [];
var player_turn = true;

var allowHit = true; 
window.onload = function(){
    buildDeck();
    shuffleDeck();
}

function buildDeck(){
    let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];  //Card Values
    let types = ["C", "D", "H", "S"]; // Card Suites (Clubs, Diamonds, Hearts, Spades)
   

    for (let i = 0; i < types.length; i++) {  // 4-Loop
        for (let j = 0; j < values.length; j++) {
            deck.push(values[j] + "-" + types[i]); 
        }
    }
}

function drawCard(isPlayer) {
    // gets first character "value" of the card
    var randomCardValue = deck[(Math.floor(Math.random() * deck.length))]; 
    if (isPlayer) {
        player_cards.push(randomCardValue + ".png");
    }
    else {
        dealer_cards.push(randomCardValue + ".png");
    }
    switch (randomCardValue[0]) {
        case "A":
            if (isPlayer) {
                if (player >= 11)
                    return 1;
                else
                    return 11;
            }
            else { // Dealer
                if (dealer >= 11)
                    return 1;
                else
                    return 11;
            }
        case "2":
            return 2;
        case "3":
            return 3;
        case "4":
            return 4;
        case "5":
            return 5;
        case "6":
            return 6;
        case "7":
            return 7;
        case "8":
            return 8;
        case "9":
            return 9;
        default: // J Q K
            return 10;
    }
}

