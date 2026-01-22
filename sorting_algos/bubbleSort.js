const arr = [5, 2, 7, 1, 8, 3, 9, 4, 6];

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
        if (arr[j + 1] < arr[j]) {
            let tempElement = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = tempElement;
        }
    }
}
console.log(arr)