/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let newStr = s.replace(/[^a-z0-9]/gi,"").toLowerCase();
    return newStr.split('').reverse().join('') === newStr? true:false
};
// @lc code=end

