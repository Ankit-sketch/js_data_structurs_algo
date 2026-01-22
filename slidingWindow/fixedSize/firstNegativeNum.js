const arr = [12, -1, -7, 8, -15, 30, 16, 28];
let k = 3; // window size
let pointer1 = 0;
let pointer2 = 0;
let answer = [];
while (pointer2 < arr.length) {
    if (pointer2 < k - 1) pointer2++;
    else {
        pointer2++;
        getNegative(pointer1, pointer2, answer, arr);
        pointer1++;
    }
}
function getNegative(pointer1, pointer2, answer, arr) {
    while (pointer1 <= pointer2) {
        let element = arr[pointer1];
        if (element < 0) {
            answer.push(element);
            break;
        }
        pointer1++;
    }
}
console.log(answer);