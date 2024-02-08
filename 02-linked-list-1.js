class Node {
    constructor(data) {
        this.head = {
            value: data,
            next: null
        }
        this.tail = this.head;
    }

    addNode(data) {
        let newNode = {
            value: data,
            next: null
        }
        this.tail.next = newNode;
        this.tail = newNode;
    }

    removeNode(value) {
        let currentNode = this.head;
        let previousNode = null;

        while (currentNode !== null) {
            if (currentNode.value === value) {
                // If the node to be removed is the head
                if (previousNode === null) {
                    this.head = currentNode.next;
                    // If the list becomes empty after removal, update the tail
                    if (this.head === null) {
                        this.tail = null;
                    }
                    return;
                }

                // If the node to be removed is the tail
                if (currentNode.next === null) {
                    this.tail = previousNode;
                    previousNode.next = null;
                    return;
                }

                // If the node to be removed is in the middle
                previousNode.next = currentNode.next;
                return;
            }

            previousNode = currentNode;
            currentNode = currentNode.next;
        }
    }
}

// Example usage:
let myList = new Node(1);
myList.addNode(2);
myList.addNode(3);
myList.addNode(4);

console.log("Before removal:", myList);
myList.removeNode(2);
console.log("After removal:", myList);
