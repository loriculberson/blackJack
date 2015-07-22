var $ = require('jquery')
var deck = require ('./deck')

function dealCards () {
  dealDealerHand($("#dealer-hand"));
  dealPlayerHand($("#player-hand"));
}

function dealPlayerHand (whoseHand){
  for (var i = 0; i < 2; i++) {
    dealCard(whoseHand, false);
  }
}

function dealDealerHand(whoseHand) {
  dealCard(whoseHand, false);
  dealCard(whoseHand, true);
}

function dealCard (whoseHand, hidden) {
  var card = deck.pickCard();
  var cardView = $("<li>" + card.name +
      " of " + card.suit +
      " Value " + card.value + "</li>")
  if (hidden) {
    cardView.addClass('hide-card');
  }
  whoseHand.append(cardView);

}

function addClickListenerToDealButton() {
  $("#deal_cards").on("click", dealCards)
}

function scoreHand(card) {
  // get cards
  // if card is Ace, push value into handAces
  // else, goes into hand
  // accumulate values
  // reduce score (string interpolation)
  var hand = [];
  var handAces = [];
  // var cardValue = card.value
  hand.push(card.value)
  return hand;
  console.log(hand.value)


};

addClickListenerToDealButton();
