var $ = require('jquery')
var deck = require('./deck')
var Hand = require('./hand')
var playerHand = new Hand();
var dealerHand = new Hand();


function scorePlayerHand () {
  console.log("Player score: " + playerHand.score());
  playerHand.score();
}

function scoreDealerHand () {
  console.log("Dealer score: " + dealerHand.score());
  dealerHand.score();
}

function dealDealerHand(dealerHand) {
  dealOneCard(dealerHand);
  dealOneCard(dealerHand);
  dealerHand.renderTo($("#dealer-hand"));
}

function dealOneCard (whoseHand, hidden) {
  var card = deck.pickCard();
  whoseHand.receiveCard(card);
}

function dealPlayerHand (playerHand){
  dealOneCard(playerHand);
  dealOneCard(playerHand);
  playerHand.renderTo($("#player-hand"));
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
