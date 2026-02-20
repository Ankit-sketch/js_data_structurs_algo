// https://leetcode.com/problems/3sum/description/
let nums = [-1, 0, 1, 2, -1, -4];
nums.sort((a, b) => a - b); // always remember that when you are using sort method then we and the given array contain number then it will be compulsory to write the function (a,b) => a-b because if you don't write it the array of number will be automatically converted to strings and sorting will happen wrong, there is no need to write this only if the array contains the strings like ['c', 't', 'dd']

let answer = [];
// [-4, -1, -1, 0, 1, 2]
for (let i = 0; i < nums.length - 2; i++) {
  if (i > 0 && nums[i] == nums[i - 1]) continue;
  let leftPointer = i + 1;
  let rightPointer = nums.length - 1;
  let target = -nums[i];
  while (leftPointer < rightPointer) {
    let sum = nums[leftPointer] + nums[rightPointer];
    if (sum < target) leftPointer++;
    else if (sum > target) rightPointer--;
    else {
      while (
        leftPointer < rightPointer &&
        nums[leftPointer] == nums[leftPointer + 1]
      )
        leftPointer++;
      while (
        leftPointer < rightPointer &&
        nums[rightPointer] == nums[rightPointer - 1]
      )
        rightPointer--;
      answer.push([nums[i], nums[leftPointer], nums[rightPointer]]);
      leftPointer++;
      rightPointer--;
    }
  }
}
console.log(answer);
