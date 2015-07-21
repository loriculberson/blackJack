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
    var card = deck[Math.floor(Math.random()*deck.length)];
    deck.splice(Math.floor(Math.random()*deck.length), 1)
    return card;
  }

function dealCards () {

  for (var i = 0; i < 2; i++) {
    console.log(deck.length);
    var card = dealCard();
    console.log("deleted", card);
  }

  console.log(deck.length);


}

function addClickListenerToDealButton() {
  $("#deal_cards").on("click", dealCards)
}

addClickListenerToDealButton();
