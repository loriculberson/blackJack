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

  Hand.prototype.score = function () {
    return this.cards.reduce(function (sum, card) {
    return sum + card.value;
    },0);
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
    // $("#player-message").remove();
  }

  // WIN OR BUST MESSAGE
  Hand.prototype.renderMessage = function (jQueryDestination, message) {
    var messageView = $('<div></div>')
//remove the last h2 which is the appended one, which will immediately get replaced
  $('h2').remove()
    messageView.append(message);
    jQueryDestination.html(messageView);
  }


module.exports = Hand;
