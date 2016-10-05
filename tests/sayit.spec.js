// Import chai.
var chai = require('chai'),
  path = require('path');

var functions = [
  {
    name: 'plath',
    methodPath:'../say-it/plath.js' // here, we will do things differently, because we must reset the function always to reset all the words after each test
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

chai.should(); // should style assertions

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
    })

    it(name + ' should be empty of called with nothing', function () {
      method().should.be.empty;
    });

    it(name + ' should be a word when called once with a word and then with nothing', function () {
      method('Hello')().should.equal('Hello');
    });

    it(name + ' should process some chained words into one', function () {
      method('Hello')('and')('goodbye')().should.equal('Hello and goodbye');
    });

    it(name + ' should process some chained words into one, ending with an empty string', function () {
      method('Hello')('and')('goodbye')('').should.equal('Hello and goodbye');
    });
  });
});
