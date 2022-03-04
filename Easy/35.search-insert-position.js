/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let position = null
    let low = 0
    let high = nums.length
    while(low<high){
        const mid = low + Math.floor((high-low)/2)
        if (nums[mid] === target) {
            return mid
        }else if(nums[mid]>target){
            high=mid
        }else{
            low = mid+1
        }
    }
    position = low
    return position
    

};

console.log(searchInsert([1, 3, 5, 6], 7));
// @lc code=end