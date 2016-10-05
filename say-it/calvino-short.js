module.exports = function sayIt(word) {
  var verse = '';
  // shorter and less poetic version
  return chapterOr(word);

  function chapterOr(word) {
    word && (verse += (verse && ' ') + word);
    return word? chapterOr : verse;
  }
}
