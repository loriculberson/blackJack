var $ = require('jquery')
var deck = require ('./deck')
var Hand = require('./hand')
var playerHand = new Hand();
var dealerHand = new Hand();


function dealCards () {
  dealDealerHand(dealerHand);
  dealPlayerHand(playerHand);
}

function dealPlayerHand (whoseHand){
  for (var i = 0; i < 2; i++) {
    dealCard(whoseHand);
  };
  whoseHand.renderTo($("#player-hand"));
}

function dealDealerHand(whoseHand) {
  dealCard(whoseHand);
  dealCard(whoseHand);
  whoseHand.renderTo($("#dealer-hand"));
}

function dealCard (whoseHand, hidden) {
  var card = deck.pickCard();
  whoseHand.receiveCard(card);
}

function addClickListenerToDealButton() {
  $("#deal_cards").on("click", dealCards)
}

addClickListenerToDealButton();
