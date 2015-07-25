var $ = require('jquery')
//initialize new hand

function Hand() {
  this.cards = [];
  // this.score = score(cards);
};

  // receiveCard(card)
  //   add card into array
  Hand.prototype.receiveCard = function (card) {
    this.cards.push(card);
    return this.cards;
  }

  Hand.prototype.score = function () {
    return this.cards.reduce(function (sum, card) {
    return sum + card.value;
    },0);
    // return this.sum;
    // renderScore(sum);
  }

  // renderTo(jQuery Dom object)
  //   hand renders itself
  Hand.prototype.renderTo = function (jQueryDestination) {
    var cardView = $('<div></div>')

    this.cards.forEach(function (card) {
      cardView.append('<div class="hand"><img class="card" src=' + card.img + '></div>');
    });

    jQueryDestination.html(cardView);
  }


  // Hand.prototype.renderTo = function (jQueryDestination) {
  //   var cardView = $('<ul></ul>')
  //
  //   this.cards.forEach(function (card) {
  //     cardView.append('<li><img class="card" src=' + card.img + '></li>');
  //   });
  //
  //   jQueryDestination.html(cardView);
  // }


  // Hand.prototype.renderTo = function (jQueryDestination) {
  //   var cardView = $('<ul></ul>')
  //
  //   this.cards.forEach(function (card) {
  //     cardView.append("<li>" + card.name +
  //         " of " + card.suit +
  //         " Value " + card.value +
  //         "</li>");
  //   });
  //
  //   jQueryDestination.html(cardView);
  // }







  Hand.prototype.renderScore = function (jQueryDestination) {
    var scoreView = $('<div></div>')

      scoreView.append("<h3>" + "Score: " + this.score() + "</h3>");

    jQueryDestination.html(scoreView);
  }

  // clear
  Hand.prototype.clear = function () {
    this.cards = [];
  }

module.exports = Hand;
