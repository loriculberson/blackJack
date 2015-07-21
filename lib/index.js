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

  function dealCard() {
    var random = Math.floor(Math.random()*deck.length)
    var card = deck[random];
    deck.splice(random, 1)
    return card;
  }

function dealCards () {
  dealHand($("#dealer-hand"));
  dealHand($("#player-hand"));
}

function dealHand (whoseHand){
  for (var i = 0; i < 2; i++) {
    var card = dealCard();
    var theCard = $("<li>" + card.name + 
      " of " + card.suit + 
      " Value " + card.value + "</li>")
    whoseHand.append(theCard);
  }
}

function addClickListenerToDealButton() {
  $("#deal_cards").on("click", dealCards)
}

addClickListenerToDealButton();
