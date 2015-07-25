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

});
