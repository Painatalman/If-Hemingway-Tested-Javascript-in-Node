// Import chai.
var expect = require('chai').expect,
  path = require('path');

require('mocha-testcheck').install();

var functions = [
  {
    name: 'hemingway',
    methodPath:'../fibonacci-numbers/hemingway.js'
  },
  {
    name: 'shakespeare',
    methodPath:'../fibonacci-numbers/shakespeare.js'
  },
  {
    name: 'brown',
    methodPath:'../fibonacci-numbers/brown.js'
  },
  {
    name: 'bolano',
    methodPath:'../fibonacci-numbers/bolano.js'
  },
  {
    name: 'breton',
    methodPath:'../fibonacci-numbers/breton.js'
  },
];

describe('Fibonacci Numbers solution', function () {
  functions.forEach(function(theFunction) {
    var name = theFunction.name;
    var method = require(theFunction.methodPath);

    it('should exist', function() {
        expect(method).to.not.be.undefined;
    });

    it(name + ' should have 0 and 1 when length is 2', function () {
      expect(method(2)).to.deep.equal([0, 1]);
    });

    it(name + ' should have a list of these items when length is 7', function () {
      expect(method(7)).to.deep.equal([0, 1, 1, 2, 3, 5, 8]);
    });

    it(name + ' should work with strings that are convertible to numbers', function () {
      expect(method('8')).to.deep.equal([0, 1, 1, 2, 3, 5, 8, 13]);
    });

    it(name + ' should NOT work with strings that are NOT convertible to numbers', function () {
      expect(method('g8')).to.throw(Error);
    });

    describe(name + ' must behave properly when parameter is less than 2', function () {
      it ('should be 1 for 1', function() {
        expect(method(1)).to.deep.equal(1);
      });
      it ('should be 0 for 0', function() {
        expect(method(0)).to.deep.equal(0);
      });
      it ('should throw an error for a negative', function() {expect(function () {method(-3)}).to.throw(Error);});
    });
  });
});
