let string = [];
let deletedChar = [];
let previousOperation = [];

function simpleTextEditor(op, w) {

    switch (op) {
        case 1:
            previousOperation.push(1);
            string.push(w);
            break;

        case 2:
            previousOperation.push(2);
            string = string.join("").split("");

            if(string.length !== 0){
                for (let i = 0; i < w; i++) {
                    deletedChar.push(string.pop());
                }
            }
            // else{
            //     console.log("Deletion is not possible.")
            // }
            break;

        case 3:
            let str = string.join("").split("");
            console.log(str[w - 1]);
            break;
        case 4:

            let lastOp = previousOperation.pop();
            let n = deletedChar.length;
            // console.log(lastOp)

            if(lastOp === 2){
                for(let i=0; i<n; i++){
                    string.push(deletedChar.pop());
                }
                previousOperation = [];
            }
            else if(lastOp === 1){
                string.pop();
            }

            break;

        default:
            console.log("Operation is not possible.");
            break;
    }
}

// simpleTextEditor(1, 'a');
// simpleTextEditor(1,'b');
// simpleTextEditor(1,'hello');
// simpleTextEditor(3,4)
// // simpleTextEditor(1, "bye");
// simpleTextEditor(4);
// simpleTextEditor(2,2);
// simpleTextEditor(4);
// simpleTextEditor(2,1);
// simpleTextEditor(4);
// // console.log(previousOperation, string, deletedChar)
// simpleTextEditor(1, 'a');
// simpleTextEditor(1, 'b');
// simpleTextEditor(2,2);
// simpleTextEditor(4);
// simpleTextEditor(5);
// console.log(previousOperation, string, deletedChar)
console.log(string)

z