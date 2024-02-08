let dequeue = []
let front = dequeue.length
let back = dequeue.length

// console.log(front, back)

function addBack(data){
    dequeue[back] = data;
    back+=1;
}

function removeBack(){
    if(back > 0){
        back-=1;
        dequeue.length = back;
    }
    else{
        console.log("Queue is already empty.")
    }
}

function addFront(data){
    if(back > 0 ){
        back+=1;
        dequeue.length = back;

        for(let i=back-1; i>0; i--){
            // console.log(i)
            dequeue[i] = dequeue[i-1];
        }

        dequeue[front] = data;
    }
    else{
        addBack(data)
    }
}

function removeFront(){
    if(back > 0){
        for(let i=0; i<back; i++){
            dequeue[i] = dequeue[i+1];
        }
        back-=1;
        dequeue.length = back;
    }
    else{
        console.log("Queue is already empty.");
    }
}

addBack(12);
addBack(22);

removeBack();
// removeBack();

addFront(3);
addFront(4);
// removeBack();

// addFront(6);
// addFront(16);
// addFront(14);

removeFront()
removeFront()
// removeFront()
// removeFront()

// addBack(25)

console.log(front, back)
console.log(dequeue);
