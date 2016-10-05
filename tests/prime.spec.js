// Import chai.
var chai = require('chai'),
  path = require('path');

var functions = [
  {
    name: 'adams',
    method: require('../prime-numbers/adams.js'),
    notes: 'It always returns 42, it will fail! Also, there is no alert in a nodejs environment, for we used an extension.'
  },
  {
    name: 'borges',
    method: require('../prime-numbers/borges.js')
  },
  {
    name: 'carroll',
    method: require('../prime-numbers/carroll.js')
  },
  {
    name: 'dickens',
    method: require('../prime-numbers/dickens.js')
  },
  {
    name: 'wallace',
    method: require('../prime-numbers/wallace.js')
  }
];

chai.should(); // should style assertions

describe('All prime numbers up to a maximum value. 1 is not considered.', function () {

  functions.forEach(function(theFunction) {
    var name = theFunction.name;
    var method = theFunction.method;

    it(name + ' should return an empty array if it is zero', function () {
      method(0).should.be.empty;
    });

    it(name + ' should return two numbers when it is 3', function () {
      method(3).should.deep.equal([2, 3]);
    });

    it(name + ' should return the following numbers for 18', function () {
      method(18).should.deep.equal([2, 3, 5, 7, 11, 13, 17]);
    });

    it(name + ' should work with strings that are convertable to a number', function () {
      method('19').should.deep.equal([2, 3, 5, 7, 11, 13, 17, 19]);
    });

    it(name + ' should throw error unless parseable to a number', function () {
      method('a4').should.throw(Error);
    });
  });
});
