let height = [0, 2, 0, 3, 1, 0, 1, 3, 2, 1];
let answer = 0;
for (let i = 1; i < height.length - 1; i++) {
  let towardLeftPointer = i - 1;
  let towardRightPointer = i + 1;
  let leftMax = height[i];
  let rightMax = height[i];
  let currentElement = height[i];
  // n complexity for this loop
  while (towardLeftPointer >= 0) {
    if (height[towardLeftPointer] > leftMax) {
      leftMax = height[towardLeftPointer];
    }
    towardLeftPointer--;
  }
  // n complexity for this loop
  while (towardRightPointer < height.length) {
    if (height[towardRightPointer] > rightMax) {
      rightMax = height[towardRightPointer];
    }
    towardRightPointer++;
  }
  let min = Math.min(leftMax, rightMax);
  if (currentElement < min && currentElement != min) {
    answer = answer + (min - currentElement);
  }
}

console.log(answer);

//complexity
/* 
n * (n + n);
n * 2n;
n * n;
n ^ 2;
*/
