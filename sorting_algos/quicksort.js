let arr = [9, 7, 8, 5, 10, 1];
// implementing quicksort
function partition(arr, start, end) {
    let pivotElement = arr[end];
    let pointer = start;
    for (let i = start; i <= end; i++) {
        if (arr[i] <= pivotElement) {
            let temp = arr[i];
            arr[i] = arr[pointer];
            arr[pointer] = temp;
            pointer++;
        }
    }
    return pointer - 1;
}

function quicksort(arr, start, end) {
    if (start >= end) return;
    let p = partition(arr, start, end);
    quicksort(arr, start, p - 1);
    quicksort(arr, p + 1, end);
}

quicksort(arr, 0, arr.length - 1)
console.log(arr);