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

  Hand.prototype.score = function (cards) {
     return this.cards.reduce(function (sum, card) {
     return sum + card.value;
      },0);
  }

  // renderTo(jQuery Dom object)
  //   hand renders itself
  Hand.prototype.renderTo = function (jQueryDestination) {
    var cardView = $('<ul></ul>')

    this.cards.forEach(function (card) {
      cardView.append("<li>" + card.name +
          " of " + card.suit +
          " Value " + card.value + 
          "</li>");
    });
    
    jQueryDestination.html(cardView);
  }


module.exports = Hand;
