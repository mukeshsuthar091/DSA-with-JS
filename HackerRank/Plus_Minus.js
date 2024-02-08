// let arr = [-4, 3, -9, 0, 4, 1];
let arr = [1,1,0,-1,-1];

function plusMinus(arr){
    let minusValue = 0;
    let plusValue = 0;
    let zeroValue = 0;
    let size = arr.length;

    for(let i of arr){
        if(i>0){
            plusValue += 1;
        }
        else if(i<0){
            minusValue += 1;
        }
        else{
            zeroValue += 1;
        }
    }

    console.log((plusValue/size).toFixed(6))
    console.log((minusValue/size).toFixed(6))
    console.log((zeroValue/size).toFixed(6))
    // console.log(minusValue, plusValue, zeroValue);
}

plusMinus(arr);