var $ = require('jquery')
var deck = require('./deck')
var Hand = require('./hand')
var Game = require('./game')

var playerHand = new Hand();
var dealerHand = new Hand();
var game = new Game();

function dealerTurn () {
//if dealer score 
}

function addClickListenerToStayButton () {
  $("#stay").on("click", dealerTurn)
}

function playerTakesAHit () {
  dealOneCard(playerHand, $("#player-hand"));
  scorePlayerHand();
}

function addClickListenerToHitButton () {
  $("#hit-me").on("click", playerTakesAHit)
}

function scorePlayerHand () {
  playerHand.score();
  playerHand.renderTo($("#player-hand"));
  playerHand.renderScore($("#player-score"));
  // console.log(playerHand.score());

  if (playerHand.score() > 21) {
    playerHand.renderMessage($("#player-message"), "<h2>BUSTED! <br> Sorry! Try Again!</h2>");
  } else if (playerHand.score() === 21) {
    playerHand.renderMessage($("#player-message"), "<h2>Congratulations! You Won!</h2>");
  }

  // if (playerHand.score() > 21) {
  //   // console.log("BUST");
  //   playerHand.renderBust($("#player-message"));
  // } else if (playerHand.score() === 21) {
  //   playerHand.renderWin($("#player-message"));
  // }
}

function scoreDealerHand () {
  dealerHand.score();
  dealerHand.renderTo($("#dealer-hand"));
  dealerHand.renderScore($("#dealer-score"));
}

function dealDealerHand(dealerHand) {
  dealOneCard(dealerHand, $("#dealer-hand"));
  dealOneCard(dealerHand, $("#dealer-hand"));
}

function dealOneCard (whoseHand, jQueryDestination) {
  var card = deck.pickCard();
  whoseHand.receiveCard(card);
  whoseHand.renderTo(jQueryDestination);
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
  $("#deal-cards").on("click", dealHands)
}


game.initialize();
// game.start();
addClickListenerToDealButton();

addClickListenerToHitButton();
addClickListenerToStayButton();


//