let q = [2, 5, 1, 3, 4];
// let q = [2, 1, 5, 3, 4];
let totalBribe = 0;
// let p1=1;
// let p2=2;
// let p3=3;

// for(let i=0; i<q.length; i++){
//     if(q[i] == p1){
//         p1=p2;
//         p2=p3;
//         ++p3;
//     }
//     else if(q[i] == p2){
//         totalBribe++;    
//         p2=p3;
//         ++p3;
//     }
//     else if(q[i] == p3){
//         totalBribe += 2;
//         ++p3;
//     }
//     else{
//         console.log("Too Chaotic");
//     }

// }
// console.log(totalBribe);

for(let i=0; i<q.length-1; i++){

    if(q[i] <= q[i+1]){
        continue;
    }
    else{
        totalBribe++;
        let temp = q[i];
        q[i] = q[i+1];
        q[i+1] = temp;
    }
}

if(totalBribe > 3){
    console.log("Too Chaotic");
}
else{
    console.log(totalBribe);
}