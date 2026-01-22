const arr = [5, 2, 7, 1, 8, 3, 9, 4, 6];
function swap(arr, index1, index2) {
    let tempElement = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tempElement;
}
function selectionSort(arr) {
    for (let i in arr) {
        let smallest = i;
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[smallest]) smallest = j;
        }
        swap(arr, i, smallest);
    }
}
selectionSort(arr);
console.log(arr);

