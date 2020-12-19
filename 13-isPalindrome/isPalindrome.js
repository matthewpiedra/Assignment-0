function isPalindrome(word) {
  // Insert code here;
  if(word.length === 0) {
     return true;
  }
  if(word[0] === word[word.length-1]) { 
     return isPalindrome(word.slice(1,word.length-1));
  }
  else {
     return false;
  }
}

// Do not edit this line;
module.exports = isPalindrome;