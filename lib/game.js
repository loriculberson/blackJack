var $ = require('jquery')
const Hand = require('../lib/hand');
// var play = require('../lib/index');

//initialize a each new Game
//deal button is enabled
//hit and stay buttons are disabled
// player and dealer hands are both cleared
function Game() {};

Game.prototype.initialize = function () {
  this.hitMe = $("#hit-me-button");
  this.stay = $("#stay-button");
  this.deal = $("#deal-cards-button");

  // playerHand.clear();
  // dealerHand.clear();
  this.beforeGameStartButtons();
}

Game.prototype.start = function () {
  //when user clicks on "deal-cards", buttons change state
  // play.addClickListenerToDealButton()
}

Game.prototype.beforeGameStartButtons = function () {
  $.fn.extend({
    disable: function(state) {
      return this.each(function(){
        this.disabled = state;
      })
    }
  })

  this.hitMe.disable(true);
  this.stay.disable(true);
  this.deal.disable(false);
}

Game.prototype.buttonsDuringGame = function() {
  $.fn.extend({
    disable: function(state) {
      return this.each(function(){
        this.disabled = state;
      })
    }
  })

  this.hitMe.disable(false);
  this.stay.disable(false);
  this.deal.disable(true);
}


Game.prototype.buttonsDuringStay = function() {
  $.fn.extend({
    disable: function(state) {
      return this.each(function(){
        this.disabled = state;
      })
    }
  })

  this.hitMe.disable(true);
  this.stay.disable(false);
  this.deal.disable(true);
}



// Game.prototype.disableHitButton = function () {
//
// }


// STAY BUTTON
// hit stay
// disable hit-me button
// dealOneCard (dealer)
// score dealer
//   logic:
//     if < 17 hit Again
//     if >= 17 stay and evaluate
//     if > 21 bust dealer
// who won message
// reset game




module.exports = Game;
