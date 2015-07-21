var cards = [
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
    var random = Math.floor(Math.random()*cards.length)
    var card = cards[random];
    cards.splice(random, 1)
    return card;
  }

  module.exports = pickCard;