// Import chai.
var chai = require('chai'),
  path = require('path');

require('mocha-testcheck').install();

chai.should(); // should style assertions
var expect = chai.expect; // works better for error management

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
    method: require('../factorial-numbers/johnson.coffee')
  },
  {
    name: 'doyle',
    method: require('../factorial-numbers/doyle-holmes.js'),
    notes: "Does the opposite of what it was supposed to do... hence, tests fail"
  },
  {
    name: 'kerouac',
    method: require('../factorial-numbers/kerouac.js'),
    notes: "Are you serious? It doesn't even accept parameters"
  }
];

describe('Factorial number solution.', function()  {
  functions.forEach(function(theFunction) {
    var name = theFunction.name;
    var factorialFunction = theFunction.method;

    it('should exist', function() {
        expect(factorialFunction).to.not.be.undefined;
    });

    it(name + " should return 1 for parameter equal to either one or zero", function()  {
      factorialFunction(0).should.equal(1);
      factorialFunction(1).should.equal(1);
    });

    it(name + " should return 120 if 5", function()  {
      factorialFunction(5).should.equal(120);
    });

    it(name + "should return a LARGE number when argument is 42", function() {
      factorialFunction(42).should.equal(1.4050061177528798e+51);
    });

    it(name + " should also be compatible with strings that can be converted to numbers", function()  {
      factorialFunction('7').should.equal(5040);
    });

    it(name + " should throw error unless parseable to a number", function()  {
      expect( function factorialFunctionTest(){factorialFunction('a4')}).to.throw(Error);
    });
  });
});
