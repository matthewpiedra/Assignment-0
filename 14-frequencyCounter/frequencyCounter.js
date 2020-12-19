function frequencyCounter(word) {
  // Insert code here;
  let obj = {};

  for(let i=0;i<word.length;i++) {
     obj[word[i]] = (obj[word[i]] || 0) + 1
  }

  return obj;
}

// Do not edit this line;
module.exports = frequencyCounter;