const assert = require('chai').assert;
var expect = require('chai').expect;
const deck = require('../lib/deck');
const score = require('../lib/score');

describe('Score', function () {

  it('exists', function () {
    assert(score);
  });

  it('returns the correct score for a hand', function () {
    deck.shuffle();
    // console.log(deck);
  })


});
