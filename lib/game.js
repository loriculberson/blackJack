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
  this.playAgain = $("#new-game-button");
  
  this.beforeGameStartButtons();
}

Game.prototype.newGame = function () {
  // $.fn.extend({
  //   disable: function(state) {
  //     return this.each(function(){
  //       this.disabled = state;
  //     })
  //   }
  // })

  // this.deal.disable(true);
  // this.hitMe.disable(true);
  // this.stay.disable(true);
  // this.playAgain.disable(false);
  this.buttonsAfterGame();
  //  this.hitMe = $("#hit-me");
  // this.stay = $("#stay");
  // this.deal = $("#deal-cards");
  // this.reset = $("#reset-game-button");

  // this.playerScore = $("#player-score");
  // this.playerMessage = $("#player-message");
  // this.playerHand = $("#player-hand");
  // // this.dealerHand = $("#dealer-hand")

  // this.playerHand.hide();
  // this.playerScore.empty();
  // this.playerMessage.empty();
  // score = 0;
  // this.dealerHand.empty();
}


Game.prototype.beforeGameStartButtons = function () {
  $.fn.extend({
    disable: function(state) {
      return this.each(function(){
        this.disabled = state;
      })
    }
  })

  this.deal.disable(false);
  this.hitMe.disable(true);
  this.stay.disable(true);
  this.playAgain.disable(true);
}

Game.prototype.buttonsDuringGame = function() {
  $.fn.extend({
    disable: function(state) {
      return this.each(function(){
        this.disabled = state;
      })
    }
  })

  this.deal.disable(true);
  this.hitMe.disable(false);
  this.stay.disable(false);
  this.playAgain.disable(true);
}

Game.prototype.buttonsAfterGame = function() {
    $.fn.extend({
    disable: function(state) {
      return this.each(function(){
        this.disabled = state;
      })
    }
  })

  this.deal.disable(true);
  this.hitMe.disable(true);
  this.stay.disable(true);
  this.playAgain.disable(false);
}

Game.prototype.disableHitButton = function () {

}



module.exports = Game;
