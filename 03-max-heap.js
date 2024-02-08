class MaxHeap{
    constructor(){
        this.heap = [];
    }

    insert(val){
        this.heap.push(val)
        this.heapifyUp();
    }

    heapifyUp(){
        let currentIndex = this.heap.length - 1;

        while(currentIndex > 0){
            let parentIndex = Math.floor((currentIndex-1)/2);

            if(this.heap[currentIndex] > this.heap[parentIndex]){
                [this.heap[currentIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currentIndex]];
                currentIndex = parentIndex;
            }
            else{
                break;
            }
        }
    }

    removeMax(){
        if(this.heap.length === 0){
            return null;
        }
        if(this.heap.length === 1){
            return this.heap.pop();
        }

        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return max;
    }

    heapifyDown(){
        let currentIndex = 0;

        while(true){
            const leftChildIndex = 2 * currentIndex + 1;
            const rightChildIndex = 2 * currentIndex + 2;
            let maxChildIndex = null;

            if(leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[currentIndex]){
                    maxChildIndex = leftChildIndex;
            }

            if(rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[currentIndex]){
                if (maxChildIndex === null || this.heap[rightChildIndex] > this.heap[maxChildIndex]) {
                    maxChildIndex = rightChildIndex;
                }
            }

            if (maxChildIndex !== null) {
                // Swap the current element with the larger child
                [this.heap[currentIndex], this.heap[maxChildIndex]] = [this.heap[maxChildIndex], this.heap[currentIndex]];
                currentIndex = maxChildIndex;
            } else {
                break;
            }
        }
    }
}

let heap = new MaxHeap();

heap.insert(50);
heap.insert(45);
heap.insert(40);
heap.insert(30);
heap.insert(10);
heap.insert(5);
heap.insert(20);
heap.insert(60);

// heap.insert(10)
// heap.insert(5)
// heap.insert(20)
// heap.insert(15)


console.log(heap.heap)
console.log(heap.removeMax());
console.log(heap.removeMax());
console.log(heap.heap)


