let stack = []
let currentSize = stack.length;
let max=6;

function push(data){
    if(currentSize>=max){
        console.log(`Stack is full you can not add ${data}`);
    }
    else{
        stack[currentSize] = data;
        currentSize += 1;
    }
}

function pop(){
    if(currentSize > 0){
        currentSize -= 1;
        stack.length = currentSize;
    }
    else{
        console.log("Stack is already full.");
    }
}

push(12)
push(22)
push(32)
push(42)
push(52)
push(62)
push(72)

pop()
pop()
pop()

console.log(stack);