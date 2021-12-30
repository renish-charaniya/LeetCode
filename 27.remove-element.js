/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */


// # Approach 1

var removeElement = function (nums, val) {

    if (!nums) return 0;


    let pointer = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != val) {
            nums[pointer] = nums[i]
            pointer++
        }
    }

    return pointer

};

// # Approach 2

// var removeElement = function (nums, val) {

//     if(!nums) return 0;


//     let count = 0
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] == val) {
//             nums.splice(i,1);
//             i--
//         }
//     }

//     return nums.length

// };

// @lc code=end