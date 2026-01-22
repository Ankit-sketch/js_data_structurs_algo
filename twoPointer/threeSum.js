// https://leetcode.com/problems/3sum/description/
let nums = [-1, 0, 1, 2, -1, -4];
nums.sort();
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
      answer.push([nums[i], nums[leftPointer], nums[rightPointer]]);
      while (leftPointer < rightPointer && leftPointer == ++leftPointer)
        leftPointer++;
      while (leftPointer < rightPointer && rightPointer == --rightPointer)
        rightPointer--;
    }
  }
}
console.log(answer);
