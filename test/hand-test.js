const assert = require('chai').assert;
var expect = require('chai').expect;
const deck = require('../lib/deck');
const Hand = require('../lib/hand');

describe('Hand', function () {

  it('exists', function () {
    assert(Hand);
  });

  it('returns the correct score for a hand', function () {
    deck.shuffle();
    var hand = new Hand();
    var card1 = { name: "Queen", suit: "Hearts", value: 10 }
    var card2 = { name: "Two", suit: "Hearts", value: 2 }
    hand.receiveCard(card1);
    hand.receiveCard(card2);

    assert.equal(hand.score(), 12);

  })

  it('displays BUST if score is greater than 21', function () {
    deck.shuffle();
    var hand = new Hand();
    var card1 = { name: "Queen", suit: "Hearts", value: 10 }
    var card2 = { name: "King", suit: "Hearts", value: 10 }
    var card3 = { name: "Two", suit: "Hearts", value: 2 }
    hand.receiveCard(card1);
    hand.receiveCard(card2);
    hand.receiveCard(card3);

    assert.equal(hand.score(), 22);
  })

  it('can score an Ace as 11 or 1 if it is a hit card', function (){
    deck.shuffle();
    var hand = new Hand();

    var card1 = { name: "Queen", suit: "Hearts", value: 10 }
    var card2 = { name: "King", suit: "Hearts", value: 10 }
    var hitCard = { name: "Ace",   suit: "Hearts", value: 11}

    hand.receiveCard(card1);
    hand.receiveCard(card2);
    hand.receiveCard(hitCard);

    assert.equal(hand.score(), 21);
  })

  it ('can properly score and Ace as 11 or 1 if it is a first card', function (){
    deck.shuffle();
    var hand = new Hand();

    var card1 = { name: "Ace", suit: "Hearts", value: 11 }
    var card2 = { name: "Four", suit: "Diamonds", value: 4 }
    var hitCard = { name: "Eight", suit: "Clubs", value: 8 }
    
    hand.receiveCard(card1);
    hand.receiveCard(card2);
    hand.receiveCard(hitCard);

    assert.equal(hand.score(), 13);
  })

  it ('can properly score and Ace as 11 or 1 if it is a second card', function (){
    deck.shuffle();
    var hand = new Hand();

    var card1 = { name: "Four", suit: "Diamonds", value: 4 }
    var card2 = { name: "Ace", suit: "Hearts", value: 11 }
    var hitCard = { name: "Eight", suit: "Clubs", value: 8 }
    var hitCard2 = { name: "Ace", suit: "Diamonds", value: 11 }
    var hitCard3 = { name: "King", suit: "Hearts", value: 10 }
    
    hand.receiveCard(card1);
    hand.receiveCard(card2);
    hand.receiveCard(hitCard);
    hand.receiveCard(hitCard2);
    hand.receiveCard(hitCard3);

    assert.equal(hand.score(), 24);
  })
});
