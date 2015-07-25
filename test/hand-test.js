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
    var card1 = { name: "Ace", suit: "Hearts", value: 11 }
    var card2 = { name: "Two", suit: "Hearts", value: 2 }
    hand.receiveCard(card1);
    hand.receiveCard(card2);

    assert.equal(hand.score(), 13);
  })

});
