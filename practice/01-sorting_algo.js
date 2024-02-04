let arr = [2,6,1,7,4,10,9,0];

// -------------------------------------
// Bubble sort
// -------------------------------------

// for(let i=0; i<arr.length; i++){
//     for(let j=0; j<arr.length-1-i; j++){
//         if(arr[j]>arr[j+1]){
//             // [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
//             let temp = arr[j];
//             arr[j] = arr[j+1];
//             arr[j+1] = temp;
//         }
//     }
// }
// console.log(arr)



// -------------------------------------
// Insertion sort
// -------------------------------------

// for(let i=1; i<arr.length; i++){
//     let current = arr[i];
//     j = i-1;
//     while(arr[j]>current && j>=0){
//         arr[j+1] = arr[j];
//         j--;
//     }
//     arr[j+1] = current;
// }
// console.warn(arr);


// -------------------------------------
// Selection sort
// -------------------------------------

for(let i=0; i<arr.length; i++){
    let min = i;

    for(let j=i+1; j<arr.length; j++){
        if(arr[min] > arr[j]){
            min = j;
        }
    }
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
}
console.log(arr)