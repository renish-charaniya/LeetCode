/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = (s) => {
    
    const map = new Map()
    const stack = []

    map.set(')','(');
    map.set(']','[')
    map.set('}','{')

    for (let i = 0; i < s.length; i++) {
        const curr = s[i]
        const peek = stack[stack.length - 1]

        if(map.has(curr) && map.get(curr) === peek){
            stack.pop()
        }else{
            stack.push(curr)
        }
    }

    return stack.length === 0
};


// @lc code=end

