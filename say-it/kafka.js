module.exports = function sayIt(firstWord) {
  var words = [];
  return (function sayIt(word){
    if (!word) {
      try {
        // ERROR maximum call stack exceeded
        return sayIt();
      } catch (e) {
        // quitting at last an unsettling recursion,
        // the array was transformed into a monstrous string
        words = "'there\'s been a hideous mistake";
        return words;
      }
    } else {
      words.push(word);
      return sayIt;

      }
  })(firstWord);
};
