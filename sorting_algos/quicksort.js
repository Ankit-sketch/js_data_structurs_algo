let arr = [9, 7, 8, 5, 10, 1];
// implementing quicksort

function partition(arr, start, end) {
  // this appraoch of partioning is very simple, in other tutorial it is a very big implementation but this is the best ans short so use this. his approach is taken from coder army youtube tutorial.
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
  // you will ask why pointer - 1 ? Because, at last iteration the pivot element will be in its correct position, and pointer++ wil move that pointer ahead as written inside if condition logic, and loop will also end there. Now the right position of our pivot element which was at last at very beginning, will be now pointer - 1;
}

function quicksort(arr, start, end) {
  if (start >= end) return;
  let p = partition(arr, start, end);
  quicksort(arr, start, p - 1);
  quicksort(arr, p + 1, end);
}

quicksort(arr, 0, arr.length - 1);
console.log(arr);
