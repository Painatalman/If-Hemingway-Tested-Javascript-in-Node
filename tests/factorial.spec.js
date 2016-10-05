// Import chai.
var chai = require('chai'),
  path = require('path');

var functions = [
  {
    name: 'austen',
    method: require('../factorial-numbers/austen.js')
  },
  {
    name: 'joyce',
    method: require('../factorial-numbers/joyce.js'),
    note: 'Well, it returns some gibberish currency-representing string. Of course it fails!'
  },
  {
    name: 'johnson',
    method: require('../factorial-numbers/johnson.coffee'),
    note: 'Well, it returns some gibberish currency-representing string. Of course it fails!'
  },
  {
    name: 'doyle',
    method: require('../factorial-numbers/doyle-holmes.js'),
    notes: "Does the opposite of what it was supposed to do... hence, tests fail"
  }
];

chai.should(); // should style assertions

describe('Factorial number.', function()  {
  functions.forEach(function(theFunction) {
    var name = theFunction.name;
    var factorialFunction = theFunction.method;

    it(name + " should return 1 for parameter equal to either one or zero", function()  {
      factorialFunction(0).should.equal(1);
      factorialFunction(1).should.equal(1);
    });

    it(name + " should return 120 if 5", function()  {
      factorialFunction(5).should.equal(120);
    });

    it(name + " should also be compatible with strings that can be converted to numbers", function()  {
      factorialFunction('7').should.equal(5040);
    });

    it(name + " should throw error unless parseable to a number", function()  {
      factorialFunction('a4').should.throw(Error);
    });
  });
});
