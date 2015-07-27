const assert = require('chai').assert;
var expect = require('chai').expect;
const deck = require('../lib/deck');

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

  //test remaining card count yields a shuffle of full deck


});
