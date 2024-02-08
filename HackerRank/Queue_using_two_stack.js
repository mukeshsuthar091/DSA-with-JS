class Queue{
    constructor(){
        this.stack1 = [];
        this.stack2 = [];        
    }

    enqueue(value){
        this.stack1.push(value);
    }

    dequeue(){
        if(this.stack2.length === 0){
            while(this.stack1.length !== 0){
                this.stack2.push(this.stack1.pop());
            }
        }

        return this.stack2.pop()
    }
}

let q1 = new Queue();
q1.enqueue(1);
q1.enqueue(2);
q1.enqueue(3);
console.log(q1.dequeue());
q1.enqueue(4);
q1.enqueue(5);
console.log(q1.dequeue());
console.log(q1.dequeue());
console.log(q1.dequeue());
console.log(q1.dequeue());
