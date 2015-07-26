var $ = require('jquery')
var deck = require('./deck')
var Hand = require('./hand')
var Game = require('./game')

var playerHand = new Hand();
var dealerHand = new Hand();
var game = new Game();

function dealerTurn () {
//if dealer score
}

function addClickListenerToStayButton () {
  $("#stay-button").on("click", dealerTurn)
}

function playerTakesAHit () {
  dealOneCard(playerHand, $("#player-hand"));
  scorePlayerHand();
}

function addClickListenerToHitButton () {
  $("#hit-me-button").on("click", playerTakesAHit)
}


function scorePlayerHand () {
  playerHand.score();
  playerHand.renderTo($("#player-hand"));
  playerHand.renderScore($("#player-score"));
  // console.log(playerHand.score());

  if (playerHand.score() > 21) {
    playerHand.renderMessage($("#player-message"), "<h2>BUSTED! <br> Sorry! Try Again!</h2>");
    game.newGame();
  } else if (playerHand.score() === 21) {
    playerHand.renderMessage($("#player-message"), "<h2>Congratulations! You Won!</h2>");
    game.newGame();
  }
}


function scoreDealerHand () {
  dealerHand.score();
  dealerHand.renderTo($("#dealer-hand"));
  dealerHand.renderScore($("#dealer-score"));

  // if (dealerHand.score() > 21) {
  //   dealerHand.renderMessage($("#dealer-message"), "<h2>BUSTED! <br> Player Wins!</h2>");
  //   game.newGame();
  // } else if (dealerHand.score() === 21) {
  //   dealerHand.renderMessage($("#dealer-message"), "<h2>Oh well – the dealer won!</h2>");
  //   game.newGame();
  // }
}


function dealDealerHand(dealerHand) {
  dealOneCard(dealerHand, $("#dealer-hand"));
  dealOneCard(dealerHand, $("#dealer-hand"));
}


function playerStays() {
  game.buttonsDuringStay();
  dealOneCard(dealerHand, $("#dealer-hand"));
  scoreDealerHand();

  // hit until >= 17

  if (dealerHand.score() > 21) {
    dealerHand.renderMessage($("#dealer-message"), "<h2>Dealer Busted - PLAYER WINS!</h2>");
    game.newGame();
  } else if (dealerHand.score() === 21) {
    dealerHand.renderMessage($("#dealer-message"), "<h2>Oh well – the dealer won!</h2>");
    game.newGame();
  } else if (dealerHand.score() < 21) {
    dealOneCard(dealerHand, $("#dealer-hand"));
    scoreDealerHand();

      // if still not 21
      if (dealerHand.score() > 21) {
        dealerHand.renderMessage($("#dealer-message"), "<h2>Dealer Busted - PLAYER WINS!</h2>");
        game.newGame();
      } else if (dealerHand.score() === 21) {
        dealerHand.renderMessage($("#dealer-message"), "<h2>Oh well – the dealer won!</h2>");
        game.newGame();
      }
      } else if (dealerHand.score() < 21) {
        dealOneCard(dealerHand, $("#dealer-hand"));
        scoreDealerHand();
      }


    // dealerHand.renderMessage($("#dealer-message"), "<h2>Oh well – the dealer won!</h2>");
    // game.newGame();
  }
}





function dealOneCard (whoseHand, jQueryDestination) {
  var card = deck.pickCard();
  whoseHand.receiveCard(card);
  whoseHand.renderTo(jQueryDestination);
}


function dealPlayerHand (playerHand){
  dealOneCard(playerHand, $("#player-hand"));
  dealOneCard(playerHand, $("#player-hand"));
}


function dealHands () {
  dealPlayerHand(playerHand);
  scorePlayerHand();
  dealDealerHand(dealerHand);
  scoreDealerHand();
  game.buttonsDuringGame();
}


function addClickListenerToDealButton() {
  $("#deal-cards-button").on("click", dealHands)
}

function addClickListenerToStayButton() {
  $("#stay-button").on("click", playerStays)
}

function addClickListenerNewGameButton() {
  $("#new-game-button").on("click", dealHands)
}

game.initialize();
addClickListenerToDealButton();
addClickListenerToHitButton();
addClickListenerToStayButton();
addClickListenerNewGameButton();
