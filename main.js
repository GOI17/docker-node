function isPalindrome(word) {
  const reversedWord = () => {
    let tempString = '';
    for (let i = word.length-1; i >= 0; i--) {
      tempString += word[i];
    }
    return tempString;
  };

  return word === reversedWord();
}

function anySumIsEqualToK(list, k) {
  return list.some((a) => list.some((b) => (a+b) == k));
}

module.exports = { isPalindrome, anySumIsEqualToK };

