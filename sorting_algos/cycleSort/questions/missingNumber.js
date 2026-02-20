/*
    https://leetcode.com/problems/missing-number/description/
    268. Missing Number
    Given an numsay nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the numsay.
    Input: nums = [3,0,1]
    Output: 2
 */

let nums = [3, 0, 1]; //[0,1,3]

// Solution 1 => cyclic sort
function cyclicSort(nums) {
  let pointer = 0;
  while (pointer < nums.length) {
    let correctPosition = nums[pointer];
    if (correctPosition > nums.length - 1) pointer++;
    else swap(nums, correctPosition, pointer);
  }
  // it is sorted now check which element is missing
  return missingNumer(nums);
}
function missingNumer(nums) {
  let answer;
  for (let i = 0; i < nums.length; i++) {
    // check if number is at its correct position or not
    if (nums[i] != i) answer = i;
  }
  return answer;
}
function swap(nums, first, second) {
  let cached = nums[first];
  nums[first] = nums[second];
  nums[second] = cached;
}
const answer = cyclicSort([...nums]);
console.log(answer); //2

// Solution 2 => The number formula (n(n+1))/2
function totalSum(nums) {
  // formula (n(n+1))/2
  let expectedSum = (nums.length * (nums.length + 1)) / 2; //6
  // now sum of given numsay
  let sum = 0; // 4
  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
  }
  const difference = expectedSum - sum;
  return difference;
}
const answer2 = totalSum([...nums]);
console.log(answer2);
