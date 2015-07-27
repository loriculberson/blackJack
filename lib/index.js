var $ = require('jquery');
var deck = require('./deck');
var Hand = require('./hand');
var Game = require('./game');

var playerHand = new Hand();
var dealerHand = new Hand();
var game = new Game();
var dealerWins = 0;
var playerWins = 0;

function addClickListenerToStayButton () {
  $("#stay-button").on("click", dealerTurn)
}

function playerTakesAHit () {
  dealOneCard(playerHand, $("#player-hand"));
  scorePlayerHand();
}

function addClickListenerToHitButton () {
  $("#hit-me-button").on("click", playerTakesAHit)
}


function scorePlayerHand () {
  playerHand.score();
  playerHand.renderTo($("#player-hand"));
  playerHand.renderScore($("#player-score"));

  if (playerHand.score() > 21) {
    ++dealerWins;
    playerHand.renderMessage($("#player-message"), "<h2>BUSTED! <br> Sorry! Try Again!</h2>");
    dealerHand.renderMessage($(".win-counter"), '<h3>Dealer Score: ' + dealerWins + ' –– Player Score: ' + playerWins + '</h3>');
    game.buttonsAfterGame();
    game.newGame(playerHand, dealerHand);
  } else if (playerHand.score() === 21) {
    ++playerWins;
    playerHand.renderMessage($("#player-message"), "<h2>Congratulations! You Won!</h2>");
    dealerHand.renderMessage($(".win-counter"), '<h3>Dealer Score: ' + dealerWins + ' –– Player Score: ' + playerWins + '</h3>');
    game.buttonsAfterGame();
    game.newGame(playerHand, dealerHand);
  }
}


function scoreDealerHand () {
  dealerHand.score();
  dealerHand.renderTo($("#dealer-hand"));
  dealerHand.renderScore($("#dealer-score"));
}


function playerStays() {
  game.buttonsDuringStay();

  while (dealerHand.score() < 17) {
    dealOneCard(dealerHand, $("#dealer-hand"));
    scoreDealerHand();
  }

  if (dealerHand.score() > 21) {
    ++playerWins;
    dealerHand.renderMessage($("#dealer-message"), "<h2>Dealer Busted - PLAYER WINS!</h2>");
    dealerHand.renderMessage($(".win-counter"), '<h3>Dealer Score: ' + dealerWins + ' –– Player Score: ' + playerWins + '</h3>');
    game.buttonsAfterGame();
    game.newGame(playerHand, dealerHand);
  } else if (dealerHand.score() === 21) {
    ++dealerWins;
    dealerHand.renderMessage($("#dealer-message"), "<h2>Oh well – the dealer won!</h2>");
    dealerHand.renderMessage($(".win-counter"), '<h3>Dealer Score: ' + dealerWins + ' –– Player Score: ' + playerWins + '</h3>');
    game.buttonsAfterGame();
    game.newGame(playerHand, dealerHand);
  } else if (dealerHand.score() >= 17) {
    dealerHand.renderMessage($("#dealer-message"), "<h2>evaluate like crazy!</h2>");
    evaluateFinalScores();
  }
}


function evaluateFinalScores() {
  // console.log(dealerHand.score())
  if (dealerHand.score() > playerHand.score()) {
    ++dealerWins;
    dealerHand.renderMessage($("#dealer-message"), "<h2>The dealer won by a nose!</h2>");
    dealerHand.renderMessage($(".win-counter"), '<h3>Dealer Score: ' + dealerWins + ' –– Player Score: ' + playerWins + '</h3>');
    game.buttonsAfterGame();
    game.newGame(playerHand, dealerHand);
  } else if (dealerHand.score() < playerHand.score()) {
    ++playerWins;
    dealerHand.renderMessage($("#dealer-message"), "");
    playerHand.renderMessage($("#player-message"), "<h2>You won by a nose!</h2>");
    dealerHand.renderMessage($(".win-counter"), '<h3>Dealer Score: ' + dealerWins + ' –– Player Score: ' + playerWins + '</h3>');
    game.buttonsAfterGame();
    game.newGame(playerHand, dealerHand);
  };
}


function dealOneCard (whoseHand, jQueryDestination) {
  var card = deck.pickCard();
  whoseHand.receiveCard(card);
  whoseHand.renderTo(jQueryDestination);
}

function dealDealerHand(dealerHand) {
  dealOneCard(dealerHand, $("#dealer-hand"));
  dealOneCard(dealerHand, $("#dealer-hand"));
}

function dealPlayerHand (playerHand){
  dealOneCard(playerHand, $("#player-hand"));
  dealOneCard(playerHand, $("#player-hand"));
}

function dealHands () {
  dealPlayerHand(playerHand);
  scorePlayerHand();
  dealDealerHand(dealerHand);
  scoreDealerHand();
  game.buttonsDuringGame();
}

function addClickListenerToDealButton() {
  $("#deal-cards-button").on("click", dealHands)
}

function addClickListenerToStayButton() {
  $("#stay-button").on("click", playerStays)
}

function addClickListenerNewGameButton() {
  $("#new-game-button").on("click", dealHands);
  $("#new-game-button").on("click", removeMessage)
}

function removeMessage () {
  $('h2')[0].remove();
}

game.initialize();
addClickListenerToDealButton();
addClickListenerToHitButton();
addClickListenerToStayButton();
addClickListenerNewGameButton();
