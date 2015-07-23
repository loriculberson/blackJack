var $ = require('jquery')

//initialize new hand
function Hand() {
  this.cards = [];
};

  // receiveCard(card)
  //   add card into array
  Hand.prototype.receiveCard = function (card) {
    this.cards.push(card);
  }

  // clear
  Hand.prototype.clear = function () {
    this.cards = [];
  }

  // score
  Hand.prototype.score = function () {
    var score = 0;
    this.cards.reduce(function (previousValue, card) {
      return previousValue + card.value;
    });
  }

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
