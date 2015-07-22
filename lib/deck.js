//complete deck of cards

var allCards = [
    { name: "Ace", suit: "Hearts", value: 11 },
    { name: "K", suit: "Spades", value: 10 },
    { name: "Q", suit: "Clubs", value: 10 },
    { name: "Two", suit: "Hearts", value: 2 },
    { name: "Four", suit: "Spades", value: 4 },
    { name: "Seven", suit: "Clubs", value: 7 },
    { name: "Jack", suit: "Hearts", value: 10 },
    { name: "Three", suit: "Diamonds", value: 3 },
    { name: "Ace", suit: "Diamonds", value: 11 }
  ]

//cards that are shuffled and in play. This set of cards
//gets modified through course of game
var cards = allCards.slice();

module.exports = {
  pickCard: function () {
    var random = Math.floor(Math.random()*cards.length)
    var card = cards[random];
    cards.splice(random, 1)
    // console.log(card.value);
    return card;
  },

  shuffle: function () {
    cards = allCards.slice();
  },

  remainingCardCount: function () {
    // console.log(cards.length)
    return cards.length;
  }
}
