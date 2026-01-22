let arr = [2, 5, 1, 8, 2, 9, 1];
let givenSum = 6;

let leftIndex = 0;
let rightIndex = 0;
let prevSum = 0;
let length = 0;
while (rightIndex < arr.length) {
    console.log(rightIndex)
    let sum = prevSum + arr[rightIndex];
    if (sum < givenSum) {
        prevSum = sum;
        rightIndex++;
    }
    else if (sum == givenSum) {
        console.log(rightIndex - leftIndex + 1)
        length = Math.max(length, rightIndex - leftIndex + 1);
        leftIndex++;
    } else {
        prevSum = prevSum - arr[rightIndex];
        rightIndex++;
    }
}
console.log(length);