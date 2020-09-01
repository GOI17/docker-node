const { isPalindrome, anySumIsEqualToK } = require('./main.js');

test('Returns true if the word is Palindrome', () => {
  expect(isPalindrome('level')).toBe(true);
});

test('Returns false if the word is not Palindrome', () => {
  expect(isPalindrome('palindrome')).toBe(false);
});

test('Returns true if any sum of two values is equal to 17' , () => {
  expect(anySumIsEqualToK([10, 15, 3, 7], 17)).toBe(true);
});

test('Returns true if any sum of two values is equal to 22', () => {
  expect(anySumIsEqualToK([10, 15, 3, 7], 22)).toBe(true);
});
