const marvel_heros = ["Ironman", "Thor", "spiderman"];
const dc_heros = ["Flash", "Superman", "Batman"];


// marvel_heros.push(dc_heros)    //not proper way
// console.log(marvel_heros);  

// const all_heros = marvel_heros.concat(dc_heros);
// console.log(all_heros);

// const all_heros = [...marvel_heros, ...dc_heros];
// console.log(all_heros);


const another_array = [1,2,3,[4,5,6],7,8,[9,10,[11,12,13,[14,15]]],16];
// console.log(another_array);

// const real_another_array = another_array.flat(Infinity)
// const real_another_array = another_array.flat(1)
// console.log(real_another_array);


console.log(Array.from("Javascript"))
// console.log(Array.from({language:"Javascript"}))

let m1=20;
let m2=40;
let m3=60;

console.log(Array.of(m1,m2,m3));