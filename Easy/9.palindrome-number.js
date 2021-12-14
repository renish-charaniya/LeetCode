/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = (x) => {
    let reversed  = Number(x.toString().split('').reverse().join(''))
    return (x === reversed)
};
// @lc code=end

