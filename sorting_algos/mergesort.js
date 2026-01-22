const arr = [8, 3, 4, 12, 5, 6];

function mergeSort(arr, start, end) {
  if (end <= start) return;
  const mid = parseInt(start + (end - start) / 2);
  console.log(mid);
  mergeSort(arr, start, mid);
  mergeSort(arr, mid + 1, end);
  merge(arr, start, mid, end);
}
function merge(arr, start, mid, end) {
  let i = start;
  let j = mid + 1;
  let sortedArray = [];
  while (i <= mid && j <= end) {
    if (arr[i] <= arr[j]) {
      sortedArray.push(arr[i]);
      i++;
    }
    if (arr[i] > arr[j]) {
      sortedArray.push(arr[j]);
      j++;
    }
  }
  // put remainng elements in the Array
  if (i <= mid) {
    for (let k = i; k <= mid; k++) {
      sortedArray.push(arr[k]);
    }
  }
  if (j <= end) {
    for (let l = j; l <= mid; l++) {
      sortedArray.push(arr[l]);
    }
  }
  // replace the existing Array
  for (let m = 0; m < sortedArray.length; m++) {
    arr[start] = sortedArray[m];
    start++;
  }
}
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
mergeSort(arr, 0, arr.length - 1);
console.log(arr);
