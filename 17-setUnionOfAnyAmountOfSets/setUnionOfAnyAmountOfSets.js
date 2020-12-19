function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  let union = new Set();

   for(let i=0;i<args.length;i++) {
      for(let items of args[i]) {
         union.add(items);
      }
   }

   return union;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;