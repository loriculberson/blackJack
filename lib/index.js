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
  // ("Player score: " + playerHand.score());
    playerHand.renderTo($("#player-hand"));
}

function scoreDealerHand () {
  console.log("Dealer score: " + dealerHand.score());
  dealerHand.score();
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
