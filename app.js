var dealerTotal = 0;
var playerTotal = 0;
var player_cards = [];
var dealer_cards = [];

var dealerAceTotal = 0;
var playerAceTotal = 0;

var hidden;
var deck = [];
var player_turn = true;

var allowHit = true; 
window.onload = function(){
    startGame();
}

function initialize_game() {
    deck = [];
    dealer_cards = [];
    player_cards = [];
    dealer = 0;
    player = 0;
    buildDeck();

    player += drawCard(true) + drawCard(true);
    dealer += drawCard(false);
    player_turn = true;
}

function startGame() {
    initialize_game();
    document.getElementById("end-game").innerText = "";
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

// Player helper methods
function hit() {
    if (player_turn) {
        player += drawCard(true);
        if (player >= 21) {
            player_turn = false;
        }
    }
}
function stand() {
    player_turn = false;
}

function check_turn() {
    if (!player_turn) {
        if (player > 21) {
            document.getElementById("end-game").innerText = "LOSS";
            return;
        }
        if (player == 21) {
            document.getElementById("end-game").innerText = "WIN";
            return;
        }
        while (dealer < 17) {
            dealer += drawCard(false);
        }
        calculateScore(player, dealer)
    }
}

function calculateScore(player_score, dealer_score) {
    if (player_score > 21) {
        document.getElementById("end-game").innerText = "LOSS";
        load_dealer_cards();
    }
    if (dealer_score > 21 && player_score <= 21) {
        document.getElementById("end-game").innerText = "WIN";
    }
    else if (player_score > dealer_score && player_score <= 21) {
        document.getElementById("end-game").innerText = "WIN";
    }
    else if (dealer_score > player_score && dealer_score <= 21) {
        document.getElementById("end-game").innerText = "LOSS";
        load_dealer_cards();
    }
    else if (player_score == dealer_score) {
        document.getElementById("end-game").innerText = "TIE"
        load_dealer_cards();
    }
}