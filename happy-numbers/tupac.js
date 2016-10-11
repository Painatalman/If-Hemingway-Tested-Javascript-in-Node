module.exports = function(maFigure) {
var theyDigits, theStash, nextFigure, anEmptyHash = {};

function isChillin(maFigure) {
  theStash = theStash || anEmptyHash;
  nextFigure = 0; /* picture me nillin' */
  /* in preparation fo' fillin */
  /* they precondition is partition so */ doFissionOn(maFigure);
  sumTheySquares() /* quadratic addition, like a math'matician */
  if (nextFigure == 1) return "chillin"
  if (theStash[nextFigure] == 'x') return "illin"
  theStash[nextFigure] = 'x' /* keepin' the history */
  /* breakin' the chain of iteration misery */
  return isChillin(nextFigure)
}

function doFissionOn(n) { theyDigits = n.toString().split('') }
function sumTheySquares() {theyDigits.forEach(function(n){nextFigure+=n*n})}

// NOTE: extra for export support
return isChillin(maFigure);
}
