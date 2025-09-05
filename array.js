// let a=[1,2,3,4];
// let b= new Array(4,5,6,7,"bini",true);
// // console.log(a[1]);
// // console.log(a[0]);
// // console.log(a[3]);



// // console.log(b[0]);
// // console.log(b[2]);
// // console.log(b[3]);

// //-------array method---------

// a.push(9);
// a.push(11);
// //console.log(a);
// a.pop();
// //console.log(a);

// a.unshift(4);
// //console.log(a);

// a.shift();
// //console.log(a);

// //console.log(b.indexOf(5))
// //console.log(a.indexOf(3))

// //slice and spice

// const c=a.slice(0,2);
// //console.log(c);
// //console.log(a);
// const d=a.splice(0,2); // it changes original array
// //console.log(d);
// //console.log(a);

// //combining two arrays
// const e=[...a,...b];  //spread operator
// //console.log(e);

// //array inside array

// const arrr=[12,[4,5,6],7,8,[1,5,6,[8,9,3]]];
// const arr1=arrr.flat(Infinity);
// // console.log(arr1);

// console.log(Array.from("BINITA"))
// console.log(Array.from(Object.values({name:"rijal"}))) //interesting
// console.log(Array.from(Object.keys({name:"rijal"}))) //interesting


// const akk=[
//     {name:"bini",
//         age:20},
//     {name:"rijal",
//         age:21},
//     {name:"sita",
//         age:22}
// ]

// console.log(akk.map((item)=>item.name))
// console.log(akk.filter((item)=>item.age>21))
// console.log(akk.reduce((acc,item)=>acc+item.age,0))

// Removed incomplete arrow function to fix syntax error

// Example of a valid arrow function:
// Removed invalid function declaration


function hawa(){
    console.log("Hello, this is a function without a name!");
    
}
const greet = (callback) => {
    console.log("Hello, World!");
    callback();
    
};
greet(hawa);