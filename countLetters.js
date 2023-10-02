const countLetters = function(letters) {
  letterCount = {};

  for (let letter of letters) {
    if (letter === " ") {
      continue;
    } else if (letterCount[letter]) {
      letterCount[letter] += 1;
    } else {
      letterCount[letter] = 1;
    }
  }
  return letterCount;
};

module.exports = countLetters;
