function processData(t,w) {
    //Enter your code here
    // let lines = input.split("\n");
    // let count = +lines[0];
    // console.log(lines[1])
    let string;
    let deleteChar;
    
    for(let i=0; i<1; i++){
        // let ops = lines[i+1].split(" ");
        // let t = +ops[0];
        // let w = ops[1];
        
        string = [];
        
        switch(t){
            case 1:
                string.push(w);
                // console.log(string)
            break;
            
            case 2:
                string = string.join("");
                for(let i=0; i<w; i++){
                }
                break;
            case 3:

        }
    }

    string = string.join("");
    console.log(string)
} 


processData(1,'a')
processData(2,1)
// processData(1,'c')
// processData(1,'d')
