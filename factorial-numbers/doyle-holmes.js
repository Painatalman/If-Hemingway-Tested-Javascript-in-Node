'use strict';
// in solving a problem of this sort, the grand thing is to reason backwards...

// some things are easier known than explained
var caseHistory = {
  2: 2,
  6: 3
}

// it is a capital mistake to theorise before one has data
module.exports = function unfactorial (evidence) {
  // it is my belief, Watson, founded upon my experience, that a
  // mathematician would never chase the factorial of zero
  if (evidence === 1) { return 1; }

  // seek out logical procedure
  if (caseHistory[evidence]) {
    // elementary!
    return caseHistory[evidence];
  }

  // eliminate the impossible
  if (evidence === 0 || evidence % 24 !== 0) {
    return "charlatans!";
  }

  // at this point, deductions may be drawn
  var theDeduction, numerator = evidence, denominator = 1;
  while (numerator % denominator === 0) {
   numerator = numerator / denominator++;

   if (numerator === denominator) {
    theDeduction = numerator;
   }
  }

  theDeduction = theDeduction || "impostors";

  // what one man can invent, another can discover
  caseHistory[evidence] = theDeduction;

  // what remains, whatever improbable, must be the truth.
  return theDeduction;
}
