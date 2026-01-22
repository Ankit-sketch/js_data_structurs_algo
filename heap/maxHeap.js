class MaxhHeap {
    constructor() {
        this.maxHeap = [];
        this.size = 0;
        // capacity = 0;
    }
    add(element) {
        // first we need to make sure that to handle edge case
        if (this.size == 0) {
            this.maxHeap.push(element);
        } else {
            this.maxHeap.push(element);
            let index = this.size;
            // let parent = Math.floor((index - 1) / 2);
            // now compare the elements and put max element at top
            while (index > 0 && this.maxHeap[Math.floor((index - 1) / 2)] < this.maxHeap[index]) {
                // swap
                let cache = this.maxHeap[Math.floor((index - 1) / 2)];
                this.maxHeap[Math.floor((index - 1) / 2)] = this.maxHeap[index];
                this.maxHeap[index] = cache;
                index = Math.floor((index - 1) / 2);
            }
        }
        this.size++;
    }
    delete() {
        //always be a first element
        this.maxHeap[0] = this.maxHeap[this.maxHeap.length - 1];
        this.maxHeap.pop();
        this.size--;
        this.heapify(0)
        // now write the heapify logic
    }
    heapify(index) {
        let largest = index;
        let left = 2 * index + 1;
        let right = 2 * index + 2;
        if (this.size > left && this.maxHeap[left] > this.maxHeap[largest]) largest = left;
        if (this.size > right && this.maxHeap[right] > this.maxHeap[largest]) largest = right;
        if (largest != index) {
            this.swap(index, largest);
            this.heapify(largest);
        }
        return
    }
    swap(firstIndex, secondIndex) {
        let cache = this.maxHeap[firstIndex];
        this.maxHeap[firstIndex] = this.maxHeap[secondIndex];
        this.maxHeap[secondIndex] = cache;
    }
}

const heap = new MaxhHeap();
heap.add(20);
heap.add(5);
heap.add(2);
heap.add(9);
heap.add(40);
heap.add(75);
heap.add(90);
heap.delete();
heap.delete();
console.log(heap);

//                                           998
//                     ┌──────────────────────┴──────────────────────┐
//                   997                                             988
//            ┌───────┴───────┐                               ┌───────┴───────┐
//          990               977                           925               960
//       ┌───┴───┐         ┌───┴───┐                     ┌───┴───┐         ┌───┴───┐
//     890       920     939       927                 917       731     648       758
//   ┌─┴─┐     ┌─┴─┐    ┌─┴─┐     ┌─┴─┐               ┌─┴─┐     ┌─┴─┐    ┌─┴─┐     ┌─┴─┐
// 844  833  874  725  889  583  909  834           672  626   522 689  609 645    728 712