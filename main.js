// Check if a given word is Palindrome
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

// Check if bar is an valid Object
function isValidObject(var_to_check) {
	return (var_to_check !== null) && (var_to_check.constructor === Object);
}

// Closures
// inner functions that has access to the own, outer and global scopes.
// Display 1, 4, 3, 2.
function testClosures1() {
	console.log(1);
	setTimeout(function(){console.log(2);}, 1000);
	setTimeout(function(){console.log(3);}, 0);
	console.log(4);
};

// Display all the i values passed the timeout.
function testClosures2() {
	for(let i=0; i <= 10; i++) {
		setTimeout(function() {
			console.log(`Index: ${i}`);
		}, 1000);
	}
}

module.exports = { isPalindrome, anySumIsEqualToK, isValidObject };

