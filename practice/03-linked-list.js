class List {
    constructor(nodeData) {
        this.head = {
            value: nodeData,
            next: null
        };
        this.tail = this.head;
        this.size = 1;
    }

    appendNode(nodeData) {
        let newNode = {
            value: nodeData,
            next: null
        };

        if (this.head === null) {
            this.head = newNode;
            this.tail = this.head;
            this.size += 1;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
            this.size += 1;
        }
    }

    traversing() {
        let counter = 1;
        let currentNode = this.head;

        while (counter <= this.size) {
            console.log(currentNode);
            currentNode = currentNode.next;
            counter++;
        }
    }

    removeNode(index) {
        let counter = 1;
        let lead = this.head;

        if(counter===index){
            this.head = this.head.next;
            this.size -= 1;
        }else{
            while(counter<index-1){
                lead = lead.next;
                counter += 1;
            }
            let nextNode = lead.next.next;
            lead.next = nextNode;
            this.size -= 1;    
        }
    }

    insertNode(index, nodeData){
        let counter = 1;
        let lead = this.head;

        if(counter===index){
            this.head = {
                value: nodeData,
                next: this.head
            };
            this.size += 1;
        }
        else{
            while(counter<index-1){
                lead = lead.next;
                counter += 1;
            }

            let newNode = {
                value: nodeData,
                next: lead.next
            };
            lead.next = newNode;
            this.size += 1;
        }
        
    }
}

let list = new List(100);
list.appendNode(200);
list.appendNode(300);
list.appendNode(400);
list.appendNode(500);
list.appendNode(600);
// list.traversing();
// console.log(list)

// list.removeNode(2)
// list.removeNode(2)

// list.insertNode(3, 4000);
// list.insertNode(4, 5000);
console.log(list)