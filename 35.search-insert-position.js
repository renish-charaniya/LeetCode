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
    for (let i = 0; i < nums.length; i++) {

        if (nums[i] === target) return i

        if (nums[i] > target) {
            return i
        } else {
            return i + 1
        }

        // position = i


    }

    // return position

};

console.log(searchInsert([1, 3, 5, 6], 7));
// @lc code=end