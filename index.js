function isPalindrome(word) {
  // Write your algorithm here
  const reverseWord = word.split('').reverse().join('')

  if(reverseWord === word){
    return true
  } else {
    return false
  }
}

/* 
  Add your pseudocode here
*/

/*
we want to store the input word in a variable, then use some logic
to reverse the string and set it equal to a variable, then compare
the two variables to see if they match. Then we will return tre or false 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
