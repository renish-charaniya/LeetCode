/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    
    // let maxSum = 0;
    // let currSum = 0;
    // for (let i = 0; i < nums.length; i++) {
    //     currSum = currSum + nums[i];
    //     if (currSum > maxSum) {
    //         maxSum = currSum;
    //     }
    //     // if (currSum < 0) {
    //     //     currSum = 0
    //     // }
        
    // }
    // return maxSum;

    let a1 = 0
    let a2 = nums[0]
    nums.forEach((i,a) => {
      a1 = Math.max(i, a1 + i)
      a2 = Math.max(a2, a1)
    })
    return a2
};

// @lc code=end

