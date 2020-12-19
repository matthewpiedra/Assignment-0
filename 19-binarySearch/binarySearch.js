class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    // Insert code here;
    let middle = Math.floor((nums.length)/2);
    if(nums[middle] === target) {
        this.flag = true;
        return this.flag;
    }
    else if(nums[middle] > target) {
        this.binarySearch(nums.slice(0,middle),target);
    }
    else if(nums[middle] < target) {
        this.binarySearch(nums.slice(middle+1,nums.length),target);
    }
    return this.flag;
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;