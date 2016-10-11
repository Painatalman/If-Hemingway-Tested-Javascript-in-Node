// Import chai.
var chai = require('chai'),
  path = require('path');

require('mocha-testcheck').install();

var functions = [
  {
    name: 'plath',
    methodPath:'../say-it/plath.js' // here, we will do things differently, because we must reset the function always to reset all the words after each test
  },
  {
    name: 'rowling',
    methodPath:'../say-it/rowling.js' // here, we will do things differently, because we must reset the function always to reset all the words after each test
  },
  {
    name: 'roy',
    methodPath:'../say-it/roy.js', // here, we will do things differently, because we must reset the function always to reset all the words after each test
    notes: 'Roy returns an object that has the toString() method.'
  },
  {
    name: 'kafka-v2',
    methodPath:'../say-it/kafka-solved.js', // here, we will do things differently, because we must reset the function always to reset all the words after each test
    notes: 'His original method does not solve a thing'
  },
  {
    name: 'calvino',
    methodPath:'../say-it/calvino.js' // here, we will do things differently, because we must reset the function always to reset all the words after each test
  },
  {
    name: 'calvino (short ver.)',
    methodPath:'../say-it/calvino-short.js' // here, we will do things differently, because we must reset the function always to reset all the words after each test
  }
];

var expect = chai.expect; // expect style assertions

describe('Say it. Chainable and ends when with nothing', function () {



  functions.forEach(function(theFunction) {
    var name = theFunction.name;
    var method;

    beforeEach(function(){
      // reset the context variables
      // this is needed for testing global-dependant algorithms like plath's
      delete require.cache[require.resolve(theFunction.methodPath)];
      // then require it again, it will be created anew, cached object must not be reused
      method = require(theFunction.methodPath);
    });

    it('should exist', function() {
        expect(method).to.not.be.undefined;
    });

    it(name + ' should be empty of called with nothing', function () {
      expect(method()).to.be.empty;
    });

    it(name + ' should be a word when called once with a word and then with nothing', function () {
      expect(method('Hello')()).to.equal('Hello');
    });

    it(name + ' should process some chained words into one', function () {
      expect(method('Hello')('and')('goodbye')()).to.equal('Hello and goodbye');
    });

    it(name + ' should process some chained words into one, ending with an empty string', function () {
      expect(method('Hello')('and')('goodbye')('')).to.equal('Hello and goodbye');
    });

    it(name + ' should should work with anything that is "summable", like numbers', function () {
      expect(method('Hello')('number')(6)('')).to.equal('Hello number 6');
    });

    it(name + ' should not be callable after a call with no parameter or empty string', function () {
      expect(function () {method('Goodbye')('')("and hello")}).to.throw(TypeError);
    });
  });
});
