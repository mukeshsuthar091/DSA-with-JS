class Node{
    constructor(data){
        this.head = {
            value: data,
            next: null
        }
        this.tail = this.head;
        this.size = 1;
    }  
    
    addNode(data){
        let newNode = {
            value: data,
            next: null
        }
        this.tail.next = newNode;
        this.tail = newNode;
    }
}

let list = new Node(100);
list.addNode(200);
list.addNode(300);
list.addNode(400);

console.log(list)