// this sorting algorithm we will use when we a specific range is given. Like number from [0 to n] ore [1 to n] distinct numbers or something like that.

// one more thing is to remember is that these type of questions which says something iike range is given from [0 to n] or [1 to n] then this formula (n(n+1))/2 we can use as well.

/*
Question => 

    A useful and fun to apply algorithm but talked about very less as per my observation.
    Given that the elements in a given sequence are in a range, say [1, n], we can apply Cyclic sort and sort our array in linear time.

    The very essence of the algorithm is that, we put the elements at the index where they are supposed to be, but keep in mind that don't just directly put element in the correct index, means if you know that what is the correct index of your element, then go to that particular index and check if in that particular index corrcet element is already present or not. Why iam saying this? Beacause if you dont go to that index and check if element is already present or not and given array has repeated elements [4,3,2,7,8,2,3,1] then it will be an infinite loop.

    Say we are given an array [5, 3, 1, 2, 4], the array after sorting will be [1, 2, 3, 4, 5].

*/

let arr = [5, 3, 1, 2, 4];

function cyclicSort(arr) {
  let pointer = 0;
  while (pointer < arr.length) {
    let correctPosition = arr[pointer] - 1;
    if (arr[correctPosition] != arr[pointer])
      swap(arr, correctPosition, pointer);
    else pointer++;
  }
  return arr;
}
function swap(arr, first, second) {
  let cached = arr[first];
  arr[first] = arr[second];
  arr[second] = cached;
}
const answer = cyclicSort(arr);
console.log(answer);
