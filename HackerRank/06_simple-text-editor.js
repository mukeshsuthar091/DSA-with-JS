
function processData(input) {
    //Enter your code here
    let totalOps = +(input.splice(0,1));
    // console.log(input)
    
    let string = "abcde";
    let buffer = [];
    
    for(let i=0; i<totalOps; i++){
        let el = input[i];
        
        if(el.length>1){
            let ops = el.split(" ")[0];
            let item = el.split(" ")[1];

            if(ops==1){
                buffer.push(string);
                string = string+item;
            }
            if(ops==2){
                buffer.push(string);
                string = string.slice(0, string.length-item)
            }
            if(ops==3){
                console.log(string[item-1])
            }
            // console.log(ops, item)
        }
        else{
            string = buffer.pop();
        }
    }

    // console.log(string);
    // console.log(buffer);
} 


let input = ['7','1 fg','3 6','2 5','4','3 7','4','3 4'];
// let input = ['8','1 abc','3 3','2 3','1 xy','3 2','4','4','3 1']

processData(input);