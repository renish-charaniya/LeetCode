/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// SOL - 1
// const twoSum = (nums, target) => {
//     let storage = {}
//     for (let [index,num] of nums.entries()) {
//         if(storage[num] !== undefined) return [storage[num], index];
//         storage[target-num] = index
        
//     }
// };

//  SOL - 2
const twoSum = (nums, target) => {
    let storage = {}
    for (let i = 0; i < nums.length; i++) {
        if (target-nums[i] in storage) return [storage[target-nums[i]], i]
        storage[nums[i]] = i
    }
}

// @lc code=end

