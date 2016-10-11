// Import chai.
var expect = require('chai').expect; // expect style assertions

require('mocha-testcheck').install();

var functions = [
  {
    name: 'tupac',
    methodPath:'../happy-numbers/tupac.js',
    values: {
      true: "chillin",
      false: "illin"
    }
  },
  {
    name: 'woolf',
    methodPath:'../happy-numbers/woolf.js',
    values: {
      true: true,
      false: false
    }
  },

  {
    name: 'chaucer',
    methodPath:'../happy-numbers/chaucer.js',
    values: {
      true: true,
      false: "untrewe"
    }
  },
  {
    name: 'salinger',
    methodPath:'../happy-numbers/salinger.js',
    values: {
      true: "I'm Happy, I really am",
      false: "I'm Unhappy, I really am"
    }
  },
  {
    name: 'nabokov',
    methodPath:'../happy-numbers/nabokov.js',
    values: {
      true: true,
      false: false
    }
  },
];

describe('Happy Numbers: returns true if parameter is happy number, false if it is an unhappy number, and throws an error if is no number at all', function () {
  functions.forEach(function(theFunction) {
    var name = theFunction.name;
    var method = require(theFunction.methodPath);
    var values = theFunction.values;

    it(name + ' should exist', function() {
        expect(method).to.not.be.undefined;
    });

    it(name + ' should recognize 19 as happy', function () {
      expect(method(19)).to.equal(values.true);
    });

    it(name + ' should recognize 4 as unhappy', function () {
      expect(method(4)).to.equal(values.false);
    });

    it(name + ' should work with strings that are convertible to numbers, so "19" should return true', function () {
      expect(method('19')).to.equal(values.true);
    });

    it(name + ' should work with strings that are convertible to numbers, so "4" should return false', function () {
      expect(method('4')).to.equal(values.false);
    });

    // it(name + ' should NOT work with strings that are NOT convertible to numbers', function (done) {
    //   var timeLimit = 5000;
    //   setTimeout(function(){
    //     console.log("done");
    //     done();
    //   }, timeLimit);
    //   expect(function(){method('g8')}).to.throw(Error);
    // });

  });
});
