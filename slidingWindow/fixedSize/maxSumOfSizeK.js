let arr = [2, 5, 1, 8, 2, 9, 1];

let pointerOne = 0;
let pointerTwo = 1;
let sum = arr[pointerOne];
let prevSum = sum;

while (pointerTwo < arr.length) {
    if ((pointerTwo - pointerOne) + 1 < 3) {
        prevSum = prevSum + arr[pointerTwo];
        pointerTwo++;
    } else {
        let newSum = prevSum + arr[pointerTwo];
        if (newSum > sum) sum = newSum;
        prevSum = newSum - arr[pointerOne];
        pointerOne++;
        pointerTwo++;
    }
}
console.log(sum)