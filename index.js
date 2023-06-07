
let isAlive = false;
let hasBlackJack = false;
let message = "";
let sum = 0;
let cards = [];

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let player = {
  name: "Nathan",
  chips: 600
};



let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function generateRandom() {
  let value = Math.floor(Math.random() * 13) + 1;
  if (value > 10) {
    return 10;
  } else if (value === 1) {
    return 11;
  } else {
    return value;
  }
}




function startGame() {
  let firstCard = generateRandom();
  let secondCard = generateRandom();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  isAlive = true;
  hasBlackJack = false;

 
  renderGame();
}

function renderGame() {
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
     
  } else if (sum === 21) {
    hasBlackJack = true;
    message = "You've got Blackjack!";

  } else {
    message = "You are out of the game.";

    isAlive = false;
  }

  messageEl.textContent = message;
  sumEl.textContent="Sums: "+sum;
  cardsEl.textContent="Cards: "+cards.join(" ")
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = generateRandom();
    sum += card;
    cards.push(card);
   

    
    renderGame();
  }
}

cardsEl.textContent = "Cards: " + firstCard + " " + secondCard;
sumEl.textContent = "Sum: " + sum;


      
