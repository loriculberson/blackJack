var $ = require('jquery')
var deck = require('./deck')
var Hand = require('./hand')
var playerHand = new Hand();
var dealerHand = new Hand();

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
    playerHand.renderMessage($("#player-message"), "<h2>BUSTED! <br> Back to the ATM, sucka...</h2>");
  } else if (playerHand.score() === 21) {
    playerHand.renderMessage($("#player-message"), "<h2>YOU ARE SO FUCKING MONEY!</h2>");
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
}

function addClickListenerToDealButton() {
  $("#deal_cards").on("click", dealHands)
}

addClickListenerToDealButton();
addClickListenerToHitButton();
