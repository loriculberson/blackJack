var $ = require('jquery')
const Hand = require('../lib/hand');
// var play = require('../lib/index');

//initialize a each new Game
//deal button is enabled
//hit and stay buttons are disabled
// player and dealer hands are both cleared
function Game() {};

Game.prototype.initialize = function () {
  this.hitMe = $("#hit-me");
  this.stay = $("#stay");
  this.deal = $("#deal-cards");

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

Game.prototype.disableHitButton = function () {

}

module.exports = Game;
