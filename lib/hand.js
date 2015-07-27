var $ = require('jquery')

function Hand() {
  this.cards = [];
  this.numOfAces = 0;
};

  Hand.prototype.receiveCard = function (card) {
    if (card.name === "Ace") {
      this.numOfAces++ 
    }
    this.cards.push(card);
    this.first = this.cards[0];

    console.log("First: " + this.first.name);
    console.log("Ace count:" + this.numOfAces)
    return this.cards;
  }

  Hand.prototype.score = function () {
    var _this = this;
    return this.cards.reduce(function (sum, card) {
      // if (_this.first.name === "Ace") {
      //   if (sum + card.value > 21) {
      //     return sum - 10;
      //   }
      // }

      if (card.name === "Ace") {
        if (sum + card.value > 21) {
          return sum + 1;
        } else {
          return sum + card.value;
        }
      }
      return sum + card.value;
    }, 0);
  }

  Hand.prototype.renderTo = function (jQueryDestination) {
    var cardView = $('<div></div>')

    this.cards.forEach(function (card) {
      cardView.append('<div class="hand"><img class="card" src=' + card.img + '></div>');
    });

    jQueryDestination.html(cardView);
  }

  Hand.prototype.renderScore = function (jQueryDestination) {
    var scoreView = $('<div></div>')
    scoreView.append("<h3>" + "Score: " + this.score() + "</h3>");
    jQueryDestination.html(scoreView);
  }

  // CLEAR
  Hand.prototype.clear = function () {
    this.cards = [];
  }

  // WIN OR BUST MESSAGE
  Hand.prototype.renderMessage = function (jQueryDestination, message) {
    var messageView = $('<div></div>')
    messageView.append(message);
    jQueryDestination.html(messageView);
  }


module.exports = Hand;
