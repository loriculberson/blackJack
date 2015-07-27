const assert = require('chai').assert;
var expect = require('chai').expect;
const deck = require('../lib/deck');
// var Hand = require('./hand');

// var playerHand = new Hand();
// var dealerHand = new Hand();

describe('Deck', function () {

  it('exists', function () {
    assert(deck);
  });

  it('starts with 52 cards', function () {
    deck.shuffle();

    assert.equal(deck.remainingCardCount(), 52);
  });

  it('pickCard removes card from deck', function () {
    deck.shuffle();
    deck.pickCard();
    assert.equal(deck.remainingCardCount(), 51);
  });

  it('shuffling deck resets the deck to a full set', function () {
    deck.shuffle();
    assert.equal(deck.remainingCardCount(), 52);
    deck.pickCard();
    // console.log(deck.cards.name);
    deck.pickCard();
    assert.equal(deck.remainingCardCount(), 50);
    deck.shuffle();
    assert.equal(deck.remainingCardCount(), 52);
  });

  it('resets deck to full deck when card count is under 13', function () {
    
    deck.shuffle();
    assert.equal(deck.remainingCardCount(), 52);

    var i = 0;

    for ( i=0; i < 40; i++) {
      deck.pickCard();
    }
    assert.equal(deck.remainingCardCount(), 12);

    deck.shuffle();
    assert.equal(deck.remainingCardCount(), 52);
  });

});
