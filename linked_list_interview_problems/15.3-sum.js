/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
      
    for (let i = 0; i < nums.length - 2; i++) {
      let num1 = nums[i];

      for (let j = i + 1; j < nums.length - 1; j++) {
        let num2 = nums[j];

        for (let k = j + 1; k < nums.length; k++) {
          let num3 = nums[k];

          if (num1 + num2 + num3 === 0) {
            return [i, j, k];
          }
        }
      }
    }
};

