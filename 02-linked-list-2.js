class Node{
    constructor(data){
        this.head = {
            value: data,
            next: null
        }
        this.tail = this.head;
        // this.size = 1;
    }

    addNode(data){
        let newNode = {
            value: data,
            next: null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        // this.size += 1;
    }

    traversing(){
        let counter = 1;
        let currentNode = this.head;
        while(counter < this.size){
            console.log(currentNode)
            currentNode = currentNode.next;
            // counter += 1;
        }
    }

    deleteNode(pos){
        let counter = 1;
        let lead = this.head;

        if(pos == 1){
            this.head = this.head.next;
        }
        else{
            while(counter < pos-1){
                lead = lead.next;   
                counter+=1;
            }
            let nextNode = lead.next.next;
            lead.next = nextNode;
            // console.log(lead);
        }
    }


    insertNode(index, value){
        let counter = 1;
        let lead = this.head; 

        if(counter==index){
            let newNode = {
                value: value,
                next: this.head
            }

            this.head = newNode
        }
        else{
            while(counter < index-1){
                counter++;
                lead = lead.next;
            }
            let nextNode = lead.next
            let newNode = {
                value: value,
                next: nextNode
            }
            // console.log(newNode)
            lead.next = newNode
        }
        
    }

    // updateNode(pos, value){
    //     let counter = 0;
    //     let currentNode = this.head;
    //     while(counter < this.size){
    //         // console.log(currentNode)
    //         if(counter==pos){
    //             currentNode.value = value
    //         }
    //         currentNode = currentNode.next;
    //         counter += 1;
    //     }
    // }

}

let n1 = new Node(100);
n1.addNode(200)
n1.addNode(300)
n1.addNode(400)
n1.addNode(500)

// n1.traversing();
// n1.deleteNode(3);
// n1.insertNode(1,4000)
// n1.insertNode(1,4000)

console.log(n1)





