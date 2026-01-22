const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(binarySearch(arr, 10));
function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length;
    while (start <= end) {
        let mid = parseInt(start + (end - start) / 2);
        if (target < arr[mid]) end = mid - 1;
        else if (target > arr[mid]) start = mid + 1;
        else {
            return mid;
        }
    }
    return -1;
}