//complete deck of cards
var allCards = [
    { name: "Ace",   suit: "Clubs", value: 1,  img: "../img/cards/ace_of_clubs.svg" },
    { name: "Two",   suit: "Clubs", value: 2,  img: "../img/cards/2_of_clubs.svg" },
    { name: "Three", suit: "Clubs", value: 3,  img: "../img/cards/3_of_clubs.svg" },
    { name: "Four",  suit: "Clubs", value: 4,  img: "../img/cards/4_of_clubs.svg" },
    { name: "Five",  suit: "Clubs", value: 5,  img: "../img/cards/5_of_clubs.svg" },
    { name: "Six",   suit: "Clubs", value: 6,  img: "../img/cards/6_of_clubs.svg" },
    { name: "Seven", suit: "Clubs", value: 7,  img: "../img/cards/7_of_clubs.svg" },
    { name: "Eight", suit: "Clubs", value: 8,  img: "../img/cards/8_of_clubs.svg" },
    { name: "Nine",  suit: "Clubs", value: 9,  img: "../img/cards/9_of_clubs.svg" },
    { name: "Ten",   suit: "Clubs", value: 10, img: "../img/cards/10_of_clubs.svg" },
    { name: "Jack",  suit: "Clubs", value: 10, img: "../img/cards/jack_of_clubs.svg" },
    { name: "Queen", suit: "Clubs", value: 10, img: "../img/cards/queen_of_clubs.svg" },
    { name: "King",  suit: "Clubs", value: 10, img: "../img/cards/king_of_clubs.svg" },

    { name: "Ace",   suit: "Diamonds", value: 1,  img: "../img/cards/ace_of_diamonds.svg" },
    { name: "Two",   suit: "Diamonds", value: 2,  img: "../img/cards/2_of_diamonds.svg" },
    { name: "Three", suit: "Diamonds", value: 3,  img: "../img/cards/3_of_diamonds.svg" },
    { name: "Four",  suit: "Diamonds", value: 4,  img: "../img/cards/4_of_diamonds.svg" },
    { name: "Five",  suit: "Diamonds", value: 5,  img: "../img/cards/5_of_diamonds.svg" },
    { name: "Six",   suit: "Diamonds", value: 6,  img: "../img/cards/6_of_diamonds.svg" },
    { name: "Seven", suit: "Diamonds", value: 7,  img: "../img/cards/7_of_diamonds.svg" },
    { name: "Eight", suit: "Diamonds", value: 8,  img: "../img/cards/8_of_diamonds.svg" },
    { name: "Nine",  suit: "Diamonds", value: 9,  img: "../img/cards/9_of_diamonds.svg" },
    { name: "Ten",   suit: "Diamonds", value: 10, img: "../img/cards/10_of_diamonds.svg" },
    { name: "Jack",  suit: "Diamonds", value: 10, img: "../img/cards/jack_of_diamonds.svg" },
    { name: "Queen", suit: "Diamonds", value: 10, img: "../img/cards/queen_of_diamonds.svg" },
    { name: "King",  suit: "Diamonds", value: 10, img: "../img/cards/king_of_diamonds.svg" },

    { name: "Ace",   suit: "Hearts", value: 1,  img: "../img/cards/ace_of_hearts.svg" },
    { name: "Two",   suit: "Hearts", value: 2,  img: "../img/cards/2_of_hearts.svg" },
    { name: "Three", suit: "Hearts", value: 3,  img: "../img/cards/3_of_hearts.svg" },
    { name: "Four",  suit: "Hearts", value: 4,  img: "../img/cards/4_of_hearts.svg" },
    { name: "Five",  suit: "Hearts", value: 5,  img: "../img/cards/5_of_hearts.svg" },
    { name: "Six",   suit: "Hearts", value: 6,  img: "../img/cards/6_of_hearts.svg" },
    { name: "Seven", suit: "Hearts", value: 7,  img: "../img/cards/7_of_hearts.svg" },
    { name: "Eight", suit: "Hearts", value: 8,  img: "../img/cards/8_of_hearts.svg" },
    { name: "Nine",  suit: "Hearts", value: 9,  img: "../img/cards/9_of_hearts.svg" },
    { name: "Ten",   suit: "Hearts", value: 10, img: "../img/cards/10_of_hearts.svg" },
    { name: "Jack",  suit: "Hearts", value: 10, img: "../img/cards/jack_of_hearts.svg" },
    { name: "Queen", suit: "Hearts", value: 10, img: "../img/cards/queen_of_hearts.svg" },
    { name: "King",  suit: "Hearts", value: 10, img: "../img/cards/king_of_hearts.svg" },

    { name: "Ace",   suit: "Spades", value: 1,  img: "../img/cards/ace_of_spades.svg" },
    { name: "Two",   suit: "Spades", value: 2,  img: "../img/cards/2_of_spades.svg" },
    { name: "Three", suit: "Spades", value: 3,  img: "../img/cards/3_of_spades.svg" },
    { name: "Four",  suit: "Spades", value: 4,  img: "../img/cards/4_of_spades.svg" },
    { name: "Five",  suit: "Spades", value: 5,  img: "../img/cards/5_of_spades.svg" },
    { name: "Six",   suit: "Spades", value: 6,  img: "../img/cards/6_of_spades.svg" },
    { name: "Seven", suit: "Spades", value: 7,  img: "../img/cards/7_of_spades.svg" },
    { name: "Eight", suit: "Spades", value: 8,  img: "../img/cards/8_of_spades.svg" },
    { name: "Nine",  suit: "Spades", value: 9,  img: "../img/cards/9_of_spades.svg" },
    { name: "Ten",   suit: "Spades", value: 10, img: "../img/cards/10_of_spades.svg" },
    { name: "Jack",  suit: "Spades", value: 10, img: "../img/cards/jack_of_spades.svg" },
    { name: "Queen", suit: "Spades", value: 10, img: "../img/cards/queen_of_spades.svg" },
    { name: "King",  suit: "Spades", value: 10, img: "../img/cards/king_of_spades.svg" },

  ]

//cards that are shuffled and in play. This set of cards
//gets modified through course of game
var cards = allCards.slice();

module.exports = {
  pickCard: function () {
    var random = Math.floor(Math.random()*cards.length)
    var card = cards[random];
    cards.splice(random, 1)
    return card;
  },

  shuffle: function () {
    cards = allCards.slice();
  },

  remainingCardCount: function () {
    return cards.length;
  }
}
