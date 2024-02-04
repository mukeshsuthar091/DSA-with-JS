let arr = [1,2,3,4,3,2,1];
let repeatValues = {};

for(let value of arr){

    let count = 1;
    if(value in repeatValues){
        repeatValues = {
            ...repeatValues,
            [value]: ++count,
        };
    }
    else{
        repeatValues = {
            ...repeatValues, 
            [value]: count,
        };
    }
}

for(let i in repeatValues){
    if(repeatValues[i] === 1){
        console.log(i);
    }
}