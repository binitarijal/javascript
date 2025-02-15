const arr = [12, 1, 3, 14, 1, 5, 16];
const b = arr.filter((i) => i > 2)
const a = arr.map((i) => i * 2);
//console.log(b);
//console.log(a);

//map chaining

const c = [1, 2, 3, 4, 5, 6, 7];

const newC = c
    .map((i) => { return i * 2 })
    .map((num) => { return num + 1 })
//console.log(newC)

//reduce
const cc = [1, 2, 3];
let initialVal=0;
const d= cc.reduce((accumulator, currentValue)=>accumulator+currentValue,initialVal);
console.log(d);