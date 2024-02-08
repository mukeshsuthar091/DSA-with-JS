let queue = [];
let currentSize = queue.length;
let maxSize = 5;


function enqueue(data){
    if(currentSize >= maxSize){
        console.log(`Queue is full you can not add ${data}`);
    }
    else{
        queue[currentSize] = data;
        currentSize += 1;
    }
}

function dequeue(){
    if(!isEmpty()){
        for(let i=0; i<currentSize; i++){
            queue[i] = queue[i+1];
        }
        currentSize -= 1;
        queue.length = currentSize;
    }
    else{
        console.log("Queue is already full.");
    }
}


function front(){
    if(!isEmpty()){
        console.log(queue[0]);
    }
    else{
        console.log("Queue is already empty.");
    }
}

function rear(){
    if(!isEmpty()){
        console.log(queue[currentSize-1]);
    }
    else{
        console.log("Queue is already empty.");
    }
}

function isEmpty(){
    if(currentSize <= 0){
        return true;
    }
    else{
        return false;
    }
}

enqueue(10)
enqueue(20)
// enqueue(30)
// enqueue(40)
// enqueue(50)
// enqueue(60)

// dequeue()
// dequeue()
// dequeue()
// dequeue()
// dequeue()
// dequeue()

// front()
// rear()
console.log(queue);
