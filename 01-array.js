// let arr = [11,12,13,14,15];
// let arr = new Array(1,2,3,4,5,6);   
// let arr1 = new Array(5);
// arr1[0]=21;
// arr1[1]=22;
// arr1[2]=23;
// arr1[3]=24;
// arr1[4]=25;


// for(let i of arr){
//     console.log(typeof(i));
// 
// console.log(typeof(arr));
// console.log(typeof(arr1));

let newArr = [1,2,3,4,5,6];

// newArr.push(12);
// newArr.push(10);

// let num = newArr.pop()
// console.log(num);
// newArr.pop()
console.log(newArr);

// console.log(newArr.includes(5))
// console.log(newArr.includes(7))
// console.log(newArr.indexOf(5))
// console.log(newArr.indexOf(12))

// console.log(newArr.join())
// console.log(typeof newArr.join())


let myArr = [1,2,3,4,5,6,7]

console.log("A ", myArr);

// slice does not manipulate original array
console.log(myArr.slice(1,3))
console.log("B ", myArr);

// splice manipulate original array
console.log(myArr.splice(1,3))
console.log("C ", myArr);

