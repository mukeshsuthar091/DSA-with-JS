let arr1 = [1,2,3,4,5];
// let arr2 = [7,69,2,221,8974];
// let arr3 = [256741038,623958417,467905213,714532089,938071625];


function miniMaxSum(arr){
    let sum = 0;

    // for(let item of arr){
    //     sum = sum + item;
    // }

    sum = arr.reduce((a,b)=>{
        return a+b;
    })

    let min = sum - Math.max(...arr);
    let max = sum - Math.min(...arr);
    console.log(min+" "+max);

}

miniMaxSum(arr1);