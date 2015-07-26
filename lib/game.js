var $ = require('jquery')
const Hand = require('../lib/hand');

//initialize a each new Game
//deal button is enabled
//hit and stay buttons are disabled
// player and dealer hands are both cleared
function Game() {};

Game.prototype.initialize = function () {
  this.hitMe = $("#hit-me-button");
  this.stay = $("#stay-button");
  this.deal = $("#deal-cards-button");
  this.playAgain = $("#new-game-button");
  
  this.beforeGameStartButtons();
}

Game.prototype.newGame = function (oldPlayerHand) {
  // this.playerMessage = $("#player-message");
  // console.log(oldPlayerHand);
  this.buttonsAfterGame();
  // this.playAgain.on('click', clearGameBoard() {
    // debugger;
    oldPlayerHand.clear();

  // })
  // oldPlayerHand.renderMessage.($"#player-message")remove();
  // oldPlayerHand.score = 0;
  // setTimeout(this.clearGameBoard, 3000);
  // this.clearGameBoard();
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

module.exports = Game;
