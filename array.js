let a=[1,2,3,4];
let b= new Array(4,5,6,7);
// console.log(a[1]);
// console.log(a[0]);
// console.log(a[3]);

// console.log(b[0]);
// console.log(b[2]);
// console.log(b[3]);

//-------array method---------

a.push(9);
a.push(11);
console.log(a);
a.pop();
console.log(a);

a.unshift(4);
console.log(a);

a.shift();
console.log(a);

console.log(b.indexOf(5))
console.log(a.indexOf(3))