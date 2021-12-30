/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Implement strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {

    if (haystack == null || needle == null) return -1
    if (haystack === needle || needle == "") return 0

    for (let i = 0; i < haystack.length - needle.length + 1; i++) {
        if (haystack.substring(i, i + needle.length) === needle) {
            return i
        }

    }

    return -1

};

console.log(strStr("hello","ll"));
// @lc code=end