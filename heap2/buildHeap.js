let arr = [14, 15, 12, 22, 17, 20, 18, 24, 23, 30, 19];
// maxHeap
class BuildHeap {
  constructor() {
    this.heap = [];
    this.size = 0;
  }
  getSize() {
    return this.heap.length;
  }
  constructHeap(arr) {
    for (let i = 0; i < arr.length; i++) {
      this.insert(arr[i]);
      this.size++;
    }
  }
  insert(element) {
    this.heap.push(element);
    if (this.heap.length == 1) return;
    this.stepUp(this.heap.length - 1);
  }
  stepUp(elementPosition) {
    if (elementPosition == 0) return;
    let parent = Math.floor((elementPosition - 1) / 2);
    if (this.heap[parent] < this.heap[elementPosition]) {
      this.swap(parent, elementPosition);
      this.stepUp(parent);
    }
  }
  swap(parent, elementPosition) {
    let cachedElement = this.heap[parent];
    this.heap[parent] = this.heap[elementPosition];
    this.heap[elementPosition] = cachedElement;
  }
  delete() {
    let elementReplace = this.heap.pop();
    this.heap[0] = elementReplace;
    this.stepDown(0);
  }
  stepDown(elementPosition) {
    if (elementPosition >= this.heap.length - 1) return;
    let left = 2 * elementPosition + 1;
    let right = 2 * elementPosition + 2;
    let max = Math.max(this.heap[left], this.heap[right]);
    let correctIndex = left;
    if (max == this.heap[right]) correctIndex = right;
    if (max > this.heap[elementPosition]) {
      this.swap(correctIndex, elementPosition);
      this.stepDown(correctIndex);
    }
  }
  stepDownSort(elementPosition, size) {
    if (elementPosition >= size) return;
    let left = 2 * elementPosition + 1;
    let right = 2 * elementPosition + 2;
    let largest = left;
    if (left < size && this.heap[left] > this.heap[largest]) {
      largest = left;
    }
    if (right < size && this.heap[right] > this.heap[largest]) {
      largest = right;
    }
    if (largest != elementPosition) {
      this.swap(largest, elementPosition);
      this.stepDown(largest, z);
    }
  }
  sort(incomingSize) {
    /*
    *** 
    simple method is to delete the elemnt and store it to the new array, but i will not increase the space complexity and play with indexes
    ***
   */
    if (incomingSize == 0) return; //base case for recursion
    let firstElement = this.heap[0];
    this.heap[0] = this.heap[incomingSize];
    this.heap[incomingSize] = firstElement;
    this.stepDownSort(0, incomingSize - 1);
    this.size--;
    this.sort(incomingSize - 1);
  }
}
const maxHeap = new BuildHeap();
maxHeap.constructHeap(arr);
// maxHeap.delete();
maxHeap.sort(maxHeap.getSize() - 1);
console.log(maxHeap.heap);

digit88;
