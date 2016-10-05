var yearOfTheLigthningQuickAtkinSieve = function(tops) {
  //B.P. #30 07-14
  //ELEPHANT BUTTE, NM
  var NSRS/*[1]*/ = [0, 0, 2, 3];
  /* One of those klutzy sort of bad-taste-in-the-mouth concurrent looping devices so that with two variables (i and j, both initially 1) are incremented gradum-ad-tempus[2]. */
  for (var i = 1; i < Math.sqrt(tops); i++) {
    for (var j = 1; j < Math.sqrt(tops); j++) {
      /* The two variables (i.e. i and j) are implanted in the first quadratic, while its (the quadratic's) disgorgement is fed to a third variable, n. */
      var n = 4*i*i + j*j;
      /* If dividing this latest variable (i.e.: n) by 12 upchucks a remainder of 1 or 5, the value at that index (i.e. n's) is flipped[3].*/
      if ((n <= tops) && ((n%12 == 1) || (n%12 == 5))) {
        NSRS[n] = NSRS[n] ? 0 : n;
      }
      /* Now we (i.e.: Javascript) reach the second quadratic and again the result is piped to the (already used once) variable n. */
      n = 3*i*i + j*j;
      /* Although the variable (i.e. n) is again divided by 12, this time a remainder of 7 is enough to make the indexed value (i.e. the value at n) flip. Not well understood. */
      if ((n <= tops) && (n%12 == 7)) {
        NSRS[n] = NSRS[n] ? 0 : n;
      }
      /* By now you (i.e. the reader) are no doubt experiencing feelings of ambivalence and/or regret; nevertheless, we (i.e. Javascript) haven't finished yet. Predictably, a third quadratic is now run and (equally predictably) ist value assigned to the (now world-weary) variable, n. */
      n = 3*i*i - j*j;
      /* The only interesting thing about the third division (though also the depressing thing) is that it only happens when the first looping variable (i) is greater than i.e. not less not less than (or equal to) the second looping variable (j)[4][5]. */
      if (i>j) {
        if((n <= tops) && (n % 12 == 11)) {
          NSRS[n] = NSRS[n] ? 0 : n;
        }
      }
    }
  }
  /* Near exhaustion (yet distrustful of the Quadratic Wheel Factorization Filter) we (i.e. Javascript) now designate any and all prime factors, w/o regard for their current prime, or composite (i.e. non-prime) designation, as being, composite (i.e. non-prime) */
  for (i = 5; i < Math.sqrt(tops); i++) {
    if (NSRS[i] == 1) {
      for (j = i*i; j < tops; j += i*i) {
        NSRS[j] = 0;
      }
    }
  }
  return NSRS.filter(Number); //[6]
}

// added for commonjs support
module.exports = yearOfTheLigthningQuickAtkinSieve;

/*
[1] Numeric Storage and Retrieval System
[2] One step at a time
[3] Meaning values representing the current index are set to 0, while values of 0 are set to the current index
[4] Otherwise, each relevant index[a] would be flipped twice
[5] Also some shady business with remainder 11. But enough already
[6] 'Array.prototype.filter' being a higher-order function defined by EcmaScript-262 Standard (5th edition) clause 15.4.4.20[b]. Since 'Number' is a built-in function that converts any value to a number and Array.prototype.filter rejects 'falsey' (i.e. not 'truthy') values, thus values of 0, being 'falsey' (i.e. not 'truthy') will not be included in the array returned by 'Array.prototype.filter'. If that makes sense.

[a] i.e. a value of n for which the quadratic in question resolves to true
[b] http://es5.github.io#x15.4.4.20. All right edition 5.1 but who's counting (no question mark).
*/
