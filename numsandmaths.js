
///----nums--------
const a= new Number(100);
console.log(a);
let b=a;
b.vaue=200;
console.log(a);
console.log(b);

let score=1234.56
console.log(score.toFixed(2));
console.log(score.toPrecision(5));

const hundred=1000000;
console.log(hundred.toLocaleString());

//---------math---------

console.log(Math);
console.log(Math.abs(-3));
console.log(Math.round(7.3));
console.log(Math.ceil(4.2));
console.log(Math.max(2,4,7,9,8,10));
console.log(Math.floor(Math.random()*100)+1);
