function superDigit(n, k) {
    // Write your code here

    // let arr = String(n).split("").map(Number)
    
    let sum=0;  
    for(let i=0; i<n.length; i++){
        sum += parseInt(n[i]);
    }
    
    if(k!= 1){
        return superDigit(String(sum), n.length);
    }
    else{
        return sum;
    }
}

console.log(superDigit("123",3))
// console.log(superDigit(123456,3))

