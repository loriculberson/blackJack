const assert = require('chai').assert;
var expect = require('chai').expect;
  // , deck = { hK: 10 };
const Deck = require('../lib/deck');

describe('creation of deck', function () {

  it('exits', function () {
    assert(Deck);
  });

  it('should construct a deck object', function () {
    assert(new Deck());
  });

  it('should return the correct value for a card', function () {
    var deck = new Deck();

    expect(deck).to.have.property('hK').to.eql(10);
  });

});
