// class MaxHeap {
//     constructor() {
//         this.list = [];
//     }

//     insertNode(value) {
//         this.list.push(value);
//         this.HeapifyUp();
//     }

//     HeapifyUp() {

//         let currentIndex = this.list.length - 1;

//         while (currentIndex > 0) {
//             let parentIndex = Math.floor(currentIndex / 2)

//             if (this.list[parentIndex] < this.list[currentIndex]) {

//                 [this.list[parentIndex], this.list[currentIndex]] = [this.list[currentIndex], this.list[parentIndex]]
//                 currentIndex = parentIndex
//             }
//             else {
//                 return;
//             }

//         }
//     }

//     removeNode() {
//         if (this.list.length === 0) {
//             return null;
//         }

//         if (this.list.length === 1) {
//             return this.list.pop();
//         }

//         let min = this.list[0]
//         this.list[0] = this.list.pop();
//         this.HeapifyDown();

//         return min;
//     }

//     HeapifyDown() {
//         let currentIndex = 0;

//         while (true) {
//             const leftChildIndex = 2 * currentIndex + 1;
//             const rightChildIndex = 2 * currentIndex + 2;
//             let maxIndex = currentIndex;

//             if (
//                 leftChildIndex < this.list.length &&
//                 this.list[leftChildIndex] > this.heap[maxIndex]
//             ) {
//                 maxIndex = leftChildIndex;
//             }

//             if (
//                 rightChildIndex < this.list.length &&
//                 this.list[rightChildIndex] > this.list[maxIndex]
//             ) {
//                 maxIndex = rightChildIndex;
//             }

//             if (maxIndex !== currentIndex) {
//                 // Swap the current element with the larger child
//                 [this.list[currentIndex], this.list[maxIndex]] = [
//                     this.list[maxIndex],
//                     this.list[currentIndex],
//                 ];

//                 currentIndex = maxIndex;
//             } else {
//                 break;
//             }
//         }
//     }
// }

// let heap = new MaxHeap();

// // heap.insertNode(50);
// // heap.insertNode(30);
// // heap.insertNode(40);
// // heap.insertNode(60);
// // heap.insertNode(10);
// // heap.insertNode(5);
// // heap.insertNode(20);
// // heap.insertNode(30);
// heap.insertNode(20);
// heap.insertNode(30);
// heap.insertNode(10);
// heap.insertNode(40);
// heap.insertNode(15);

// heap.removeNode();
// console.log(heap)


class MaxHeap {
    constructor() {
      this.heap = [];
    }
  
    // Insert a value into the max heap
    insert(value) {
      this.heap.push(value);
      this.heapifyUp();
    }
  
    // Remove and return the maximum value from the max heap
    extractMax() {
      if (this.heap.length === 0) {
        return null;
      }
  
      const max = this.heap[0];
      const lastElement = this.heap.pop();
  
      if (this.heap.length > 0) {
        this.heap[0] = lastElement;
        this.heapifyDown();
      }
  
      return max;
    }
  
    // Heapify up after insertion
    heapifyUp() {
      let currentIndex = this.heap.length - 1;
  
      while (currentIndex > 0) {
        const parentIndex = Math.floor((currentIndex - 1) / 2);
  
        if (this.heap[currentIndex] > this.heap[parentIndex]) {
          // Swap the current element with its parent
          [this.heap[currentIndex], this.heap[parentIndex]] = [
            this.heap[parentIndex],
            this.heap[currentIndex],
          ];
  
          currentIndex = parentIndex;
        } else {
          break;
        }
      }
    }
  
    // Heapify down after extraction
    heapifyDown() {
      let currentIndex = 0;
  
      while (true) {
        const leftChildIndex = 2 * currentIndex + 1;
        const rightChildIndex = 2 * currentIndex + 2;
        let maxIndex = currentIndex;
  
        if (
          leftChildIndex < this.heap.length &&
          this.heap[leftChildIndex] > this.heap[maxIndex]
        ) {
          maxIndex = leftChildIndex;
        }
  
        if (
          rightChildIndex < this.heap.length &&
          this.heap[rightChildIndex] > this.heap[maxIndex]
        ) {
          maxIndex = rightChildIndex;
        }
  
        if (maxIndex !== currentIndex) {
          // Swap the current element with the larger child
          [this.heap[currentIndex], this.heap[maxIndex]] = [
            this.heap[maxIndex],
            this.heap[currentIndex],
          ];
  
          currentIndex = maxIndex;
        } else {
          break;
        }
      }
    }
  }
  
  // Example usage:
  const maxHeap = new MaxHeap();
  
  maxHeap.insert(10);
  maxHeap.insert(5);
  maxHeap.insert(15);
  maxHeap.insert(3);
  maxHeap.insert(7);
  
  console.log(maxHeap.heap); // Output: [15, 7, 10, 3, 5]
  
  console.log(maxHeap.extractMax()); // Output: 15
  console.log(maxHeap.heap); // Output: [10, 7, 5, 3]
  