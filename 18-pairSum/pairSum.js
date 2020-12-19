function pairSum(nums, target) {
  // Insert code here;
  if(nums.length <= 1) {
     throw error;
  }
  else {
    let isSum = false;
   
    let left = 0
    let right = nums.length-1
    
    while(left < right) {
       if(nums[left] + nums[right] === target) {
          isSum = true;
          break;
       }
       else if(nums[left] + nums[right] > target) {
          right--;
       }
       else {
          left++;
       }
    }
 
    return isSum;
  }
}

// Do not edit this line;
module.exports = pairSum;