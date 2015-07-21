var $ = require('jquery')

  var deck = [
    { name: "A", suit: "Hearts", value: 11 },
    { name: "K", suit: "Spades", value: 10 },
    { name: "Q", suit: "Clubs", value: 10 },
    { name: "Two", suit: "Hearts", value: 2 },
    { name: "Four", suit: "Spades", value: 4 },
    { name: "Seven", suit: "Clubs", value: 7 },
    { name: "Jack", suit: "Hearts", value: 10 },
    { name: "Three", suit: "Diamonds", value: 3 },
    { name: "Ace", suit: "Diamonds", value: 11 },
  ]

  function pickCard () {
    var random = Math.floor(Math.random()*deck.length)
    var card = deck[random];
    deck.splice(random, 1)
    return card;
  }

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
  var card = pickCard();
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

addClickListenerToDealButton();
