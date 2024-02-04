let arr = [12,6,1,7,4,10,9,3]

let data = 6;
let i;

for(i=0; i<arr.length; i++){
    if(arr[i]==data){
        console.log(`${data} value is present at position ${i} in array`);
        break;
    }
}

if(i==arr.length){
    console.log(`${data} value is not present in array`);
}
