var $ = require('jquery')

//initialize new hand
function Hand() {
  this.cards = [];
};

  // receiveCard(card)
  //   add card into array
  Hand.prototype.receiveCard = function (card) {
    this.cards.push(card);
    return this.cards;
  }

  // clear
  Hand.prototype.clear = function () {
    this.cards = [];
  }

  // score
  // Hand.prototype.score = function () {

  //   this.cards.forEach(function (card) {
  //     cardValues.push(card.value);
  //     console.log("Score: " + cardValues);
  //     var sum = cardValues.reduce(function (sum, card) {
  //       return sum + card.value;
  //     },0);
  //   })
  // }

  Hand.prototype.score = function (cards) {
     return this.cards.reduce(function (sum, card) {
        return sum + card.value;
      },0);
    }

  //   console.log("Score cards:" + this.cards);
  //   score = this.cards.reduce(function (previousValue, card) {
  //     return previousValue + card.value;
  //   }, 0);
  //   return score;
  // }

  //   // score
  // Hand.prototype.score = function () {
  //   var score = 0;
  //   score = this.cards.reduce(function (previousValue, card) {
  //     return previousValue + card.value;
  //   }, 0);
  //   return score;
  // }


  // renderTo(jQuery Dom object)
  //   hand renders itself
  Hand.prototype.renderTo = function (jQueryDestination) {
    var cardView = $('<ul></ul>')

    this.cards.forEach(function (card) {
      cardView.append("<li>" + card.name +
          " of " + card.suit +
          " Value " + card.value + "</li>");
    });
    jQueryDestination.html(cardView);
  }


module.exports = Hand;
