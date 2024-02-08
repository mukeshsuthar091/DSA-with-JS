// function cookies(k, A) {
//     A.sort((a,b)=> a-b);
//     let ops = 0;
//     while(A[0]<k && A.length>1){
//         ops++;
        
//         let cal = 1*A[0] + 2*A[1];
//         A.splice(0,2);
//         A.push(cal);
//         A.sort((a,b)=> a-b);
//         console.log(A)
//     }

//     if(A.length === 1){
//         return -1;
//     }
//     else{
//         return ops;
//     }
// }

// let A = [2,7,3,6,4,6];
// console.log(cookies(9, A));
// -----------------------------------------------


// Implementation of MinHeap data structure
class MinHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }
    
    insert(value) {
        this.heap.push(value);
        this.bubbleUp(this.heap.length - 1);
    }

    bubbleUp(index) {
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index] < this.heap[parentIndex]) {
                // Swap if the current node is smaller than its parent
                [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    extractMin() {
        if (this.size() === 0) return null;
        if (this.size() === 1) return this.heap.pop();
        
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapify(0);
        return min;
    }
    
    heapify(index) {
        let smallest = index;
        const left = 2 * index + 1;
        const right = 2 * index + 2;
        const length = this.size();
        
        if (left < length && this.heap[left] < this.heap[smallest]) {
            smallest = left;
        }

        if (right < length && this.heap[right] < this.heap[smallest]) {
            smallest = right;
        }

        if (smallest !== index) {
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            this.heapify(smallest);
        }
    }
    
    peek() {
        if (this.size() === 0) return null;
        return this.heap[0];
    }
}

function cookies(k, A) {
    // Initialize a priority queue (min heap)
    let heap = new MinHeap();

    // Add all the elements of A to the heap
    for (let i = 0; i < A.length; i++) {
        heap.insert(A[i]);
    }

    let operations = 0;

    // Continue until the minimum sweetness cookie in the heap is greater than or equal to k
    while (heap.size() > 0 && heap.peek() < k) {
        // If there's only one cookie and its sweetness is less than k, we can't make a new cookie
        if (heap.size() === 1) {
            return -1;
        }

        // Combine the sweetness levels of the two least sweet cookies
        let leastSweet1 = heap.extractMin();
        let leastSweet2 = heap.extractMin();
        let newSweetness = leastSweet1 + 2 * leastSweet2;

        // Insert the new cookie back into the heap
        heap.insert(newSweetness);

        // Increment the number of operations
        operations++;
    }

    return operations;
}

let A = [2,7,3,6,4,6];
console.log(cookies(9, A));
