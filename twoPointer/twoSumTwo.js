//leetcode.com/problems/two-sum-ii-input-array-is-sorted/
// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

// The tests are generated such that there is exactly one solution. You may not use the same element twice.

// Your solution must use only constant extra space.
// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

let numbers = [2, 7, 11, 15];
let target = 9;

function bruteForce(numbers, target) {
  let answer = [0, 0];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] == target) answer = [i, j];
    }
  }
  console.log("bruteForce", answer);
  // n^2 complexity
}

function betterApproach(numbers, target) {
  // as you know the array is sorted, so i should directly click into your mind that we or we can use two pointer approach here for optomal solution
  let answer = [0, 0];
  let leftPointer = 0;
  let rightPointer = numbers.length - 1;
  while (leftPointer < rightPointer) {
    let sum = numbers[leftPointer] + numbers[rightPointer];
    if (sum > target) rightPointer--;
    else if (sum < target) leftPointer++;
    else {
      answer = [leftPointer, rightPointer];
      break;
    }
  }
  console.log("betterApproach", answer);
  // n complexity
}

var twoSum = function (numbers, target) {
  bruteForce(numbers, target);
  betterApproach(numbers, target);
};

twoSum([...numbers], target);
