const assert = require('chai').assert;
var expect = require('chai').expect;
const deck = require('../lib/deck');

describe('Deck', function () {


  it('exists', function () {
    assert(deck);
  });

  it('starts with 9 cards', function () {
    deck.shuffle();

    assert.equal(deck.remainingCardCount(), 9);
  });

  it('pickCard removes card from deck', function () {
    deck.shuffle();
    deck.pickCard();
    assert.equal(deck.remainingCardCount(), 8);
  });

  it('shuffling deck resets the deck to a full set', function () {
    deck.shuffle();
    assert.equal(deck.remainingCardCount(), 9);
    deck.pickCard();
    deck.pickCard();
    assert.equal(deck.remainingCardCount(), 7);
    deck.shuffle();
    assert.equal(deck.remainingCardCount(), 9);
  });


});
