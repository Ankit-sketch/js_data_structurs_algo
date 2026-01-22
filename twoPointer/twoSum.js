/* 
https://leetcode.com/problems/two-sum/description/
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]
a+b= target

*/
//brute force
let nums = [1, 2, 7, 11, 15];
let target = 9;
let answer = [];
for (let i = 0; i < nums.length - 1; i++) {
  for (let j = i + 1; j < nums.length; j++) {
    if (nums[i] + nums[j] == target) answer = [i, j];
  }
}
console.log(answer);
// optimized
// as i can not sort the array because if i did that then the indexes will change and i could not get the answer
// So use a hashmap

let obj = {};
let answer2 = [];
for (let i = 0; i < nums.length - 1; i++) {
  let difference = target - nums[i];
  //   console.log(obj[difference]);
  if (obj[difference]) {
    // console.log(obj[difference]);
    answer2 = [i, obj[difference]];
    break;
  } else {
    obj[nums[i]] = i;
  }
}
console.log(answer2);
