// let arr = [1,2,3,4,3,2,1];
let arr = [18, 49, 15, 30, 56, 20, 49, 67, 82, 69, 84, 63, 93, 87, 66, 17, 38, 32, 17, 32, 94, 66, 67, 63, 48, 64, 84, 82, 87, 18, 79, 64, 79, 15, 71, 94, 59, 5, 22, 59, 4, 98, 81, 4, 98, 73, 69, 88, 30, 81, 48, 56, 71, 20, 93, 22, 73, 5, 88];

let reapetedElement = {};

for(let i=0; i<arr.length; i++){
    let count = 1;
    if(arr[i] in reapetedElement){
        reapetedElement = {
            ...reapetedElement,
            [arr[i]]: count = count+1,
        };
    }
    else{
        reapetedElement = {
            ...reapetedElement,
            [arr[i]]: count,
        };
    }
}

for(let i in reapetedElement){
    if(reapetedElement[i] === 1){
        console.log(i)
    }
}
// console.log(reapetedElement)

