let arr = [14, 15, 12, 22, 17, 20, 18, 24, 23, 30, 19];

class BuildHeap {
    constructor(arr) {
        this.arr = arr;
    }
    // this is a traditional appraoch
    buildTraditionalHeap() {
        let start = 0;
        while (start < this.arr.length) {
            this.heapifyUp(start);
            start++;
        }
    }
    heapifyUp(lastIndex) {
        if (lastIndex <= 0) return;
        let parent = Math.floor((lastIndex - 1) / 2);
        if (this.arr[lastIndex] > this.arr[parent]) {
            this.swap(parent, lastIndex);
            this.heapifyUp(parent);
        }
    }
    swap(firstIndex, secondIndex) {
        let cache = this.arr[firstIndex];
        this.arr[firstIndex] = this.arr[secondIndex];
        this.arr[secondIndex] = cache;
    }
    buildOptimizesHeap() {
        let n = this.arr.length;
        for (let i = Math.floor(n / 2 - 1); i >= 0; i--) {
            console.log(i)
            this.heapifyDown(i);
        }
    }
    heapifyDown(currentIndex) {
        3
        let largest = currentIndex; //3
        let left = 2 * currentIndex + 1;
        let right = 2 * currentIndex + 2;
        if (this.arr.length > left && this.arr[left] > this.arr[largest]) largest = left;
        if (this.arr.length > right && this.arr[right] > this.arr[largest]) largest = right;
        if (largest != currentIndex) {
            this.swap(currentIndex, largest);
            this.heapifyDown(largest);
        }
    }
}

const buildHeap = new BuildHeap(arr);
console.log(buildHeap.arr, "buildHeap");
// buildHeap.buildTraditionalHeap();
buildHeap.buildOptimizesHeap();
console.log(buildHeap.arr, "heap");