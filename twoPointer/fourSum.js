let nums = [1, 0, -1, 0, -2, 2];
// let target = 0;
let answer = [];
// let tempAnswer = [];
// Output: [[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]];  b+c = -a
// a+b+c+d = 0 => b+c+d = -a
nums.sort((a, b) => a - b);
for (let k = 0; k < nums.length - 3; k++) {
  let mainTarget = -nums[k];
  if (k > 0 && nums[k] == nums[k - 1]) continue;
  for (let i = k + 1; i < nums.length - 2; i++) {
    if (i > k + 1 && nums[i] == nums[i - 1]) continue;
    let target = -nums[i] + mainTarget;
    let leftPointer = i + 1;
    let rightPointer = nums.length - 1;
    while (leftPointer < rightPointer) {
      let sum = nums[leftPointer] + nums[rightPointer];
      if (sum > target) rightPointer--;
      else if (sum < target) leftPointer++;
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
        answer.push([nums[k], nums[i], nums[leftPointer], nums[rightPointer]]);
        leftPointer++;
        rightPointer--;
      }
    }
  }
}

console.log(answer);
