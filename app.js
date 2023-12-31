var dealer = 0;
var player = 0;
var player_cards = [];
var dealer_cards = [];

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
    load_dealer_cards();
    const container = document.getElementById('dealer-cards'); 
    const img = document.createElement('img');
    img.src = "./Blackjack-cards/BACK.png";
    container.appendChild(img);
    load_player_cards(); 
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
    // handle images to show on div element
    if (isPlayer) {
        player_cards.push(randomCardValue + ".png");
    }
    else {
        dealer_cards.push(randomCardValue + ".png");
    }
    // Check card value
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
        load_player_cards(); // load card on every player hit
    }
    check_turn();
}
function stand() {
    player_turn = false;
    check_turn();
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

function load_player_cards () {
    const container = document.getElementById('player-cards');
    // remove all current displayed player cards "remove and replace"
    
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    // replace with current player_hand
    for (let i = 0; i < player_cards.length; i++) {
        const img = document.createElement('img');
        img.src = "./Blackjack-cards/" + player_cards[i];
        container.appendChild(img);
    }
}

function load_dealer_cards () {
    const container = document.getElementById('dealer-cards');
    // remove all current displayed dealer cards "remove and replace"
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    // replace with current dealer_hand
    for (let i = 0; i < dealer_cards.length; i++) {
        const img = document.createElement('img');
        img.src = "./Blackjack-cards/" + dealer_cards[i];
        container.appendChild(img);
    }
}