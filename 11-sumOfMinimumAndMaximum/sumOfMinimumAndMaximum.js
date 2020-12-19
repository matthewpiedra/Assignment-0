function sumOfMinimumAndMaximum(nums) {
  // Insert code here;
  let min = nums[0];
   for(let i=1;i<nums.length;i++) {
      if(min > nums[i]) {
         min = nums[i]
      }
   }

   let max = nums[0];
   for(let i=1;i<nums.length;i++) {
      if(max < nums[i]) {
         max = nums[i];
      }
   }

   return min+max;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;