function isBalanced(s) {
    // Write your code here
    // return s.length
    
    while(true){
        let originalLength = s.length;
        
        s = s.replace("[]", "");        
        s = s.replace("{}", "");        
        s = s.replace("()", "");        
        
        let newLength = s.length;
        
        if(newLength == originalLength){
            break;
        }
    }
    return s.length == 0 ? "Yes" : "No";
}

console.log(isBalanced('{[()]}'));